from pydantic import BaseModel

class Project(BaseModel):
    title: str
    description: str
    image_url: str

class Article(BaseModel):
    title: str
    content: str
    image_url: str
