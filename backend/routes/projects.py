# backend/routes/projects.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from crud import get_projects, create_project, update_project, delete_project
from schemas import Project, ProjectCreate, ProjectUpdate

router = APIRouter()

@router.get("/projects", response_model=list[Project])
def read_projects(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    projects = get_projects(db, skip=skip, limit=limit)
    return projects

@router.post("/projects", response_model=Project)
def create_project_route(project: ProjectCreate, db: Session = Depends(get_db)):
    return create_project(db=db, project=project)

@router.put("/projects/{project_id}", response_model=Project)
def update_project_route(project_id: int, project: ProjectUpdate, db: Session = Depends(get_db)):
    db_project = update_project(db, project_id=project_id, project=project)
    if db_project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return db_project

@router.delete("/projects/{project_id}", response_model=Project)
def delete_project_route(project_id: int, db: Session = Depends(get_db)):
    db_project = delete_project(db, project_id=project_id)
    if db_project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return db_project
