import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+237680075429";
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 40; 
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/images.jfif" 
                alt="Exact Automobile Logo" 
                className="footer-logo-image"
              />
              <span>Exact Automobile</span>
            </div>
            <p className="footer-description">
              Votre garage de confiance à Terminus Mimboman, Yaoundé. 
              Expertise, qualité et service client au cœur de nos priorités.
            </p>
            <button onClick={openWhatsApp} className="footer-whatsapp">
              <MessageCircle />
              <span>WhatsApp</span>
            </button>
          </div>
          
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('accueil')}>
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')}>
                  À propos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Nos Services</h3>
            <ul className="footer-links">
              <li>Réparation moteur</li>
              <li>Entretien automobile</li>
              <li>Diagnostic électronique</li>
              <li>Système de freinage</li>
              <li>Pneumatiques</li>
              <li>Climatisation</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin />
                <span>Terminus Mimboman<br />Yaoundé, Cameroun</span><br></br>
                <span><strong>Boîte postale :</strong> 11341 Yaoundé</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>+237 6 80 07 54 29</span>
              </div>
              <div className="contact-item">
                <Mail />
                <span>contact@exactautomobile.cm</span>
              </div>
              <div className="contact-item">
                <Clock />
                <span>Lun-Ven: 8h00-17h30<br />Sam: 8h00h-14h00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 Exact Automobile. Tous droits réservés.</p>
            <div className="footer-legal">
              <span>Mentions légales</span>
              <span>•</span>
              <span>Politique de confidentialité</span>
              <span>•</span>
              <span>CGV</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;