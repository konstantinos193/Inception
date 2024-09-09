import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProjectSlider() {
  const placeholderProjects = [
    {
      image: "https://via.placeholder.com/300",
      title: "Project A",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Project B",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Project C",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Project D",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Project E",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="project-slider">
      <h2 className="section-title">More Projects</h2>
      <Slider {...sliderSettings}>
        {placeholderProjects.map((project, index) => (
          <div key={index} className="slider-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ProjectSlider;