import React from "react";
import logo from "./logo.png";


const Footer = () => {


    return (
        <footer className="bg-set p-3 mt-5">
            <div className="row">
                <div className="col-12 col-md-4  d-flex align-items-center justify-content-center flex-column flex-md-row justify-content-md-start">
                    <img className="img-fluid rounded-3 border border-white" src={logo} alt="logo" width={"80px"} ></img>
                    <div className="ms-md-3 mt-3 mt-md-0">
                        <ul className="p-0 m-0">
                            <li>
                                <p className="logo-text m-0 title-font">Fotograf Andrei Balan</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <ul className="text-center p-0 m-0">
                        <li>
                            <small className="">+40746731396</small>
                        </li>
                        <li>
                            <small className=""><em> balanandrei.fotograf@gmail.com</em></small>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <ul className="p-0 m-0">
                        <li>
                            <a type="button" href="https://www.instagram.com/restaurantlapunte/" className="btn"><i
                                className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/restaurantlapunte" type="button" className="btn"><i
                                className="fa-brands fa-facebook"></i></a>
                            <a href="mailto:ristorante.lapunte@gmail.com" type="button" className="btn"><i
                                className="fa-solid fa-envelope"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;