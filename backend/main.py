# backend/main.py
from fastapi import FastAPI
from database import engine, Base
#incluimos las rutas de proyectos
from routes.projects import router as projects_router
#p servir el archivo Png desde la carpeta static
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Montar la carpeta estática para servir archivos PNG
app.mount("/static", StaticFiles(directory="static"), name="static")

# Incluir las rutas de proyectos
app.include_router(projects_router)

# Crear todas las tablas en la base de datos
@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"message": "Welcome to senseiFolio API"}
