import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque intervention sur votre véhicule"
    },
    {
      icon: <Heart />,
      title: "Passion",
      description: "Notre passion pour l'automobile guide notre travail quotidien"
    },
    {
      icon: <Users />,
      title: "Équipe",
      description: "Une équipe soudée de plus de 20 mécaniciens expérimentés"
    },
    {
      icon: <Clock />,
      title: "Disponibilité",
      description: "Service rapide et efficace pour minimiser votre temps d'attente"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in-up">
            <h2>À Propos d'Exact Automobile</h2>
            <p className="about-intro">
              Situé au cœur de Terminus Mimboman à Yaoundé, Exact Automobile est 
              votre garage de référence pour tous vos besoins en mécanique automobile. 
              Notre équipe de mécaniciens qualifiés met son expertise au service 
              de votre mobilité.
            </p>
            
            <div className="about-story">
              <h3>Notre Expertise</h3>
              <p>
                Chez Exact Automobile, nous combinons savoir-faire traditionnel et 
                technologies modernes pour offrir des services de qualité supérieure. 
                Notre atelier est équipé des derniers outils de diagnostic et notre 
                équipe est formée aux techniques les plus récentes.
              </p>
            </div>

            <div className="about-expertise">
              <h3>Nos Spécialités</h3>
              <ul>
                <li>Diagnostic électronique avancé</li>
                <li>Réparation moteur toutes marques</li>
                <li>Entretien préventif et curatif</li>
                <li>Système de freinage et suspension</li>
                <li>Climatisation automobile</li>
                <li>Électricité et électronique auto</li>
              </ul>
            </div>
          </div>
          
          <div className="about-image slide-in-right">
            <img 
              src="/495177214_1241509317979575_6219899708439107088_n.jpg" 
              alt="Équipe Exact Automobile Yaoundé" 
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <h4>Notre Équipe</h4>
                <p>Plus de 20 mécaniciens experts à votre service</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-values">
          <h3 className="values-title fade-in-up">Nos Valeurs</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;