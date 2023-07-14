from fastapi import FastAPI, Depends
from model.models import Test, TUsers, PLTEST
from database.database import get_db
from sqlalchemy.orm import Session
from crud.music_crud import get_musiclist
#from starlette.middleware.cors import CORSMiddleware
from fastapi.middleware.cors import CORSMiddleware
from model.mymodels import TMusic


app = FastAPI()

origins = [
    'http://localhost:3000'
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"fastapi-react link success"}#{"message" : "root"}

@app.get("/test")
def get_test(db: Session = Depends(get_db)):
    db_test = db.query(Test).offset(0).limit(100).all()
    print("get_test success")
    return db_test

@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    db_users = db.query(TUsers).offset(0).limit(100).all()
    return db_users

@app.get("/pltest")
def get_pltest(db:Session = Depends(get_db)):
    db_pltest = db.query(PLTEST).offset(0).limit(100).all()
    return db_pltest

@app.get("/musiclist")
def view_musiclist(db:Session = Depends(get_db)):
    db_user = db.query(TMusic).offset(0).limit(100).all()
    return db_user
