import React from 'react';

function FeaturedProjects() {
  const placeholderProjects = [
    {
      image: "https://via.placeholder.com/300",
      title: "Project One",
      description: "This is a short description of Project One.",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Project Two",
      description: "This is a short description of Project Two.",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Project Three",
      description: "This is a short description of Project Three.",
    },
  ];

  return (
    <section className="featured-projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="project-grid">
        {placeholderProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="view-more">Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;