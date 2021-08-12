"""
Module to handle all generic API endpoints which are not specific to any
resource.

"""

from fastapi import APIRouter

router = APIRouter()


@router.get("/", tags=["general"])
async def get_index():
    """
    Return Index Page

    """
    return {"message": "Hello World"}
