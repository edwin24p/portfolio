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

  useEffect(() => {
    const fetchProjects = async () => {
      const query =
        '*[_type == "projects"] { _id, title, screenshot{asset->{_id, url}}, githubRepoLink, liveSiteLink }';
      const data = await client.fetch(query);
      setProjects(data);
    };

    fetchProjects();
  }, []);
  return (
    <div className="bg-[#0F0F0F] text-white">
      <h2 className="text-3xl text-center p-6">My Projects</h2>
      <div className="flex flex-wrap justify-center ">
        {projects.map((project) => (
          <div key={project._id} className="p-4">
            <Project
              img={project.screenshot.asset.url}
              title={project.title}
              githubLink={project.githubRepoLink}
              liveSiteLink={project.liveSiteLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
