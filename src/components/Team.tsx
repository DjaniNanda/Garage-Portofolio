import React from 'react';
import { Users, Award, Clock, Shield, Wrench, Heart, Star } from 'lucide-react';
import './Team.css';

const Team: React.FC = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        {/* Background decorative elements */}
        <div className="team-bg-decoration">
          <div className="team-decoration-circle team-decoration-circle-1"></div>
          <div className="team-decoration-circle team-decoration-circle-2"></div>
        </div>

        {/* Header */}
        <div className="team-header">
          <div className="team-badge">
            <Users className="team-badge-icon" />
            <span>Notre Équipe</span>
          </div>
          
          <h2 className="team-title">
            Une équipe passionnée à votre service
          </h2>
          
          <p className="team-subtitle">
            Découvrez l'équipe d'experts qui prend soin de votre véhicule avec 
            professionnalisme et dévouement chez Exact Automobile.
          </p>
        </div>

        {/* Team Content */}
        <div className="team-content">
          {/* Team Image */}
          <div className="team-image-container">
            <div className="team-image-wrapper">
              <img 
                src="/2.jpg" 
                alt="Équipe Exact Automobile - Mécaniciens professionnels à Yaoundé"
                className="team-image"
              />
            </div>
          </div>

          {/* Team Info */}
          <div className="team-info">
            {/* Stats */}
            <div className="team-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Mécaniciens</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Clients satisfaits</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Engagement qualité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;