import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8000', 
    credentials:true, 
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": "*",

    optionSuccessStatus:200
}
App.use(cors(corsOptions()));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
