from fastapi import APIRouter
from .models import Project, Article

router = APIRouter()

@router.get("/projects")
def get_projects():
    return [
        {"title": "Photo Album", "description": "Um app de álbum de fotos", "image_url": "/path/to/image"},
        {"title": "Task Manager", "description": "Um gerenciador de tarefas simples", "image_url": "/path/to/image"}
    ]

@router.get("/articles")
def get_articles():
    return [
        {"title": "Event Toast", "content": "Artigo sobre toasts", "image_url": "/path/to/image"}
    ]
