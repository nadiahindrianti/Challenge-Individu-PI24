import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/lg_ss.png';
import imagelog from '../assets/asset_login.png';
import '../styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const login = () => {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        
        if (!email || !password) {
            setErrorMessage("Email and password cannot be empty.");
            return;
        }

        try {
            const user = users.find(
                (user) =>
                    user.email === email &&
                    user.password === password &&
                    user.status === 1 &&
                    user.active === 1
            );

            if (user) {
                localStorage.setItem("LoggedIn", "true");
                navigate('/home'); 
            } else {
                setErrorMessage("Invalid Email or Password");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="content-home wrapper-mobile" style={{ height: '100%' }}>
            <div id="navigation"></div>

            <div className="login-content container d-flex justify-content-center align-items-center min-vh-100 wrapper-mobile">
                <div className="row justify-content-center align-items-center">
                    <div className="featured-image">
                        <img src={logo} className="img-fluid" alt="Logo" />
                    </div>
                    <div className="row align-items-center">
                        <div className="header-text mb-4">
                            <h1>Masuk Akun</h1>
                            <p className="desc">
                                Ruang Aman untuk Pemberdayaan dan Keadilan Perempuan
                            </p>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="input-group mb-4">
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>

                        {errorMessage && <div id="error-message">{errorMessage}</div>}
                        <div
                            className="input-group mb-3 d-flex justify-content-center align-items-center">
                            <button
                                className="lg-btn-primary my-3"
                                onClick={login} 
                            >
                                Masuk
                            </button>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-1" style={{ justifyContent: 'center'}}>
                            <small className="text-wrap text-center" style={{ fontSize: '14px' }}>
                                Belum Punya Akun?
                            </small>
                            <Link
                                to="/register"
                                className="fw-bold"
                                style={{ fontSize: '14px' }}
                            >
                                Daftar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper-mobile img-login-container">
                <div className="image-login">
                    <img src={imagelog} className="img-fluid" alt="Login Asset" />
                </div>
                <div className="footer">
                    <h6>Copyright 2024 SheSafe. All Rights Reserved</h6>
                </div>
            </div>
        </div>
    );
}

export default Login;
