import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animateElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};