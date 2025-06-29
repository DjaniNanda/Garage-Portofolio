import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Mail } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+237680075429"; 
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const openGoogleMaps = () => {
    const address = "Terminus Mimboman, Yaoundé, Cameroun";
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header fade-in-up">
          <h2>Contactez Exact Automobile</h2>
          <p>Nous sommes là pour répondre à toutes vos questions</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <div className="contact-card">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div className="contact-details">
                <h3>Notre Adresse</h3>
                <p>Terminus Mimboman<br />Yaoundé, Cameroun</p>
                <button onClick={openGoogleMaps} className="contact-link">
                  Voir sur Google Maps
                </button>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <Clock />
              </div>
              <div className="contact-details">
                <h3>Horaires d'ouverture</h3>
                <div className="hours">
                  <div className="hour-row">
                    <span>Lundi - Vendredi</span>
                    <span>8h00 - 17h30</span>
                  </div>
                  <div className="hour-row">
                    <span>Samedi</span>
                    <span>8h00 - 14h00</span>
                  </div>
                  <div className="hour-row closed">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-card">
              <center>
              <div className="contact-icon">
                <Phone />
              </div>
              </center>
              <div className="contact-details">
                <h3>Téléphone 1</h3>
                <p>+237 6 80 07 54 29</p>
                <a href="tel:+237680075429" className="contact-link">
                  Appeler maintenant
                </a>
              </div>
              <div className="contact-details">
                <h3>Téléphone 2</h3>
                <p>+237 6 75 38 17 22</p>
                <a href="tel:+237675381722" className="contact-link">
                  Appeler maintenant
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <Mail />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>contact@exactautomobile.cm</p>
                <a href="mailto:contact@exactautomobile.cm" className="contact-link">
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-map slide-in-right">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0!2d11.5!3d3.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf1a1a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1635959851123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Exact Automobile Yaoundé"
              ></iframe>
            </div>
            
            <div className="whatsapp-cta">
              <h3>Réservation rapide</h3>
              <p>Prenez rendez-vous directement via WhatsApp</p>
              <button onClick={openWhatsApp} className="btn btn-whatsapp">
                <MessageCircle />
                Contacter via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;