import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import SecureComp from "./SecureComp";
import Main from "./Main"

function App() {




  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/controlpanel' element={<SecureComp />} ></Route>
        <Route path='/' element={<Main />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;