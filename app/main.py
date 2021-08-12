"""
Main website application entry point.
This module can only be invoked using uvicorn (http://uvicorn.org/).

Commands:
    local(Run the application using the development server):
        uvicorn main:app --reload
    production(Run the application in production mode):
        uvicorn main:app
"""

from fastapi import FastAPI
from app.api.v1 import routers

app = FastAPI()

# Include general routes
app.include_router(routers.router)
