"""
Module to handle all API endpoints for products.

"""

from fastapi import APIRouter
from app import schemas

router = APIRouter()


@router.post("/products", response_model=schemas.ProductOutput)
def create_product(product: schemas.ProductCreate):
    """
    Create a new product.

    Args:
        product (schemas.ProductCreate): Details required to create a product.

    Returns:
        product (schemas.ProductOutput): Details of the created product.
    """
    return product
