import React from "react";
import "./inputfile.css"


const InputFile = (props) => {



    return (
        <section className="d-flex flex-column align-items-center">
            <div className="box-mdl">
                <span className="form-title">Încarca poze</span>
                <p className="text-danger">{props.error}</p>
                <div className="drop-container my-3">
                    <input className="file-input" type="text" onChange={(e) => props.uploadtext(e.target.value)} name="inputText" id="textInput" placeholder="Introdu titlul" ></input>
                    <textarea className="file-input" onChange={(e) => props.uploadtextArea(e.target.value)} id="story" name="story" placeholder="Povestea evenimentului" ></textarea>
                </div>
                <label htmlFor="file" className="drop-container">
                    <span className="drop-title">Drop files here</span>
                    or
                    <input type="file" id="file" onChange={(e) => props.uploadfile(e.target.files)} name="file" multiple className="file-input" />
                </label>

                <label className="drop-container" htmlFor="select">Destinatia:

                    <select name="select" id="select" className="file-input" onChange={(e) => props.uploadSelect(e.target.value)}>
                        <option value="">Alege colecția</option>
                        <option value="Nunti">Foto Nunta</option>
                        <option value="Botezuri">Foto Botez</option>
                        <option value="Diverse">Foto Diverse</option>

                    </select>
                </label>
                <button className="file-input-submit btn btn-success my-3" type="submit">Postează</button>
            </div>

        </section>
    );
}

export default InputFile; 