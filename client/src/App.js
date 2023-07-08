import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Axios from "axios";


import Main from "./components/section_1/Main";

import Register from "./components/section_1/Register";
import Login from "./components/section_1/Login";
import WeddingPhoto from "./components/section_1/weddingPhoto";
import ControlPanel from "./components/section_1/controlPanel";
import AlbumDetails from "./components/section_1/AlbumDetails";
import VideoDetails from "./components/section_1/videoDetails";
import PageNotFound from "./components/section_1/notFound";

const App = () => {
  const [connection, setConnection] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('status')) === true
    setConnection(isLoggedIn);
  }, []);

  const login = () => {
    setConnection(true);
    localStorage.setItem('status', JSON.stringify(true))
  };

  const logout = () => {
    setConnection(false);
    localStorage.removeItem('status');
  };


  const getData = async (parametruURL) => {
    try {
      const response = await Axios({
        method: 'GET',
        withCredentials: true,
        url: `http://localhost:5000/galerie/${parametruURL}`,
      });
      setdata(response.data);
    }
    catch (error) {
      console.error(error);
    }
  };


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login connection={login} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Main disconnection={logout} status={connection} loadingData={getData} sendData={data} />} />
        <Route path="portofoliuFoto/:category/:title/:index" element={<AlbumDetails loadingData={getData} sendData={data} />} />
        <Route path="/controlPanel" element={connection ? (<ControlPanel status={connection} disconnection={logout} />) : (<PageNotFound />)} />
        <Route path='portofoliuFoto/:category' element={<WeddingPhoto loadingData={getData} sendData={data} status={connection} />} />
        <Route path='/portofoliuVideo/Diverse' element={<VideoDetails status={connection} />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/notFound" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;






