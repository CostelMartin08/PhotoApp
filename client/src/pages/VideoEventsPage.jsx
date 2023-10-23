import React from "react";
import Header from "../containers/Header";
import Footer from "../components/Footer";
import Loaders from "../components/Loaders";
import DeleteVideo from "../containers/deleteVideo";
import { Link } from "react-router-dom";
import { routesBase } from "../scripts/routes";
import { useTheme } from "../scripts/useTheme";
import useDataVideo from "../hooks/useDataVideo";
import PageNotFound from "./NotFoundPage";

const VideoDetails = (props) => {


    const theme = useTheme();

    const style = {
        videoSize: {
            width: "530px",
        }
    }

    const { data, isLoading, error } = useDataVideo();


    if (isLoading) return <Loaders />;
    if (error || !data) return <PageNotFound />;

    return (
        <section className={theme.mod.bgB}>
            <Header theme={theme} fileMod={theme.mod.bgHeader} />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 align-items-center justify-content-center p-0">
                        <div className="container d-flex mx-auto flex-column align-items-left  p-0">
                            <h2 className={`title-font ms-3`}>
                                Portofoliu Video
                                <hr className={`${theme.mod.bg} pt-1 mx-1`} />
                            </h2>
                        </div>
                    </div>
                    <div className=" container d-flex justify-content-end text-center  py-4">
                        <Link
                            to={routesBase.portofoliuFotoBotezuri}
                            className="cta text-decoration-none">
                            <span className={`${theme.mod.contrastText} p-0  hover-underline-animation text-font fs-6`}> Vezi Portofoliu Foto </span>
                        </Link>
                    </div>
                    {data.map((onevideo, index) => (
                        <div
                            key={index}
                            className="d-flex my-3 col-md-6 p-0 justify-content-center align-items-center">
                            <div className="ms-1 position-relative"
                                style={style.videoSize}>
                                <iframe
                                    className="video-size"
                                    src={onevideo.url}
                                    title={onevideo.url}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                                {props.status ?
                                    <DeleteVideo url={onevideo._id} />
                                    : null}
                            </div>
                        </div>))}
                </div>
            </div>
            <Footer theme={theme} />
        </section >
    );
}

export default VideoDetails;
