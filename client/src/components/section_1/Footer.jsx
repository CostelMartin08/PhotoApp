import React from "react";
import logo from "./logo.png";


const Footer = () => {


    return (
        <footer className="bg-set p-3 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4  d-flex align-items-center justify-content-center flex-column flex-md-row justify-content-md-start">
                        <img className="img-fluid rounded-3 border border-white" src={logo} alt="logo" width={"80px"} ></img>
                        <div className="ms-md-3 mt-3 mt-md-0">
                            <ul className="p-0 m-0">
                                <li>
                                    <a href="/" className="logo-text m-0 title-font fs-5">Fotograf Andrei Balan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                        <ul className="text-center p-0 m-0">
                            <li>
                                <small className="">+40742490856</small>
                            </li>
                            <li>
                                <small className=""><em>andreib3100@gmail.com</em></small>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                        <ul className="p-0 m-0">
                            <li>
                                <a type="button" href="https://www.instagram.com/andrei.vdr/" className="btn"><i
                                    className="fa-brands fa-instagram"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=100065019240579" type="button" className="btn"><i
                                    className="fa-brands fa-facebook"></i></a>
                                <a href="https://www.youtube.com/@andrei_balan" type="button" className="btn"><i
                                    className="fa-brands fa-youtube"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;