# backend/models/project.py
from sqlalchemy import Column, Integer, String, Text
from database import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    technologies = Column(String)  # Cambiado a String para almacenar una lista de tecnologías como una cadena
    link = Column(String)
