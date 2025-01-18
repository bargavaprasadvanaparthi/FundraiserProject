import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styling/Logout.css"; 

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
     localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className='logout-container'>
            <h1>Log out</h1>
            <button onClick={handleLogout}>Confirm Logout</button>
        </div>
    );
};

export default Logout;