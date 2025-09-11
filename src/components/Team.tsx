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
                src="/2 copy.jpg" 
                alt="Équipe Exact Automobile - Mécaniciens professionnels à Yaoundé"
                className="team-image"
              />
              <div className="team-image-overlay">
                <h3 className="overlay-title">Exact Automobile</h3>
                <p className="overlay-subtitle">Plus de 20 professionnels dévoués</p>
              </div>
            </div>
          </div>

          {/* Team Info */}
          <div className="team-info">
            {/* Stats */}
            <div className="team-stats">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Mécaniciens</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
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

            {/* Description */}
            <div className="team-description">
              <h3>
                <div className="team-description-icon">
                  <Wrench />
                </div>
                Notre Expertise
              </h3>
              <p>
                Notre équipe est composée de mécaniciens qualifiés et expérimentés, 
                formés aux dernières technologies automobiles. Chaque membre de notre 
                équipe partage la même passion pour l'excellence et le service client.
              </p>
              <p>
                Nous combinons savoir-faire traditionnel et innovations modernes pour 
                offrir des services de réparation et d'entretien de la plus haute qualité 
                à Terminus Mimboman, Yaoundé.
              </p>
            </div>

            {/* Values */}
            <div className="team-values">
              <div className="value-item">
                <div className="value-icon">
                  <Award />
                </div>
                <div className="value-content">
                  <h4>Professionnalisme</h4>
                  <p>Formation continue et certification de nos mécaniciens</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <Heart />
                </div>
                <div className="value-content">
                  <h4>Passion</h4>
                  <p>Amour du métier et dévouement pour chaque véhicule</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <Shield />
                </div>
                <div className="value-content">
                  <h4>Fiabilité</h4>
                  <p>Travail soigné et respect des délais convenus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;