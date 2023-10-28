import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Interface } from './Components/Interface.js';
import {BrowserRouter , Routes ,Route} from "react-router-dom"
function App() {
  const [check,setCheck]=useState(1);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Interface" element={ <Interface/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Interface/> */}
    </div>
    
    
  );
  
}
//{
  //currentForm == "login" ? <Login onFormSwitch={toggleform} /> : <Register onFormSwitch={toggleform} />
//}
export default App;