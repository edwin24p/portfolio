import React from "react";

interface ProjectProps {
  img: string;
  title: string;
  githubLink: string;
  liveSiteLink?: string;
}
const Project: React.FC<ProjectProps> = ({
  img,
  title,
  githubLink,
  liveSiteLink,
}) => {
  return (
    <div className="relative group md:h-[40vh]">
      <img src={img} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300 rounded-md">
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <div className="flex space-x-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            GitHub
          </a>
          {liveSiteLink && (
            <a
              href={liveSiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
