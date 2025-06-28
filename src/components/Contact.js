import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+237680075429";
    const message = "Bonjour, je souhaiterais prendre rendez-vous pour mon véhicule chez Exact Automobile.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const openGoogleMaps = () => {
    const address = "Terminus Mimboman, Yaoundé, Cameroun";
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(url, '_blank');
  };

  return React.createElement('section', { id: 'contact', className: 'contact' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'contact-header fade-in-up' },
        React.createElement('h2', null, 'Contactez Exact Automobile'),
        React.createElement('p', null, 'Nous sommes là pour répondre à toutes vos questions')
      ),
      React.createElement('div', { className: 'contact-content' },
        React.createElement('div', { className: 'contact-info fade-in-up' },
          React.createElement('div', { className: 'contact-card' },
            React.createElement('div', { className: 'contact-icon' },
              React.createElement(MapPin)
            ),
            React.createElement('div', { className: 'contact-details' },
              React.createElement('h3', null, 'Notre Adresse'),
              React.createElement('p', null, 'Terminus Mimboman', React.createElement('br'), 'Yaoundé, Cameroun'),
              React.createElement('button', { onClick: openGoogleMaps, className: 'contact-link' },
                'Voir sur Google Maps'
              )
            )
          ),
          React.createElement('div', { className: 'contact-card' },
            React.createElement('div', { className: 'contact-icon' },
              React.createElement(Clock)
            ),
            React.createElement('div', { className: 'contact-details' },
              React.createElement('h3', null, 'Horaires d\'ouverture'),
              React.createElement('div', { className: 'hours' },
                React.createElement('div', { className: 'hour-row' },
                  React.createElement('span', null, 'Lundi - Vendredi'),
                  React.createElement('span', null, '8h00 - 17h30')
                ),
                React.createElement('div', { className: 'hour-row' },
                  React.createElement('span', null, 'Samedi'),
                  React.createElement('span', null, '8h00 - 14h00')
                ),
                React.createElement('div', { className: 'hour-row closed' },
                  React.createElement('span', null, 'Dimanche'),
                  React.createElement('span', null, 'Fermé')
                )
              )
            )
          ),
          React.createElement('div', { className: 'contact-card' },
            React.createElement('div', { className: 'contact-icon' },
              React.createElement(Phone)
            ),
            React.createElement('div', { className: 'contact-details' },
              React.createElement('h3', null, 'Téléphone'),
              React.createElement('p', null, '+237 6 80 07 54 29'),
              React.createElement('a', { href: 'tel:+237680075429', className: 'contact-link' },
                'Appeler maintenant'
              )
            )
          ),
          React.createElement('div', { className: 'contact-card' },
            React.createElement('div', { className: 'contact-icon' },
              React.createElement(Mail)
            ),
            React.createElement('div', { className: 'contact-details' },
              React.createElement('h3', null, 'Email'),
              React.createElement('p', null, 'contact@exactautomobile.cm'),
              React.createElement('a', { href: 'mailto:contact@exactautomobile.cm', className: 'contact-link' },
                'Envoyer un email'
              )
            )
          )
        ),
        React.createElement('div', { className: 'contact-map slide-in-right' },
          React.createElement('div', { className: 'map-container' },
            React.createElement('iframe', {
              src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0!2d11.5!3d3.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf1a1a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1635959851123!5m2!1sen!2sus',
              width: '100%',
              height: '400',
              style: { border: 0, borderRadius: '16px' },
              allowFullScreen: true,
              loading: 'lazy',
              referrerPolicy: 'no-referrer-when-downgrade',
              title: 'Localisation Exact Automobile Yaoundé'
            })
          ),
          React.createElement('div', { className: 'whatsapp-cta' },
            React.createElement('h3', null, 'Réservation rapide'),
            React.createElement('p', null, 'Prenez rendez-vous directement via WhatsApp'),
            React.createElement('button', { onClick: openWhatsApp, className: 'btn btn-whatsapp' },
              React.createElement(MessageCircle),
              'Contacter via WhatsApp'
            )
          )
        )
      )
    )
  );
};

export default Contact;