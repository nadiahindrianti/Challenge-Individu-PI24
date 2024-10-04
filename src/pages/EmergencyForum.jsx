import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/lg_ss.png';
import imagelog from '../assets/asset_login.png';
import '../styles/Emergency.css';

const EmergencyForum = () => {
    const [fullName, setFullName] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('emergencyData'));
        if (savedData) {
            setFullName(savedData.fullName);
            setLocation(savedData.location);
            setPhoneNumber(savedData.phoneNumber);
            setMessage(savedData.message);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const requestData = {
            fullName,
            location,
            phoneNumber,
            message,
        };

        localStorage.setItem('emergencyData', JSON.stringify(requestData));
        setSuccess('Data berhasil disimpan!');
        setError('');

        navigate('/home');

    };

    const clearForm = () => {
        setFullName('');
        setLocation('');
        setPhoneNumber('');
        setMessage('');
    };

    return (
        <div className="wrapper-mobile">
            <div className="featured-image">
                <img src={logo} className="img-fluid" alt="Logo" />
            </div>
            <h2>Emergency Forum</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Nama Lengkap:</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />

                <label htmlFor="location">Lokasi Terkini:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />

                <label htmlFor="phoneNumber">Nomor Telepon:</label>
                <input
                    type="text" 
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    required
                />

                <label htmlFor="message">Pesan Darurat:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    required
                ></textarea>

                <button type="submit">Simpan Kontak Emergency</button>

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
            <div className="image-login">
                <img src={imagelog} className="img-fluid" alt="Login Asset" />
            </div>
            <div className="footer">
                <h6>Copyright 2024 SheSafe. All Rights Reserved</h6>
            </div>
        </div>
    );
};

export default EmergencyForum;
