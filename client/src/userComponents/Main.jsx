import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';



const Main = () => {

  const [data, setdata] = useState([]);

  //Aici se incarca informatiile pentru vizitatorii site-ului
  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:5000/galerie',
    }).then((res) => {
      setdata(res.data);
    });
  };

  console.log(data);




  return (
    <section>

      <div><p>Pagina accesibila  </p>



        <button> <Link to="/login">Login</Link></button>
      </div>
    </section>
  )
}


export default Main;