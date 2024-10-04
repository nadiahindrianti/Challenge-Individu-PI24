import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lg_ss.png';
import NavBottom from '../components/Nav-Bottom/NavBottom';
import '../styles/Home.css';

function Home() {
    return (
        <div className="content-home wrapper-mobile" style={{ height: '100%' }}>
            <div className="welcome-section">
                <header className="header">
                    <img src={logo} alt="Logo" className="logo" />
                    <h2>Halo user, Bagaimana kabar hari ini?</h2>
                </header>
            </div>

            <section className="kasus-terbaru">
                <h3>Kasus Terbaru</h3>
                <p>Lihat kisah nyata dari para perempuan pemberani. Dukung mereka dengan memberikan semangat atau bagikan pengalamanmu sendiri</p>
                <div className="kasus-cards">
                    <div className="card">
                        <h4>Jessica Mulan</h4>
                        <p>11 Oktober 2024 | 02:40pm</p>
                        <p>Saya Butuh Pertolongan: Terjebak dalam Lingkaran Kekerasan</p>
                        <button className="dukungan-btn">100 Dukungan</button>
                    </div>
                    <div className="card">
                        <h4>Jessica Mulan</h4>
                        <p>11 Oktober 2024 | 02:40pm</p>
                        <p>Saya Butuh Pertolongan: Terjebak dalam Lingkaran Kekerasan</p>
                        <button className="dukungan-btn">100 Dukungan</button>
                    </div>
                </div>
                <Link to="/selengkapnya" className="link-lengkapnya">Selengkapnya</Link>
            </section>


            <section className="info-pusat-bantuan">
                <h3>Info Pusat Bantuan</h3>
                <div className="bantuan-cards">
                    <div className="bantuan-card">
                        <span>📞 1500-899</span>
                        <p>Darurat KDRT</p>
                    </div>
                    <div className="bantuan-card">
                        <span>📞 1500-899</span>
                        <p>Darurat KDRT</p>
                    </div>
                </div>
            </section>

            <section className="tips-panduan">
                <h3>Tips dan Panduan</h3>
                <div className="tips-cards">
                    <div className="tips-card">
                        <img class="img-fluid" src="https://img.freepik.com/free-vector/flat-women-s-history-month-illustration_23-2149301501.jpg?t=st=1726025478~exp=1726029078~hmac=72d4b65f1ee84b90f2ce7a72951155f5f7429a7fc225f3e4b5fa5d2bfee2a7e7&w=740" />
                        <p>Hak - Hak Hukummu Sebagai Korban</p>
                    </div>
                    <div className="tips-card">
                        <img class="img-fluid" src="https://img.freepik.com/free-vector/woman-screaming-with-megaphone_23-2148462665.jpg?t=st=1726026356~exp=1726029956~hmac=9ad593de5170d0677901b5491e7fef1017ec7d540a437e416714a907a11d1928&w=740" />
                        <p>Strategi Menghindari Situasi Beresiko</p>
                    </div>
                </div>
            </section>

            <NavBottom/>
        </div>
    );
}

export default Home;
