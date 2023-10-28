import pickle
from fastapi import FastAPI,Request
from fastapi.responses import JSONResponse
import numpy as np
import pandas as pd
from ext123 import FUNC
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pickle_in=open("/Users/sahithreddythummala/Downloads/model.pkl","rb")
classifier=pickle.load(pickle_in)
@app.get('/')
def index():
    return {'message':'hello'}
@app.get('/{name}')
def get_name(name:str):
    return {'welcome to this webpage': f'{name}'}

@app.post('/predict')
async def predict(s1 : int,s2 : int,s3 : int,s4:int):
    # data=data.json()
    # data=data.dict()
    print(s1,s2,s3,s4)
    # print(type(data))
    # print("hello")
    # Symptom1 = 0
    # print(Symptom1)
    # Symptom2 = 1
    # Symptom3 = 2
    # Symptom4 = 3
    prediction = classifier.predict([[s1,s2,s3,s4]])
    print(prediction )
    return{
        'prediction': prediction[0]
    }
@app.exception_handler(ValueError)
async def value_error_exception_handler(request: Request, exc: ValueError):
    return JSONResponse(
        status_code=400,
        content={"message": str(exc)},
    )
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
