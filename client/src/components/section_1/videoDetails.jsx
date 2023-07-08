import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Axios from "axios";
import Loaders from "./Loaders";
import { useState, useEffect } from "react";

const VideoDetails = (props) => {


    const [video, setVideo] = useState([]);
    const [loading, setloading] = useState(true);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios({
                    method: 'GET',
                    withCredentials: true,
                    url: `http://localhost:5000/galerie/video`,
                });
                setVideo(response.data);
                setloading(false);
                setUpdate(false);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const deleteVideo = async (url) => {
        try {
            await Axios({
                method: 'DELETE',
                withCredentials: true,
                url: `http://localhost:5000/delete/${url}`,
            });

            setUpdate(true);
        } catch (error) {
            console.error(error);
        }
    };


    const videoD = () => {
        return (
            video ? video.map((onevideo, index) => (

                <div key={index} className="col-12 col-lg-6 d-flex justify-content-center align-items-center ">
                    <iframe width="660" height="415" src={onevideo.url} title={onevideo.url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {props.status ? <button className="button button position-absolute me-3 top-0 end-0" onClick={() => deleteVideo(onevideo._id)} ><i className="fa-solid fa-trash fa-xl"></i></button> : null}
                </div>
            )
            ) : <Loaders />)

    }

    return (
        <section>
            <Header />
            <div className="container-fluid">
                <div className="row mt-3 g-4">
                    <div className="col-12 align-items-center justify-content-center ">
                        <div className="d-flex flex-column align-items-center pt-4 pb-4">
                            <h3 className="text-fon-big text-center bg-font-set"><strong>Portofoliu video</strong></h3>
                            <p className="text-body-secondary m-0">Pentru poze accesează </p>
                            <button className="type-button" href="#">Portofoliu Poze</button>
                        </div>
                    </div>
                    {Array.isArray(video) ? videoD() : <Loaders />}
                </div>
            </div>
            <Footer />
        </section >
    );
}

export default VideoDetails;
