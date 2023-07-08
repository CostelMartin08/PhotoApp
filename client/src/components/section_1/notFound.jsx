import React from "react";
import "./notFound.css";



const PageNotFound = () => {




    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center text-font ">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2 text-font">
                                    Se pare că te-ai pierdut
                                </h3>

                                <p className="text-font">pagina pe care o cauți nu este disponibilă!</p>

                                <a href="/" className="button">Acasă</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageNotFound;