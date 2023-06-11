import React from "react";
import "./loaders.css";

const Loaders = () => {

    return (
        <section className="mt-5 d-flex justify-content-center">
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </section>
    );
}


export default Loaders;