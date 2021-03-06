"""
Module to hold all API endpoints in a single FastAPI.APIRouter instance.

"""

from fastapi import APIRouter
from app.api.v1.endpoints import general, products

router = APIRouter()

router.include_router(general.router, tags=['general'])
router.include_router(products.router, tags=['products'])
