import React from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import logo from './logo.png';


const Header = (props) => {

    const location = useLocation();
    const param = location.pathname.split('/');


    const disconnection = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/disconnection",
        }).then((res) => {
            console.log(res.data);
            props.disconnection();
        });

    }

    return (
        <header className="bg-set p-2 pt-3 pb-3 position-sticky top-0 z-2 shadow-lg">
            <div className="container">
                <nav className="navbar  navbar-expand-lg p-0">
                    <div className="d-flex align-items-center">
                        <img className="logo-img img-fluid rounded-3 border border-white" src={logo} alt="logo"></img>
                        <a href="/" className="logo-text title-font fs-6 ms-2 ms-md-3 ">Fotograf Andrei Balan</a>
                    </div>
                    <button className="navbar-toggler collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className="toggle m-0">
                            <div className="bars" id="bar1"></div>
                            <div className="bars" id="bar2"></div>
                            <div className="bars" id="bar3"></div>
                        </label>
                    </button>
                    <div className="navbar-collapse collapse d-lg-flex justify-content-end mt-2 mt-md-0" id="navbarsExample09" >
                        <ul className="text-font navbar-nav ms-1 mb-2 mb-lg-0 mt-2 mt-lg-0" >
                            <li className="nav-item">
                                <a className={location.pathname === "/" ? "nav-set nav-link" : "nav-link"} aria-current="page" href="/">Acasă</a>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={param[1] === "portofoliuFoto" ? "nav-set dropdown nav-link dropdown-toggle" : "dropdown nav-link dropdown-toggle"} to="#" data-bs-toggle="dropdown" aria-expanded="true">Portofoliu Foto</Link>
                                <ul className="bg-second-set dropdown-menu">
                                    <li><Link className="dropdown-item" to="/portofoliuFoto/Nunti">Nunți</Link></li>
                                    <li><Link className="dropdown-item" to="/portofoliuFoto/Botezuri" >Botezuri</Link></li>
                                    <li><Link className="dropdown-item" to="/portofoliuFoto/Diverse" >Diverse</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/portofoliuVideo/Diverse" className={param[1] === "portofoliuVideo" ? "nav-set nav-link" : "nav-link"} aria-expanded="false" >Portofoliu Video</Link>
                            </li>
                            {props.status ? (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" onClick={disconnection}>Deconectare</Link>
                                </li>) : null}
                            {props.status ? (
                                <li className="nav-item">
                                    <Link className={location.pathname === "/controlPanel" ? "nav-set nav-link" : "nav-link"} to="/controlPanel">Încarca</Link>
                                </li>) : null}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;



