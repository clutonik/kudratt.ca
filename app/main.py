from fastapi import FastAPI
from .api.v1 import general

app = FastAPI()

# Include general routes
app.include_router(general.router)
