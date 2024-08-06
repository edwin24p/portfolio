import React, { useEffect, useState } from "react";
import client from "../sanityClient";
import Project from "./Project";

interface ProjectData {
  _id: string;
  title: string;
  screenshot: any;
  githubRepoLink: string;
  liveSiteLink?: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  useEffect(() => {
    const fetchProjects = async () => {
      const query =
        '*[_type == "projects"] { _id, title, screenshot{asset->{_id, url}}, githubRepoLink, liveSiteLink }';
      const data = await client.fetch(query);
      setProjects(data);
    };

    fetchProjects();
  }, []);
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - itemsPerPage : 0
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < projects.length
        ? prevIndex + itemsPerPage
        : prevIndex
    );
  };

  const isMobile = window.innerWidth < 768;

  // Show all projects if on mobile, otherwise paginate
  const visibleProjects = isMobile
    ? projects
    : projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="bg-[#0F0F0F] text-white" id="projects">
      <h2 className="text-3xl text-center p-6">My Projects</h2>
      <div className="flex flex-wrap justify-center pb-12 relative p-6 md:px-0">
        <button
          className={`hidden md:block absolute left-0 w-10 bg-gray-800 p-2 rounded-full top-1/2 ml-8 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        {visibleProjects.map((project) => (
          <div key={project._id} className="p-4">
            <Project
              img={project.screenshot.asset.url}
              title={project.title}
              githubLink={project.githubRepoLink}
              liveSiteLink={project.liveSiteLink}
            />
          </div>
        ))}
        <button
          className={`hidden md:block absolute right-0  bg-gray-800 p-2 w-10 rounded-full top-1/2 mr-8 ${
            currentIndex + itemsPerPage >= projects.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNextClick}
          disabled={currentIndex + itemsPerPage >= projects.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Projects;
