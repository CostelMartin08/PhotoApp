import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ onLogout }) => {

    const navigate = useNavigate();
    const [numbers, setNumbers] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:5000/dashboard')
            .then(response => {
                setNumbers(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleLogout = () => {
        axios.get('/logout')
            .then(response => {
                if (response.status === 200) {
                    onLogout();
                    navigate("/");

                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (


        <div>
            <button onClick={handleLogout}>Deconectare</button>


            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    );
}


export default Dashboard;