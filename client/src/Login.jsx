import React, { useState } from "react";
import Axios from "axios";



const Login = () => {

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
        }).then((res) => console.log(res));
    };

    return (

        <section>

            <div>
                <h1>Login</h1>
                <input
                    placeholder="username"
                    onChange={(e) => setLoginUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button onClick={login}>Submit</button>
            </div>

        </section>


    );



}

export default Login;