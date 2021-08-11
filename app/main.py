from fastapi import FastAPI
from app.api.v1 import routers

app = FastAPI()

# Include general routes
app.include_router(routers.router)
