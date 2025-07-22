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
                <p><strong>Boîte postale :</strong> 11341 Yaoundé</p>
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
                <a href="tel:+237680075429">+237 6 80 07 54 29</a>
              </div>
              <div className="contact-details">
                <h3>Téléphone 2</h3>
                <a href="tel:+237675381722">+237 6 75 38 17 22</a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <Mail />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:exactautomobile@yahoo.com">exactautomobile@yahoo.com</a>
                
              </div>
            </div>
          </div>
          
          <div className="contact-map slide-in-right">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7318806731214!2d11.545623073469251!3d3.8675897483194905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc5d3f613b165%3A0x54fce929dc276982!2sEXACT%20AUTOMOBILE!5e0!3m2!1sfr!2scm!4v1753183193950!5m2!1sfr!2scm"
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