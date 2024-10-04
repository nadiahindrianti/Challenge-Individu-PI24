import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/lg_ss.png';
import imagelog from '../assets/asset_login.png';
import '../styles/Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        gender: '',
        birthDate: '',
        identityProof: null,
        password: '',
        passwordConfirm: '',
    });

    const navigate = useNavigate(); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'identityProof') {
            setFormData({ ...formData, [name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.passwordConfirm) {
            alert("Password dan Konfirmasi Password tidak cocok");
            return;
        }

        localStorage.setItem('registrationData', JSON.stringify(formData));

        setFormData({
            fullName: '',
            email: '',
            gender: '',
            birthDate: '',
            identityProof: null,
            password: '',
            passwordConfirm: '',
        });

        navigate('/login');
    };

    return (
        <div className="content-home wrapper-mobile" style={{ height: '100%' }}>
            <div className="row justify-content-center align-items-center">
                <div className="featured-image">
                    <img src={logo} className="img-fluid" alt="Logo" />
                </div>
                <h2 className="register-title">Daftar Akun</h2>
                <p className="register-subtitle">Ruang Aman untuk Pemberdayaan dan Keadilan Perempuan</p>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <label htmlFor="full_name">Nama Lengkap</label>
                        <input
                            type="text"
                            id="full_name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Nama Lengkap"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group half-width">
                            <label htmlFor="gender">Jenis Kelamin</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Pilih Jenis Kelamin</option>
                                <option value="Perempuan">Perempuan</option>
                                <option value="Laki-laki">Laki-laki</option>
                            </select>
                        </div>
                        <div className="form-group half-width">
                            <label htmlFor="birth_date">Tanggal Lahir</label>
                            <input
                                type="date"
                                id="birth_date"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="identityProof">Bukti Identitas</label>
                        <input
                            type="file"
                            id="identityProof"
                            name="identityProof"
                            onChange={handleChange}
                            required
                        />
                        <small>**Maximum file 2mb</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm">Konfirmasi Password</label>
                        <input
                            type="password"
                            id="passwordConfirm"
                            name="passwordConfirm"
                            value={formData.passwordConfirm}
                            onChange={handleChange}
                            placeholder="Konfirmasi Password"
                            required
                        />
                    </div>
                    <button type="submit" className="register-btn">Daftar</button>
                </form>
                <div className="register-footer">
                    <p>Sudah Punya Akun? <Link to="/login" className="register-link">Masuk</Link></p>
                </div>
                <div className="image-login">
                    <img src={imagelog} className="img-fluid" alt="Login Asset" />
                </div>
                <div className="footer">
                    <h6>Copyright 2024 SheSafe. All Rights Reserved</h6>
                </div>
            </div>
        </div>
    );
};

export default Register;
