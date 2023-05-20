import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import logo from './logo.png';

const SecureComp = () => {


    const [data, setData] = useState(null);
    const [file, uploadfile] = useState(null);
   
    useEffect(() => {
        getUser();
      }, []);

    const getUser = () => {

        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/user",
        }).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    };



    const uploadContent = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await Axios.post("http://localhost:5000/galerie", formData, {
                withCredentials: true,
            });
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    };


    const disconnection = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/disconnection",
        }).then((res) => {
            console.log(res.data);
        });

    }

    //Se creaza o ruta prin care admin-ul modifica baza de date si photo galery

    return (
        <section>



<div className="container">
    <header className="bg-set d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
       <img className="img-fluid" src={logo} alt="poza" width={"80px"}></img>
        <span className="fs-4">{data ? <h4>Welcome Back {data.username}</h4> : null}</span>
      </a>

      <ul className="nav">
        <li className=""><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
    </header>
  </div>

























            <div>
                
            </div>


            <div>

                <form onSubmit={uploadContent}>

                    <input type="file" onChange={(e) => uploadfile(e.target.files[0])} name="inputFile" id="fileInput" />


                    <button type="submit">Postează</button>

                </form>
            </div>

            <div>
                <button> <Link to="/" onClick={disconnection}>Deconectare</Link></button>
            </div>


        </section >
    )
}

export default SecureComp;