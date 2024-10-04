import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lg_ss.png';
import '../styles/Home.css';


const Home = () => {
    const [emergencyContacts, setEmergencyContacts] = useState([]);

    const fetchEmergencyContacts = async () => {
        try {
            const response = await fetch('https://6700185b4da5bd2375532bb3.mockapi.io/api/shesafe/emergency');
            const data = await response.json();
            setEmergencyContacts(data);
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat mengambil data dari MockAPI.');
        }
    };

    const handleWhatsAppMessage = (contact) => {
        const { phoneNumber, emergencyMessage } = contact;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(emergencyMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    useEffect(() => {
        fetchEmergencyContacts();
    }, []);

    return (
        <div className="content-home wrapper-mobile" style={{ height: '100%' }}>
            <div>
                <h2>Menu Utama</h2>
                {emergencyContacts.length > 0 ? (
                    <ul>
                        {emergencyContacts.map((contact) => (
                            <li key={contact.id}>
                                {contact.fullName} - {contact.phoneNumber} - {contact.location}
                                <button onClick={() => handleWhatsAppMessage(contact)}>Kirim Pesan Darurat</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Tidak ada kontak darurat yang ditemukan.</p>
                )}
            </div>
        </div>
    );
}

export default EmergencyForum;