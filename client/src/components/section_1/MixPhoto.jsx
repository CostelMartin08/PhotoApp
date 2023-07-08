import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const MixPhoto = () => {
    const [data, setdata] = useState([]);
    const [final, setfinal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios({
                    method: 'GET',
                    withCredentials: true,
                    url: 'http://localhost:5000/allContent',
                });
                setdata(response.data);
                setfinal(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className="d-flex flex-column align-items-center pt-4 pb-4 title-font">
                <h3 className="text-center bg-font-set">
                    <strong>Portofoliu fotografii</strong>
                </h3>
                <p className="text-body-secondary m-0">Pentru video accesează</p>
                <Link className="type-button text-decoration-none" to="/portofoliuVideo/Nunti">
                    Portofoliu Video
                </Link>
            </div>

            {final ?
                <div className="mx-auto row">
                    {data[0] === null ? null :
                        <div className="col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
                            <Link className="card shadow" to={`portofoliuFoto/Nunti/${data[0].title}/0`}>
                                <img className="full-width-image" src={`https://balanandrei.ro/images/Nunti/${data[0].title}/${data[0].content[0]}`} alt={`galerie-foto0`} />
                                <span className="text-card ms-3 mb-3 h5" aria-label={data[0].title}>
                                    {data[0].title}
                                </span>
                            </Link>
                        </div>}
                    {data[1] === null ? null :
                        <div className="col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
                            <Link className="card shadow" to={`portofoliuFoto/Botezuri/${data[1].title}/0`}>
                                <img className="full-width-image" src={`https://balanandrei.ro/images/Nunti/${data[1].title}/${data[1].content[0]}`} alt={`galerie-foto1`} />
                                <span className="text-card ms-3 mb-3 h5" aria-label={data[1].title}>
                                    {data[1].title}
                                </span>
                            </Link>
                        </div>}
                    {data[2] === null ? null :
                        <div className="col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
                            <Link className="card shadow" to={`portofoliuFoto/Diverse/${data[2].title}/0`}>
                                <img className="full-width-image" src={`https://balanandrei.ro/images/Nunti/${data[2].title}/${data[2].content[0]}`} alt={`galerie-foto2`} />
                                <span className="text-card ms-3 mb-3 h5" aria-label={data[2].title}>
                                    {data[2].title}
                                </span>
                            </Link>
                        </div>}
                </div> : null}

            <div className="text-center pt-4">
                <Link className="button text-font" to="/portofoliuFoto/Nunti">
                    Vezi mai mult
                </Link>
            </div>
        </section>
    );
};

export default MixPhoto;
