import { useState } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => {
        Axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:5000/login",
        })
            .then((res) => {
                if (res.status === 200) {
                    navigate('/');
                    localStorage.setItem('status', true);
                    props.connection();
                } else {
                    console.log("Eroare la autentificare");
                }
            })
            .catch((error) => {
                console.log("Eroare la autentificare:", error);
            });
    };

    return (
        <section className='vh-100'>
            <div className="container d-flex justify-content-center px-sm-4 pt-5 pb-md-5  ">
                <div className="box-model inregistrare-style mx-sm-5 p-sm-4 pt-4">
                    <div className="row g-sm-2 mx-3">
                        <h1 className="my-4 fw-normal">Conectează-te</h1>
                        <div className="col-12">
                            <label htmlFor="email">Adresa de Email </label>
                            <input type="email" onChange={(e) => setLoginUsername(e.target.value)} name="username" className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="col-12  ">
                            <label htmlFor="parol">Parola</label>
                            <input type="password" onChange={(e) => setLoginPassword(e.target.value)} name="password" className="form-control" id="parol" placeholder="Password" />
                        </div>
                        <a className="btn fw-bold  mt-3 p-2" onClick={login}>Conectare</a>
                        <a className="btn mt-3 fw-bolt "><Link to="/">Conectare ca vizitator</Link></a>
                        <a className="btn mt-3" role="button"><i className="fab fa-google"></i> Connect with Google</a>
                        <p className="mt-5 mb-3 text-center">&copy;PhotoApp</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
