import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Dashboard from './Dashboard';





const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Funcție de autentificare
  const handleLogin = () => {
    // Autentificarea cu succes
    setIsLoggedIn(true);
  };

  // Funcție de logout
  const handleLogout = () => {
    // Logout-ul cu succes
    setIsLoggedIn(false);
  };


  console.log(isLoggedIn)
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Main />}></Route>

        {isLoggedIn ? (<Route path="/dashboard" element={< Dashboard onLogout={handleLogout} />}></Route>)
          : (<Route path="/login" element={<Login onLogin={handleLogin} />} />)}


      </Routes>
    </Router>
  );
};

export default App;


