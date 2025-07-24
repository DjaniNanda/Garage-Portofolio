import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Mail, Navigation } from 'lucide-react';
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
    <section id="contact" className="exact-contact">
      <div className="exact-contact-bg-pattern"></div>
      <div className="exact-container">
        <div className="exact-contact-header exact-fade-in-up">
          <div className="exact-header-badge">
            <MessageCircle className="exact-badge-icon" />
            <span>Contact</span>
          </div>
          <h2>Contactez Exact Automobile</h2>
          <p>Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos besoins automobiles</p>
        </div>
        
        <div className="exact-contact-content">
          <div className="exact-contact-info exact-fade-in-up">
            <div className="exact-contact-card exact-location-card">
              <div className="exact-card-glow"></div>
              <div className="exact-contact-icon">
                <MapPin />
              </div>
              <div className="exact-contact-details">
                <h3>Notre Adresse</h3>
                <p>Terminus Mimboman<br />Yaoundé, Cameroun</p>
                <p className="exact-postal-info"><strong>Boîte postale :</strong> 11341 Yaoundé</p>
                <button onClick={openGoogleMaps} className="exact-contact-link">
                  <Navigation className="exact-link-icon" />
                  Voir sur Google Maps
                </button>
              </div>
            </div>
            
            <div className="exact-contact-card exact-hours-card">
              <div className="exact-card-glow"></div>
              <div className="exact-contact-icon">
                <Clock />
              </div>
              <div className="exact-contact-details">
                <h3>Horaires d'ouverture</h3>
                <div className="exact-hours">
                  <div className="exact-hour-row">
                    <span className="exact-day">Lundi - Vendredi</span>
                    <span className="exact-time">8h00 - 17h30</span>
                  </div>
                  <div className="exact-hour-row">
                    <span className="exact-day">Samedi</span>
                    <span className="exact-time">8h00 - 14h00</span>
                  </div>
                  <div className="exact-hour-row exact-closed">
                    <span className="exact-day">Dimanche</span>
                    <span className="exact-time">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="exact-contact-card exact-phone-card">
              <div className="exact-card-glow"></div>
              <div className="exact-contact-icon">
                <Phone />
              </div>
              <div className="exact-contact-details">
                <h3>Nos Téléphones</h3>
                <div className="exact-phone-numbers">
                  <a href="tel:+237680075429" className="exact-phone-link exact-primary">
                    <Phone className="exact-phone-icon" />
                    +237 6 80 07 54 29
                  </a>
                  <a href="tel:+237675381722" className="exact-phone-link exact-secondary">
                    <Phone className="exact-phone-icon" />
                    +237 6 75 38 17 22
                  </a>
                </div>
              </div>
            </div>
            
            <div className="exact-contact-card exact-email-card">
              <div className="exact-card-glow"></div>
              <div className="exact-contact-icon">
                <Mail />
              </div>
              <div className="exact-contact-details">
                <h3>Email</h3>
                <a href="mailto:exactautomobile@yahoo.com" className="exact-email-link">
                  <Mail className="exact-email-icon" />
                  exactautomobile@yahoo.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="exact-contact-map exact-slide-in-right">
            <div className="exact-map-container">
              <div className="exact-map-header">
                <h3>Notre Localisation</h3>
                <p>Terminus Mimboman, Yaoundé</p>
              </div>
              <div className="exact-map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7318806731214!2d11.545623073469251!3d3.8675897483194905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc5d3f613b165%3A0x54fce929dc276982!2sEXACT%20AUTOMOBILE!5e0!3m2!1sfr!2scm!4v1753183193950!5m2!1sfr!2scm"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Exact Automobile Yaoundé"
                ></iframe>
              </div>
            </div>
            
            <div className="exact-whatsapp-cta">
              <div className="exact-whatsapp-bg-effect"></div>
              <div className="exact-whatsapp-content">
                <div className="exact-whatsapp-icon-large">
                  <MessageCircle />
                </div>
                <h3>Réservation Rapide</h3>
                <p>Prenez rendez-vous directement via WhatsApp pour un service personnalisé</p>
                <button onClick={openWhatsApp} className="exact-btn exact-btn-whatsapp">
                  <MessageCircle className="exact-btn-icon" />
                  <span>Contacter via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;