"""
Module to hold schemas related to website products

These schemas are used to validate the data submitted to the API
"""
from typing import List, Optional
from pydantic import BaseModel


class ProductBase(BaseModel):
    """
    Class extending BaseModel to hold schema for common information on products.
    """
    id: Optional[int] = None
    short_description: str
    reviews: List[dict]  # Another schema
    images: List[str]  # Another schema (List of Urls)
    created_at: str
    updated_at: str
    url: str
    sizes: List[str]
    material: str
    material_description: str
    weight: float
    category: str
    subcategory: str


class ProductCreate(BaseModel):
    """
    Class extending BaseModel to hold schema for information required to create a product.
    """
    name: str
    price: float
    description: str


class ProductOutput(BaseModel):
    """
    Class extending BaseModel to hold schema for information required to return a product
    once its created.
    """
    name: str
    price: float
    description: str
    id: Optional[int] = None
