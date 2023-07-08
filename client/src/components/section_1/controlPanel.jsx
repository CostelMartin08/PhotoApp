import React, { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import Axios from "axios";
import InputFile from "./inputFile";


const ControlPanel = (props) => {

    const [textArea, uploadtextArea] = useState('');
    const [text, uploadtext] = useState(null);
    const [file, uploadfile] = useState([]);
    const [select, uploadSelect] = useState(null);
    const [response, setResponse] = useState(false);
    const [video, uploadVideo] = useState(null);
    const [error, setError] = useState(undefined);

    const uploadContent = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("select", select);
        formData.append("text", text);
        formData.append("textArea", textArea);

        switch (select) {
            case "Nunti":
                for (let i = 0; i < file.length; i++) {
                    formData.append(`nunti`, file[i]);
                }
                break;
            case "Botezuri":
                for (let i = 0; i < file.length; i++) {
                    formData.append(`botezuri`, file[i]);
                }
                break;
            case "Diverse":
                for (let i = 0; i < file.length; i++) {
                    formData.append(`diverse`, file[i]);
                }
                break;

        }

        Axios.post("http://localhost:5000/galerie", formData, {
            withCredentials: true,
        })
            .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                    setResponse(true);
                } else {
                    setError(response.message);
                }
            })
            .catch((error) => {
                setError(error.message);
            });

    };

    const uploadVideoZ = (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("inputVideo", video);
        Axios.post("http://localhost:5000/galerie/video", formData, {
            withCredentials: true,
        })
            .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                    setResponse(true);

                } else {
                    setError(response.message);
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    useEffect(() => {

        if (response) {
            uploadtext(null);
            uploadfile(null);
            uploadtextArea(null);
            uploadSelect(undefined);
        }
    }, [response])


    return (
        <section>
            <Header disconnection={props.disconnection} status={props.status} />
            <main>
                <div className=" pt-5">
                    <div className="row  align-items-center justify-content-center">
                        <div className="col-12 col-md-5">
                            <form method="post" action="/galerie" encType="multipart/form-data" onSubmit={uploadContent}>

                                < InputFile
                                    uploadfile={uploadfile}
                                    uploadContent={uploadContent}
                                    uploadtext={uploadtext}
                                    uploadtextArea={uploadtextArea}
                                    uploadSelect={uploadSelect} />

                            </form>
                        </div>
                        <div className="col-12 col-md-5 pt-4">
                            <div className="d-flex flex-column align-items-center">
                                <div className="box-mdl">
                                    <form method="post" action="/galerie/video" encType="multipart/form-data" onSubmit={uploadVideoZ}>
                                        <span className="form-title">Încarcă video </span>
                                        <div className="drop-container my-3">
                                            <input className="file-input" type="text" onChange={(e) => uploadVideo(e.target.value)} name="inputVideo" id="VideoInput" placeholder="Introdu URL-ul" ></input>
                                        </div>
                                        <label className="drop-container" htmlFor="select">Destinatia:

                                            <select name="select" id="select" className="file-input">
                                                <option value="">Alege colecția</option>
                                                <option value="Diverse">Video Diverse</option>

                                            </select>
                                        </label>
                                        <button className="file-input-submit btn btn-success my-3" type="submit">Postează</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </section>
    );
}
export default ControlPanel;





