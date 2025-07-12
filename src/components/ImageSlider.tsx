import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageSlider.css';

interface SlideData {
  image: string;
  title: string;
  description: string;
  alt: string;
}

interface ImageSliderProps {
  slides: SlideData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  slides, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(autoPlay);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <div 
      className="image-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Galerie d'images Exact Automobile"
    >
      <div className="slider-container">
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentSlide * 20}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slider-slide">
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                width="600"
                height="400"
              />
              <div className="slide-overlay">
                <div className="overlay-content">
                  <h4>{slide.title}</h4>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-controls prev">
          <button
            className="slider-btn"
            onClick={prevSlide}
            aria-label="Image précédente"
            type="button"
          >
            <ChevronLeft />
          </button>
        </div>

        <div className="slider-controls next">
          <button
            className="slider-btn"
            onClick={nextSlide}
            aria-label="Image suivante"
            type="button"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Aller à l'image ${index + 1}`}
              type="button"
            />
          ))}
        </div>

        <div 
          className={`slider-progress ${isAutoPlaying ? 'auto-play' : ''}`}
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;