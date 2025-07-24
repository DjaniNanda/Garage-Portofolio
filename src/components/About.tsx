import React from 'react';
import ImageSlider from './ImageSlider';
import './About.css';

const About: React.FC = () => {

  const openWhatsApp = () => {
    const phoneNumber = "+237680075429"; 
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Background decorative elements */}
        <div className="bg-decoration">
          <div className="decoration-circle decoration-circle-1"></div>
          <div className="decoration-circle decoration-circle-2"></div>
          <div className="decoration-lines"></div>
        </div>

        <div className="about-content">
          <div className="about-text fade-in-up">
            <div className="section-badge">
              <span>À Propos</span>
            </div>
            
            <h2 className="main-title">
              <span className="title-highlight">Votre Expert Auto</span>
            </h2>
            
            <p className="about-intro">
              Situé au cœur de <strong>Terminus Mimboman à Yaoundé</strong>, Exact Automobile est 
              votre garage de référence pour tous vos besoins en mécanique automobile. 
              Notre équipe de mécaniciens qualifiés met son expertise au service 
              de votre mobilité depuis plusieurs années.
            </p>

            <div className="about-story">
              <div className="story-header">
                <div className="story-icon">🔧</div>
                <h3>Notre Expertise</h3>
              </div>
              <p>
                Chez Exact Automobile, nous combinons savoir-faire traditionnel et 
                technologies modernes pour offrir des services de qualité supérieure. 
                Notre atelier est équipé des derniers outils de diagnostic et notre 
                équipe est formée aux techniques les plus récentes de la mécanique automobile.
              </p>
            </div>

            <div className="about-expertise">
              <div className="expertise-header">
                <div className="expertise-icon">⚙️</div>
                <h3>Nos Spécialités</h3>
              </div>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-item-icon">🔍</div>
                  <span>Diagnostic électronique</span>
                </div>
                <div className="expertise-item">
                  <div className="expertise-item-icon">🛠️</div>
                  <span>Réparation moteur essence et diesel</span>
                </div>
                <div className="expertise-item">
                  <div className="expertise-item-icon">🔧</div>
                  <span>Entretien préventif et curatif</span>
                </div>
                <div className="expertise-item">
                  <div className="expertise-item-icon">🛞</div>
                  <span>Système de freinage et suspension</span>
                </div>
                <div className="expertise-item">
                  <div className="expertise-item-icon">❄️</div>
                  <span>Climatisation automobile</span>
                </div>
                <div className="expertise-item">
                  <div className="expertise-item-icon">⚡</div>
                  <span>Électricité et électronique automobile</span>
                </div>
                <div className="expertise-item">
                  <div className="expertise-item-icon">🎨</div>
                  <span>Tôlerie et peinture</span>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <button onClick={openWhatsApp} className="cta-button">
                <span>Prendre Rendez-vous</span>
                <div className="button-arrow">→</div>
              </button>
            </div>
          </div>

          <div className="about-visual slide-in-right">
            <div className="image-container">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;