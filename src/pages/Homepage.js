import React, { useEffect } from 'react';
import FeaturedProjects from '../components/FeaturedProjects';
import ProjectSlider from '../components/ProjectSlider';

function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          card.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="homepage">
      <FeaturedProjects />
      <ProjectSlider />
    </div>
  );
}

export default HomePage;