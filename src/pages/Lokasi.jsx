import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/lg_ss.png';
import imagelog from '../assets/asset_login.png';
import '../styles/Lokasi.css';

const Lokasi = () => {
    const [lokasi, setLokasi] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLokasi(e.target.value);
    };

    const handleBack = () => {
        navigate('/home');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = [
            { id: 1, kota: 'Jakarta Pusat', namakantor: 'Kantor Polisi Merdeka Barat', lokasi: 'Jalan Medan Merdeka Barat, Gambir, Jakarta Pusat, Indonesia 10110 Jakarta Pusat Daerah Khusus Ibukota Jakarta' },
            { id: 2, kota: 'Jakarta Pusat', namakantor: 'Kantor Polisi Cikini', lokasi: 'Jalan Cikini Raya 10330 Jakarta Pusat Daerah Khusus Ibukota Jakarta' },
            { id: 3, kota: 'Jakarta Timur', namakantor: 'Kantor Polisi Jatinegara', lokasi: 'Jalan Raya Jatinegara Timur 13310 Jakarta Timur Daerah Khusus Ibukota Jakarta' },
            { id: 4, kota: 'Jakarta Selatan', namakantor: 'Kantor Polisi Blok M', lokasi: 'Jalan Melawai, Kebayoran Baru 12160 Jakarta Selatan Daerah Khusus Ibukota Jakarta' },
            { id: 5, kota: 'Jakarta Barat', namakantor: 'Kantor Polisi Taman Sari', lokasi: 'Jalan Mangga Besar 11180 Jakarta Barat Daerah Khusus Ibukota Jakarta' },
            { id: 6, kota: 'Jakarta Utara', namakantor: 'Kantor Polisi Cilincing', lokasi: 'Jalan Raya Cilincing 14120 Jakarta Utara Daerah Khusus Ibukota Jakarta' },
            { id: 7, kota: 'Bandung', namakantor: 'Polsek Bandung Wetan', lokasi: 'Jalan Cihapit 40114 Bandung Jawa Barat' },
            { id: 8, kota: 'Bandung', namakantor: 'Polsek Cicendo', lokasi: 'Jalan Dr. Djundjunan No.168, Cicendo, Bandung, Jawa Barat 40173' },
            { id: 9, kota: 'Bandung', namakantor: 'Polsek Kiaracondong', lokasi: 'Jalan Ibrahim Adjie 40284 Bandung Jawa Barat' },
            { id: 10, kota: 'Semarang', namakantor: 'Polsek Semarang Tengah', lokasi: 'Jalan Pemuda No. 75, Semarang Tengah, Kota Semarang, Jawa Tengah 50132' },
            { id: 11, kota: 'Surabaya', namakantor: 'Polsek Genteng', lokasi: 'Jalan Tunjungan No. 49, Genteng, Surabaya, Jawa Timur 60275' },
            { id: 12, kota: 'Surabaya', namakantor: 'Polsek Tambaksari', lokasi: 'Jalan Tambaksari No. 125, Surabaya, Jawa Timur 60136' },
            { id: 13, kota: 'Yogyakarta', namakantor: 'Polsek Gondokusuman', lokasi: 'Jalan C. Simanjuntak No.28, Terban, Gondokusuman, Yogyakarta 55223' },
            { id: 14, kota: 'Denpasar', namakantor: 'Polsek Denpasar Selatan', lokasi: 'Jalan Pulau Moyo No.1, Pedungan, Denpasar Selatan, Bali 80222' },
            { id: 15, kota: 'Medan', namakantor: 'Polsek Medan Baru', lokasi: 'Jalan Nibung Raya No.4, Medan Baru, Kota Medan, Sumatera Utara 20154' },
            { id: 16, kota: 'Jakarta Pusat', namakantor: 'Kantor Polisi Gambir', lokasi: 'Jalan Medan Merdeka Timur No. 17, Gambir, Jakarta Pusat 10110' },
            { id: 17, kota: 'Jakarta Pusat', namakantor: 'Kantor Polisi Senen', lokasi: 'Jalan Kramat Raya No. 18, Senen, Jakarta Pusat 10450' },
            { id: 18, kota: 'Jakarta Pusat', namakantor: 'Kantor Polisi Tanah Abang', lokasi: 'Jalan KH. Mas Mansyur No.1, Tanah Abang, Jakarta Pusat 10230' },
            { id: 19, kota: 'Jakarta Pusat', namakantor: 'Komnas HAM', lokasi: 'Jalan Latuharhary No.4B, Menteng, Jakarta Pusat 10310' },
            { id: 20, kota: 'Jakarta Pusat', namakantor: 'Kementerian Pemberdayaan Perempuan dan Perlindungan Anak', lokasi: 'Jalan Medan Merdeka Barat No.15, Gambir, Jakarta Pusat 10110' },
            { id: 21, kota: 'Jakarta Selatan', namakantor: 'Polsek Kebayoran Lama', lokasi: 'Jalan Kebayoran Lama No.21, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12230' },
            { id: 22, kota: 'Jakarta Timur', namakantor: 'Polsek Pasar Rebo', lokasi: 'Jalan Raya Bogor KM.22, Pasar Rebo, Jakarta Timur 13760' },
            { id: 23, kota: 'Jakarta Utara', namakantor: 'Polsek Kelapa Gading', lokasi: 'Jalan Boulevard Barat, Kelapa Gading, Jakarta Utara 14240' },
            { id: 24, kota: 'Jakarta Barat', namakantor: 'Polsek Palmerah', lokasi: 'Jalan Palmerah Barat No.22, Palmerah, Jakarta Barat 11480' },
            { id: 25, kota: 'Surabaya', namakantor: 'Kantor Polisi Krembangan', lokasi: 'Jalan Perak Barat No.28, Krembangan, Surabaya, Jawa Timur 60177' },
            { id: 26, kota: 'Surabaya', namakantor: 'Kantor Polisi Wonokromo', lokasi: 'Jalan Raya Darmo No.61, Wonokromo, Surabaya 60241' },
            { id: 27, kota: 'Surabaya', namakantor: 'Kantor Polisi Gubeng', lokasi: 'Jalan Sumatera No.32, Gubeng, Surabaya, Jawa Timur 60281' },
            { id: 28, kota: 'Semarang', namakantor: 'Polsek Semarang Selatan', lokasi: 'Jalan MT. Haryono No.88, Semarang Selatan, Semarang 50243' },
            { id: 29, kota: 'Semarang', namakantor: 'Polsek Semarang Barat', lokasi: 'Jalan Jenderal Sudirman No.53, Semarang Barat, Semarang 50149' },
            { id: 30, kota: 'Yogyakarta', namakantor: 'Polsek Kotagede', lokasi: 'Jalan Mondorakan No.2, Kotagede, Yogyakarta 55173' },
            { id: 31, kota: 'Bandung', namakantor: 'Polsek Buah Batu', lokasi: 'Jalan Terusan Buah Batu No.21, Buah Batu, Bandung 40287' },
            { id: 32, kota: 'Bandung', namakantor: 'Polsek Sukajadi', lokasi: 'Jalan Sukajadi No.123, Sukajadi, Bandung 40162' },
            { id: 33, kota: 'Denpasar', namakantor: 'Polsek Kuta Utara', lokasi: 'Jalan Raya Kerobokan No.22, Kuta Utara, Bali 80361' },
            { id: 34, kota: 'Denpasar', namakantor: 'Polsek Denpasar Timur', lokasi: 'Jalan WR Supratman No.9, Denpasar Timur, Bali 80237' },
            { id: 35, kota: 'Denpasar', namakantor: 'Polsek Denpasar Barat', lokasi: 'Jalan Gunung Agung No.12, Denpasar Barat, Bali 80119' },
            { id: 36, kota: 'Makassar', namakantor: 'Polsek Ujung Pandang', lokasi: 'Jalan Sultan Alauddin No.112, Ujung Pandang, Makassar 90231' },
            { id: 37, kota: 'Makassar', namakantor: 'Polsek Tamalate', lokasi: 'Jalan Daeng Tata No.22, Tamalate, Makassar 90221' },
            { id: 38, kota: 'Medan', namakantor: 'Polsek Medan Area', lokasi: 'Jalan Denai No.2, Medan Area, Medan 20228' },
            { id: 39, kota: 'Medan', namakantor: 'Polsek Medan Sunggal', lokasi: 'Jalan Sunggal No.88, Medan Sunggal, Medan 20122' },
            { id: 40, kota: 'Palembang', namakantor: 'Polsek Ilir Timur I', lokasi: 'Jalan Jenderal Sudirman No.79, Ilir Timur, Palembang 30128' },
            { id: 41, kota: 'Palembang', namakantor: 'Polsek Gandus', lokasi: 'Jalan Gandus No.45, Palembang, Sumatera Selatan 30147' },
            { id: 42, kota: 'Banjarmasin', namakantor: 'Polsek Banjarmasin Selatan', lokasi: 'Jalan Sutoyo No.33, Banjarmasin Selatan, Kalimantan Selatan 70117' },
            { id: 43, kota: 'Banjarmasin', namakantor: 'Polsek Banjarmasin Barat', lokasi: 'Jalan A. Yani No.16, Banjarmasin Barat, Kalimantan Selatan 70122' },
            { id: 44, kota: 'Manado', namakantor: 'Polsek Wenang', lokasi: 'Jalan Sam Ratulangi No.7, Wenang, Manado 95115' },
            { id: 45, kota: 'Manado', namakantor: 'Polsek Singkil', lokasi: 'Jalan Sisingamangaraja No.99, Singkil, Manado 95123' },
            { id: 46, kota: 'Jayapura', namakantor: 'Polsek Jayapura Utara', lokasi: 'Jalan Pasifik Permai, Jayapura Utara, Papua 99112' },
            { id: 47, kota: 'Jayapura', namakantor: 'Polsek Jayapura Selatan', lokasi: 'Jalan Koti No.33, Jayapura Selatan, Papua 99114' },
            { id: 48, kota: 'Ambon', namakantor: 'Polsek Sirimau', lokasi: 'Jalan AY Patty No.15, Sirimau, Ambon 97127' },
            { id: 49, kota: 'Ambon', namakantor: 'Polsek Nusaniwe', lokasi: 'Jalan Pattimura No.67, Nusaniwe, Ambon 97123' },
            { id: 50, kota: 'Kupang', namakantor: 'Polsek Kelapa Lima', lokasi: 'Jalan Timor Raya No.22, Kelapa Lima, Kupang, Nusa Tenggara Timur 85228' },
            { id: 51, kota: 'Jakarta Pusat', namakantor: 'Komnas HAM Pusat', lokasi: 'Jalan Latuharhary No.4B, Menteng, Jakarta Pusat 10310' },
            { id: 52, kota: 'Bandung', namakantor: 'Komnas HAM Bandung', lokasi: 'Jalan Diponegoro No.48, Bandung, Jawa Barat 40115' },
            { id: 53, kota: 'Surabaya', namakantor: 'Komnas HAM Surabaya', lokasi: 'Jalan Dr. Soetomo No.65, Surabaya, Jawa Timur 60264' },
            { id: 54, kota: 'Semarang', namakantor: 'Komnas HAM Semarang', lokasi: 'Jalan Imam Bonjol No.125, Semarang, Jawa Tengah 50139' },
            { id: 55, kota: 'Yogyakarta', namakantor: 'Komnas HAM Yogyakarta', lokasi: 'Jalan Sultan Agung No.30, Yogyakarta 55232' },
            { id: 56, kota: 'Denpasar', namakantor: 'Komnas HAM Bali', lokasi: 'Jalan Gatot Subroto Barat No.77, Denpasar, Bali 80117' },
            { id: 57, kota: 'Medan', namakantor: 'Komnas HAM Medan', lokasi: 'Jalan Sei Putih Baru No.13, Medan, Sumatera Utara 20154' },
            { id: 58, kota: 'Makassar', namakantor: 'Komnas HAM Makassar', lokasi: 'Jalan Sultan Alauddin No.110, Makassar, Sulawesi Selatan 90221' },
            { id: 59, kota: 'Palembang', namakantor: 'Komnas HAM Palembang', lokasi: 'Jalan Merdeka No.32, Palembang, Sumatera Selatan 30135' },
            { id: 60, kota: 'Pontianak', namakantor: 'Komnas HAM Pontianak', lokasi: 'Jalan Ahmad Yani No.45, Pontianak, Kalimantan Barat 78121' },
            { id: 61, kota: 'Banjarmasin', namakantor: 'Komnas HAM Banjarmasin', lokasi: 'Jalan Pangeran Antasari No.9, Banjarmasin, Kalimantan Selatan 70118' },
            { id: 62, kota: 'Manado', namakantor: 'Komnas HAM Manado', lokasi: 'Jalan Sam Ratulangi No.9, Manado, Sulawesi Utara 95123' },
            { id: 63, kota: 'Jayapura', namakantor: 'Komnas HAM Jayapura', lokasi: 'Jalan Percetakan Negara No.23, Jayapura, Papua 99111' },
            { id: 64, kota: 'Kupang', namakantor: 'Komnas HAM Kupang', lokasi: 'Jalan El Tari No.25, Kupang, Nusa Tenggara Timur 85228' },
            { id: 65, kota: 'Ambon', namakantor: 'Komnas HAM Ambon', lokasi: 'Jalan AY Patty No.17, Sirimau, Ambon 97123' },
            { id: 66, kota: 'Balikpapan', namakantor: 'Komnas HAM Balikpapan', lokasi: 'Jalan MT Haryono No.39, Balikpapan, Kalimantan Timur 76114' },
            { id: 67, kota: 'Palu', namakantor: 'Komnas HAM Palu', lokasi: 'Jalan Sultan Hasanuddin No.28, Palu, Sulawesi Tengah 94111' },
            { id: 68, kota: 'Mataram', namakantor: 'Komnas HAM Mataram', lokasi: 'Jalan Pejanggik No.20, Mataram, Nusa Tenggara Barat 83127' },
            { id: 69, kota: 'Ternate', namakantor: 'Komnas HAM Ternate', lokasi: 'Jalan Sultan Khairun No.9, Ternate, Maluku Utara 97711' },
            { id: 70, kota: 'Batam', namakantor: 'Komnas HAM Batam', lokasi: 'Jalan Engku Putri No.99, Batam, Kepulauan Riau 29444' }
        ];

        const filteredResults = data.filter(item =>
            item.kota.toLowerCase().includes(lokasi.toLowerCase()) ||
            item.lokasi.toLowerCase().includes(lokasi.toLowerCase())
        );

        setFilteredData(filteredResults);
    };

    return (
        <div className="content-home wrapper-mobile" style={{ height: '100%' }}>
            <div className="row justify-content-center align-items-center">
                <div className="featured-image">
                    <img src={logo} className="img-fluid" alt="Logo" />
                </div>
                <h2>Halo user, Cobalah mencari bantuan terdekat terlebih dahulu</h2>
                <div className="lokasi-container">
                    <button onClick={handleBack} className="back-button">Back</button>
                    <form onSubmit={handleSubmit} className="lokasi-form">
                        <input
                            type="text"
                            value={lokasi}
                            onChange={handleChange}
                            placeholder="Masukkan kota atau alamat kantor"
                            className="lokasi-input"
                        />
                        <button type="submit" className="submit-button">Cari</button>
                    </form>

                    <div className="result-wrapper">
                        {filteredData.length > 0 ? (
                            filteredData.map(item => (
                                <div key={item.id} className="result-item">
                                    <h3>{item.namakantor}</h3>
                                    <p>{item.lokasi}</p>
                                    <p><strong>Kota: {item.kota}</strong></p>
                                </div>
                            ))
                        ) : (
                            <p className="no-result">Tidak ada hasil yang sesuai</p>
                        )}
                    </div>
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

export default Lokasi;