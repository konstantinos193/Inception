import React from 'react';

function StandardProjects() {
  const projects = [
    {
      image: "https://via.placeholder.com/300",
      title: "Ordinals Legacy - Endless Supply",
      status: "Open Edition",
      mints: "500 mints left",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "PizzaRhinos PASS",
      status: "3,543 mints left",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Fractal 8",
      status: "8,026 mints left",
    },
  ];

  return (
    <section className="standard-projects">
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.status}</p>
            <p>{project.mints}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StandardProjects;