import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Jean-Claude Mbarga",
      vehicle: "Toyota Camry",
      rating: 5,
      text: "Excellent service chez Exact Automobile ! Mon véhicule a été réparé rapidement et le prix était très raisonnable. Je recommande vivement ce garage à Yaoundé.",
      date: "Il y a 2 semaines"
    },
    {
      name: "Marie Fotso",
      vehicle: "Honda CR-V",
      rating: 5,
      text: "Professionnalisme exemplaire ! L'équipe d'Exact Automobile connaît vraiment son métier. Diagnostic précis et réparation efficace.",
      date: "Il y a 1 mois"
    },
    {
      name: "Paul Nkomo",
      vehicle: "Nissan Pathfinder",
      rating: 5,
      text: "Très satisfait de ma révision chez Exact Automobile. Personnel accueillant, travail soigné et respect des délais. Le meilleur garage de Mimboman !",
      date: "Il y a 3 semaines"
    }
  ];

  const openWhatsApp = () => {
    const phoneNumber = "+237680075429";
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header fade-in-up">
          <h2>Ce que disent nos clients</h2>
          <p>La satisfaction de nos clients est notre plus belle récompense</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-quote">
                <Quote />
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-filled" />
                ))}
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span className="author-vehicle">{testimonial.vehicle}</span>
                </div>
                <span className="testimonial-date">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-cta fade-in-up">
          <h3>Rejoignez nos clients satisfaits</h3>
          <p>Faites confiance à notre expertise pour l'entretien de votre véhicule</p>
          <button 
            className="btn btn-primary"
            onClick={openWhatsApp}
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;