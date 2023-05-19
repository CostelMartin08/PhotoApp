import React, { useState } from "react";
import Axios from "axios";



const SecureComp = () => {


    const [data, setData] = useState(null);
    const [file, uploadfile] = useState(null);
    //  const [text, uploadtext] = useState(undefined);
    //Se solicita date de la ce se doreste : db or photo colection


    const getUser = () => {

        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/user",
        }).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    };



    const uploadContent = async (e) => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await Axios.post("http://localhost:5000/galerie", formData, {
                withCredentials: true,
            });
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    };

    //Se creaza o ruta prin care admin-ul modifica baza de date si photo galery

    return (
        <section>
            <div>
                <h1>Get User</h1>
                <button onClick={getUser}>Submit</button>
                {data ? <h1>Welcome Back {data.username}</h1> : null}
            </div>


            <div>

                <form onSubmit={uploadContent}>

                    <input type="file" onChange={(e) => uploadfile(e.target.files[0])} name="inputFile" id="fileInput" />


                    <button type="submit">Postează</button>

                </form>




            </div>


        </section >
    )
}

export default SecureComp;