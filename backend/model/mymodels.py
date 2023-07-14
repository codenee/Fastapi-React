from sqlalchemy import String, Integer, Float
from sqlalchemy.sql.schema import Column
from database.database import Base
from pydantic import BaseModel


class TMusic(Base):
    __tablename__ = "musics"
    id = Column(Integer, primary_key = True)
    name = Column(String)
    singer = Column(String)
    weight = Column(String)
    weight_labels = Column(String)
    
