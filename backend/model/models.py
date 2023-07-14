from sqlalchemy import String, Integer
from sqlalchemy.sql.schema import Column
from database.database import Base
from sqlalchemy.dialects.postgresql import UUID, TIMESTAMP, DATE, BOOLEAN



class Test(Base):
    __tablename__ = "test"
    id = Column(String, primary_key=True)
    pw = Column(String, nullable=False)

    
class TUsers(Base):
    __tablename__ = "tusers"
    userk_id = Column(UUID, primary_key=True)
    email = Column(String, nullable=False, unique=True)
    name = Column(String, nullable=False)
    password = Column(String, nullable=False)
    sns_type = Column(String)
    phone_number = Column(String, nullable=False)
    profile_img = Column(String)
    create_time = Column(TIMESTAMP)
    birth_date = Column(DATE)
    gender = Column(BOOLEAN)
    
class PLTEST(Base):
    __tablename__ = "pl_test"
    pl_id = Column(Integer, primary_key=True)
    pl_title = Column(String)
    index = Column(Integer)
    title = Column(String),
    artist = Column(String)
    
    
