from fastapi import FastAPI
from .routers import general

app = FastAPI()

# Include general routes
app.include_router(general.router)
