import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Exact Automobile - Garage Automobile Yaoundé | Réparation & Entretien Auto Terminus Mimboman",
  description = "Exact Automobile, votre garage de confiance à Terminus Mimboman, Yaoundé. Réparation moteur, entretien auto, diagnostic électronique. Plus de 20 mécaniciens experts.",
  keywords = "garage automobile yaoundé, réparation auto Terminus mimboman, entretien voiture cameroun, diagnostic auto yaoundé, mécanicien yaoundé, exact automobile",
  image = "/IMG-20250625-WA0010.jpg",
  url = "https://exactautomobile.cm/"
}) => {
  React.useEffect(() => {
    // Mise à jour du titre
    document.title = title;
    
    // Mise à jour des meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Meta tags standards
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    
    // Twitter
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;