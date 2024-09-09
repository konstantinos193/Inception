import React, { useState } from "react";
import FeaturedProject from '../components/FeaturedProject';
import ProjectCarousel from '../components/ProjectCarousel';
import FeaturedProjects from '../components/FeaturedProjects';

function HomePage() {
  // Initial placeholder data for projects
  const projects = [
    {
      image: "https://via.placeholder.com/800x400",
      title: "Placeholder Title 1",
      supply: 0,
      minted: 0,
      mintPrice: 0.0,
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "Placeholder Title 2",
      supply: 0,
      minted: 0,
      mintPrice: 0.0,
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "Placeholder Title 3",
      supply: 0,
      minted: 0,
      mintPrice: 0.0,
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "Placeholder Title 4",
      supply: 0,
      minted: 0,
      mintPrice: 0.0,
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "Placeholder Title 5",
      supply: 0,
      minted: 0,
      mintPrice: 0.0,
    },
  ];

  // State to store the featured project
  const [featuredProject, setFeaturedProject] = useState(projects[0]);

  // Function to update featured project when clicked in the carousel
  const handleProjectClick = (project) => {
    setFeaturedProject(project);
  };

  return (
    <div className="homepage">
      <FeaturedProject project={featuredProject} />
      <ProjectCarousel projects={projects} onProjectClick={handleProjectClick} />
      <FeaturedProjects />
    </div>
  );
}

export default HomePage;