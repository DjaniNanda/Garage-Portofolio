import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Jean-Claude Mbarga",
      vehicle: "Toyota Camry",
      rating: 5,
      text: "Excellent service chez Exact Automobile ! Mon véhicule a été réparé rapidement et le prix était très raisonnable. Je recommande vivement ce garage à Yaoundé.",
      date: "Il y a 2 semaines",
      avatar: "JM"
    },
    {
      name: "Marie Fotso",
      vehicle: "Honda CR-V",
      rating: 5,
      text: "Professionnalisme exemplaire ! L'équipe d'Exact Automobile connaît vraiment son métier. Diagnostic précis et réparation efficace.",
      date: "Il y a 1 mois",
      avatar: "MF"
    },
    {
      name: "Paul Nkomo",
      vehicle: "Nissan Pathfinder",
      rating: 5,
      text: "Très satisfait de ma révision chez Exact Automobile. Personnel accueillant, travail soigné et respect des délais. Le meilleur garage de Mimboman !",
      date: "Il y a 3 semaines",
      avatar: "PN"
    },
    {
      name: "Sophie Mendomo",
      vehicle: "Peugeot 308",
      rating: 5,
      text: "Service client exceptionnel ! Ils ont pris le temps de m'expliquer chaque réparation. Transparence totale sur les prix.",
      date: "Il y a 1 semaine",
      avatar: "SM"
    }
  ];

  const openWhatsApp = () => {
    const phoneNumber = "+237680075429";
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="testimonials-section">
      {/* Animated Background */}
      <div className="testimonials-bg">
        <div className="bg-overlay">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
        </div>
        
        {/* Floating particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="header-badge">
            <MessageCircle className="badge-icon" />
            <span className="badge-text">Témoignages clients</span>
          </div>
          
          <h2 className="main-title">
            Ce que disent nos clients
          </h2>
        </div>

        {/* Desktop Grid View */}
        <div className="desktop-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {/* Quote Icon */}
              <div className="quote-icon">
                <Quote className="quote-svg" />
              </div>

              {/* Rating */}
              <div className="rating-container">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="author-info">
                <div className="author-details">
                  <div className="avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="author-text">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-vehicle">{testimonial.vehicle}</p>
                  </div>
                </div>
                <span className="testimonial-date">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="mobile-carousel">
          <div className="carousel-wrapper">
            {/* Carousel Container */}
            <div className="carousel-container">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="mobile-card">
                      {/* Quote Icon */}
                      <div className="mobile-quote-container">
                        <div className="mobile-quote-icon">
                          <Quote className="quote-svg" />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="mobile-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="star-icon" />
                        ))}
                      </div>

                      {/* Text */}
                      <blockquote className="mobile-text">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Author */}
                      <div className="mobile-author">
                        <div className="mobile-avatar">
                          {testimonial.avatar}
                        </div>
                        <h4 className="mobile-author-name">{testimonial.name}</h4>
                        <p className="mobile-author-vehicle">{testimonial.vehicle}</p>
                        <span className="mobile-author-date">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="nav-arrow nav-prev">
              <ChevronLeft className="nav-icon" />
            </button>
            <button onClick={nextSlide} className="nav-arrow nav-next">
              <ChevronRight className="nav-icon" />
            </button>

            {/* Dots Indicator */}
            <div className="dots-container">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`dot ${index === currentSlide ? 'dot-active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-container">
            <h3 className="cta-title">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="cta-description">
              Faites confiance à notre expertise pour l'entretien de votre véhicule. 
              Une équipe professionnelle à votre service.
            </p>
            
            <button onClick={openWhatsApp} className="cta-button">
              <MessageCircle className="cta-icon" />
              Prendre rendez-vous
              <div className="button-overlay"></div>
            </button>
            
            <p className="cta-note">
              Réponse rapide garantie sur WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;