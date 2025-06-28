import React from 'react';

const SEO = ({
  title = "Exact Automobile - Garage Automobile Yaoundé | Réparation & Entretien Auto Terminus Mimboman",
  description = "Exact Automobile, votre garage de confiance à Terminus Mimboman, Yaoundé. Réparation moteur, entretien auto, diagnostic électronique. Plus de 20 mécaniciens experts.",
  keywords = "garage automobile yaoundé, réparation auto Terminus mimboman, entretien voiture cameroun, diagnostic auto yaoundé, mécanicien yaoundé, exact automobile",
  image = "/IMG-20250625-WA0010.jpg",
  url = "https://exactautomobile.cm/"
} = {}) => {
  React.useEffect(() => {
    document.title = title;
    
    const updateMeta = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(property ? 'property' : 'name', name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', url, true);
    updateMeta('twitter:title', title, true);
    updateMeta('twitter:description', description, true);
    updateMeta('twitter:image', image, true);
    
    let canonical = document.querySelector('link[rel="canonical"]');
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