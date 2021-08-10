from fastapi import APIRouter

router = APIRouter()

@router.get("/", tags=["general"])
async def get_index():
    return {"message": "Hello World"}