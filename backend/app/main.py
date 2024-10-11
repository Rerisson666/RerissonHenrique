from fastapi import FastAPI
from .routes import router

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Bem-vindo ao meu portfólio!"}

app.include_router(router)
