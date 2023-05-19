import React, { useState, useEffect } from "react";
import Axios from "axios";




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
      console.log(res.data);
    });
  };






  return (
    <section>

      <div><p>Pagina accesibila {data} </p></div>
    </section>
  )
}


export default Main;