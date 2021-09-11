"""
Module to handle all API endpoints for products.

"""

# Python Libraries
import os
import uuid
import logging

# Third party libraries
from typing import List
from fastapi import APIRouter, File, UploadFile, Request, Form
from fastapi.responses import HTMLResponse,JSONResponse
from elasticsearch import Elasticsearch
from botocore.exceptions import NoCredentialsError

# Project dependent libraries
from utils.s3_operations.s3_utils import S3Events
# from app import schemas

logging.basicConfig(filename='product_api.log', level=logging.INFO)


router = APIRouter()

es = Elasticsearch(host="localhost", port=9200)
es = Elasticsearch()
AWS_S3_BUCKET_NAME=os.environ['AWS_S3_BUCKET_NAME']
AWS_ACCESS_KEY_ID = os.environ['AWS_ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']
AWS_REGION = os.environ['AWS_REGION']

s3_client = S3Events(AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY,AWS_REGION)

# Endpoint for fetching all the products
@router.get("/product_info/")
async def get_products(request:Request):
    logging.info(request)
    res = es.search(index="product_info",body={'query': {'match_all' : {}}})
    return JSONResponse(content={"result":res['hits']['hits']})



# Endpoint for uploading files
@router.post("/uploadfiles/")
async def create_upload_files(product:str= Form(...),description:str= Form(...),
                            files: List[UploadFile] = File(...) ):
    uuid_string=str(uuid.uuid4())
    try:
        url_list=[]
        for file in files:
            try:
                response =s3_client.sync_upload_fileobj(file_name=file.file,
                bucket= AWS_S3_BUCKET_NAME,key=uuid_string+"/"+file.filename )
                url_list.append("https://s3.amazonaws.com/"+AWS_S3_BUCKET_NAME+
                "/"+uuid_string+"/"+file.filename)
            except FileNotFoundError:
                logging.error("The file was not found")
                return {"status_code":409,"return_message":"Bad Request"}
            except NoCredentialsError:
                logging.error("Credentials not available")
                return {"status_code":409,"return_message":"Bad Request"}
            except Exception as exception:
                logging.error(exception)
                return {"status_code":409,"return_message":"File cannot be uploaded at the moment"}
        if response:
            logging.info("Files uploaded on s3 bucket at the following path: %s",
            str(','.join(str(x) for x in url_list)))
            data={
                "product_name":product,
                "description":description,
                "media_list":url_list
            }

            es.indices.create(index="product_info")
            res = es.index(index="product_info", doc_type='authors', id=uuid_string, body=data)
            logging.info("Data has been inserted in elasticsearch %s",res)
            return {"status_code":200,"return_message":"File(s) have been uploaded"}
        else:
            return {"status_code":409,"return_message":"File cannot be uploaded at the moment"}
    except Exception as exception:
        logging.error(exception)
        return {"status_code":409,"return_message":"File cannot be uploaded at the moment"}

# Initial endpoint
@router.get("/")
async def main():
    content = """
<body>
<form action="/uploadfiles/" enctype="multipart/form-data" method="post">
<p>Please enter the name of the product</p>
<input name="product" type="text"><br>
<p> Enter the description of the product </p>
<textarea name="description" type="text" rows="4" cols="40"></textarea><br><br>
<input name="files" type="file" multiple><br><br><br>
<input type="submit">
</form>
</body>
    """
    return HTMLResponse(content=content)



# Endpoint for fetching particular product
@router.get("/product_info/{product_id}")
async def get_product_info(product_id):
    res = es.search(index="product_info",body={'query': {'match' : {"_id":product_id}}})
    return JSONResponse(content={"result":res['hits']['hits']})

# Endpoint for updating product information
@router.put("/product_info/{product_id}")
async def update_product(product_id:str,delete_list:List[str],
                        add_items: List[UploadFile] = File(...),
                        product:str= Form(...),description:str= Form(...)):
    try:
        res = es.search(index="product_info",body={'query': {'match' : {"_id":product_id}}})
        s3_list=res['hits']['hits'][0]['_source']['media_list']

        delete_list = [i.replace("https://s3.amazonaws.com/"+
                        AWS_S3_BUCKET_NAME+"/","") for i in delete_list]
        for files in delete_list:
            response=s3_client.sync_delete_folder(AWS_S3_BUCKET_NAME,files)
        if response:
            s3_list=[x for x in s3_list if x not in delete_list]
            for file in add_items:
                response =s3_client.sync_upload_fileobj(file_name=file.file,
                bucket= AWS_S3_BUCKET_NAME,key=product_id+"/"+file.filename)
                s3_list.append("https://s3.amazonaws.com/"+
                                AWS_S3_BUCKET_NAME+"/"+product_id+"/"+file.filename)
            es.update_by_query(index="product_info",id=product_id,
            body={"doc":{"product_name":product,"description":description,"media_list":s3_list}})
            return {"status_code":200,"return_message":"Product has been updated"}
        else:
            return {"status_code":409,"return_message":"Product cannot be deleted at the moment"}
    except Exception as exception:
        logging.error(exception)
        return {"status_code":409,"return_message":"Product cannot be deleted at the moment"}
# Endpoint for deleting product information
@router.delete("/product_info/{product_id}")
async def delete_product(product_id):
    try:
        res = es.search(index="product_info",body={'query': {'match' : {"_id":product_id}}})
        s3_list=res['hits']['hits'][0]['_source']['media_list']
        s3_list=[i.replace("https://s3.amazonaws.com/"+AWS_S3_BUCKET_NAME+"/","") for i in s3_list]
        logging.info("Files to be deleted are: %s",str(','.join(str(x) for x in s3_list)))
        for files in s3_list:
            response=s3_client.sync_delete_folder(AWS_S3_BUCKET_NAME,files)
        if response:
            es.delete_by_query(index="product_info",body={'query': {'match' : {"_id":product_id}}})
            return {"status_code":200,"return_message":"Product has been deleted"}
        else:
            return {"status_code":409,"return_message":"Product cannot be deleted at the moment"}
    except Exception as exception:
        logging.error(exception)
        return {"status_code":409,"return_message":"Product cannot be deleted at the moment"}

# Endpoint called when app is shutdown
@router.on_event("shutdown")
async def app_shutdown():
    await es.close()
