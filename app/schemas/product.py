from pydantic import BaseModel
from typing import List, Optional

# Product schema
class ProductBase(BaseModel):
    id: Optional[int] = None
    short_description: str
    reviews: List[dict] # Another schema
    images: List[str] # Another schema (List of Urls)
    created_at: str
    updated_at: str
    url: str
    sizes: List[str]
    material: str
    material_description: str
    weight: float
    category: str
    subcategory: str

# ProductCreate schema
class ProductCreate(BaseModel):
    name: str
    price: float
    description: str

# ProductOutput schema
class ProductOutput(BaseModel):
    name: str
    price: float
    description: str
    id: Optional[int] = None



