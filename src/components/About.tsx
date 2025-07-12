import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';
import ImageSlider from './ImageSlider';
import './About.css';

const About: React.FC = () => {
  const sliderImages = [
    {
      image: "/495177214_1241509317979575_6219899708439107088_n.jpg",
      title: "Notre Équipe Experte",
      description: "Plus de 20 mécaniciens qualifiés à votre service",
      alt: "Équipe de mécaniciens experts d'Exact Automobile à Yaoundé"
    },
    {
      image: "/IMG-20250625-WA0009.jpg",
      title: "Atelier Moderne",
      description: "Installations équipées des dernières technologies",
      alt: "Atelier moderne d'Exact Automobile avec véhicules en réparation"
    },
    {
      image: "/IMG-20250625-WA0015.jpg",
      title: "Service de Qualité",
      description: "Diagnostic et réparation professionnels",
      alt: "Service de réparation automobile professionnel chez Exact Automobile"
    },
    {
      image: "/IMG-20250627-WA0040.jpg",
      title: "Espace de Travail",
      description: "Environnement organisé pour un service optimal",
      alt: "Espace de travail organisé dans l'atelier Exact Automobile"
    },
    {
      image: "/IMG-20250627-WA0044.jpg",
      title: "Expertise Technique",
      description: "Mécaniciens spécialisés en action",
      alt: "Mécaniciens d'Exact Automobile travaillant sur un moteur"
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
            <ImageSlider slides={sliderImages} autoPlay={true} autoPlayInterval={5000} />
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