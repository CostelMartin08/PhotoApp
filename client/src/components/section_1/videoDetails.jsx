import React from "react";
import Header from "./Header";
import Footer from "./Footer";



const VideoDetails = () => {


    return (
        <section>
            <Header />

            <div className="container-fluid">
                <div className="row mt-3 g-4">
                    <div className="col-12 align-items-center justify-content-center">
                        <div className="d-flex flex-column align-items-center pt-4 pb-4">
                            <h3 className="text-fon-big text-center bg-font-set"><strong>Portofoliu video</strong></h3>
                            <p className="text-body-secondary m-0">Pentru poze accesează </p>
                            <button className="type-button" href="#">Portofoliu Poze</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">

                        <iframe width="660" height="415" src="https://www.youtube.com/embed/DKPWIQVWtxI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">

                        <iframe width="660" height="415" src="https://www.youtube.com/embed/H4q-woTbOg0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">

                        <iframe width="660" height="415" src="https://www.youtube.com/embed/WGqr_daWTfY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">

                        <iframe width="660" height="415" src="https://www.youtube.com/embed/BvNp7vR-HwI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    </div>
                </div>



            </div>



            <Footer />


        </section>
    );
}

export default VideoDetails;