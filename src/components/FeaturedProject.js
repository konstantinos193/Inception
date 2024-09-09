import React from 'react';

function FeaturedProject({ project }) {
  return (
    <section className="featured-project">
      <div className="project-frame">
        <img src={project.image} alt={project.title} className="featured-image" />
      </div>
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>Supply: {project.supply} | Mint Price: {project.mintPrice} BTC</p>
        <p>{project.minted}/{project.supply} minted</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(project.minted / project.supply) * 100}%` }}></div>
        </div>
        <button className="cta-button">Mint Now</button>
      </div>
    </section>
  );
}

export default FeaturedProject;