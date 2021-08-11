from fastapi import APIRouter
from app import schemas

router = APIRouter()

# Create a new product
@router.post("/products", response_model=schemas.ProductOutput)
def create_product(product: schemas.ProductCreate):
    return product