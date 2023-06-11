import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import Axios from "axios";
import InputFile from "./inputFile";


const ControlPanel = (props) => {

    const [textArea, uploadtextArea] = useState(null);
    const [text, uploadtext] = useState(null);
    const [file, uploadfile] = useState([]);
    const [select, uploadSelect] = useState(null);


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

        try {
            const response = await Axios.post("http://localhost:5000/galerie", formData, {
                withCredentials: true,
            });
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    };



    return (
        <section>
            <Header disconnection={props.disconnection} status={props.status} />
            <main>
                {props.status ? <div className=" pt-5">
                    <div>

                        <form method="post" action="/galerie" encType="multipart/form-data" onSubmit={uploadContent}>

                            < InputFile
                                uploadfile={uploadfile}
                                uploadContent={uploadContent}
                                uploadtext={uploadtext}
                                uploadtextArea={uploadtextArea}
                                uploadSelect={uploadSelect} />

                        </form>
                    </div>

                </div> : <div>

                    <h1>Aceasta pagina nu exista 😤</h1>
                </div>}
            </main>
            <Footer />
        </section>
    );
}
export default ControlPanel;