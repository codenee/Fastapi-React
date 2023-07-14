from fastapi import FastAPI, Depends
from database.database import get_db
from sqlalchemy.orm import Session
from model.mymodels import TMusic


def get_musiclist(db : Session = Depends(get_db), offset : int = 0, limit : int = 1000):
    db_user = db.query(TMusic).offset(offset).limit(limit).all()
    return db_user