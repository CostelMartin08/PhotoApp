import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                // Redirecționează utilizatorul către ruta '/dashboard'
                navigate('/dashboard');
                onLogin();

            } else {
                // Redirecționează utilizatorul către ruta '/login' în caz de eroare
                navigate('/login');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;
