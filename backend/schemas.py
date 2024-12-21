# backend/schemas.py
from pydantic import BaseModel

class ProjectBase(BaseModel):
    title: str
    description: str
    technologies: str  # Cambiado a String para almacenar una lista de tecnologías como una cadena
    link: str

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int

    class Config:
        orm_mode = True
