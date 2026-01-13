import { useEffect } from 'react';
import { useLocation } from 'wouter';

export const useCanonicalUrl = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Remove existing canonical tag
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create new canonical tag
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `https://globalwomenrising.org${location}`;
    
    // Handle root path
    if (location === '/') {
      canonical.href = 'https://globalwomenrising.org/';
    }
    
    document.head.appendChild(canonical);

    return () => {
      const canonicalToRemove = document.querySelector('link[rel="canonical"]');
      if (canonicalToRemove) {
        canonicalToRemove.remove();
      }
    };
  }, [location]);
};