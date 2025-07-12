import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';
import StylishSlider from './StylishSlider';
import './About.css';

const About: React.FC = () => {
  const sliderImages = [
    {
      image: "/team-photo.jpg",
      title: "Notre Équipe Professionnelle",
      description: "Plus de 20 mécaniciens experts formés aux dernières technologies automobiles",
      alt: "Photo d'équipe des mécaniciens d'Exact Automobile en uniforme professionnel"
    },
    {
      image: "/garage-exterior.jpg",
      title: "Garage Moderne à Yaoundé",
      description: "Installations spacieuses et bien équipées à Terminus Mimboman",
      alt: "Vue extérieure du garage Exact Automobile avec véhicules de luxe"
    },
    {
      image: "/service-area.jpg",
      title: "Zone de Service Premium",
      description: "Espace dédié à l'accueil et au service clientèle de qualité",
      alt: "Zone de service avec véhicules haut de gamme en cours de réparation"
    },
    {
      image: "/workshop-interior.jpg",
      title: "Atelier Technique Avancé",
      description: "Équipements de pointe pour tous types de réparations automobiles",
      alt: "Intérieur de l'atelier avec équipements techniques modernes"
    },
    {
      image: "/mechanics-working.jpg",
      title: "Expertise en Action",
      description: "Nos mécaniciens qualifiés travaillent avec précision et professionnalisme",
      alt: "Mécaniciens d'Exact Automobile en pleine réparation moteur"
    }
  ];

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
              de votre mobilité depuis plusieurs années.
            </p>
            
            <div className="about-story">
              <h3>Notre Expertise</h3>
              <p>
                Chez Exact Automobile, nous combinons savoir-faire traditionnel et 
                technologies modernes pour offrir des services de qualité supérieure. 
                Notre atelier est équipé des derniers outils de diagnostic et notre 
                équipe est formée aux techniques les plus récentes de la mécanique automobile.
              </p>
            </div>

            <div className="about-expertise">
              <h3>Nos Spécialités</h3>
              <ul>
                <li>Diagnostic électronique</li>
                <li>Réparation moteur essence et diesel</li>
                <li>Entretien préventif et curatif</li>
                <li>Système de freinage et suspension</li>
                <li>Climatisation automobile</li>
                <li>Électricité et électronique automobile</li>
                <li>Tolerie et painture</li>
              </ul>
            </div>
          </div>
          
          <div className="slide-in-right">
            <StylishSlider slides={sliderImages} autoPlay={true} autoPlayInterval={6000} />
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
                <div className="value-icon" aria-hidden="true">
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