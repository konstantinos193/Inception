import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProjectCarousel({ projects, onProjectClick }) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="project-carousel">
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div key={index} className="carousel-card" onClick={() => onProjectClick(project)}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>Supply: {project.supply}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ProjectCarousel;