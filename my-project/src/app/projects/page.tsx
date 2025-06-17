"use client";
import React, { useState, useEffect } from "react";
import { projects, Project } from "../../data/projects"; // Import the project data
import ProjectModal from "../ProjectModal"; // Import the modal component
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { SlideUp, StarryBackground } from "../animate"
import Image from 'next/image'


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1); // Page number state
  const projectsPerPage = 6; // Number of projects per page

  // Close the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const idxOfLastProject = currentPage * projectsPerPage;
  const idxOfFirstProject = idxOfLastProject - projectsPerPage;

    // Slice the projects array to get the current page's projects
    const currentProjects = projects.slice(idxOfFirstProject, idxOfLastProject);

    // Handle showing the next page
    const handleNextPage = () => {
      setCurrentPage(prevPage => prevPage + 1);
    };

    // Handle going back to the previous page
    const handlePreviousPage = () => {
      setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };

  return (
    // bg-[var(--background)] = page bckgrd
    <div className="relative min-h-screen bg-[var(--background)] text-white p-6 pt-16">
      <StarryBackground/>
      <div>
        <h2 className="text-xl font-bold text-[var(--text-color)] text-center mb-6">Projects</h2>
      </div>
      {/* Project List */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-500 ease-in-out ">
      {currentProjects.map((project, index) => (
        <SlideUp
          key={project.id}
          keyProp={project.id}
          delay={index * 0.05 }
          className="bg-[var(--card)] pt-2 pl-4 pr-4 pb-4 rounded-lg cursor-pointer hover:bg-[var(--card-hover)] transition-transform duration-500 ease-in-out transform hover:scale-105 border border-[var(--border-color)] hover:border-[var(--accent-hover)]"
        >
          <div onClick={() => setSelectedProject(project)}>
            <h3 className="text-xl text-[var(--text-color)] font-semibold pb-2">{project.title}</h3>
            <div className="relative w-full h-48 mb-2 rounded overflow-hidden ">
              <Image
                src={project.img}
                alt={project.title}
                width={800}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="text-[var(--text-color)] text-sm flex flex-wrap gap-2 mt-2">
              {project.skill.split(",").map((keyword, index) => (
                <span
                  key={index}
                  className="bg-[var(--card-bubbles)] text-[var(--text-color)] px-2 py-1 border border-[var(--border-color)] rounded-full text-xs whitespace-nowrap"
                >
                  {keyword.trim()}
                </span>
              ))}
            </div>
          </div>
        </SlideUp>
      ))}
    </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1} // Disable if we're on the first page
          className={`px-6 py-2 bg-[var(--card)] text-[var(--text-color)] rounded-lg hover:bg-[var(--card-hover)] transition duration-300 transform hover:scale-105 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <CircleChevronLeft/>
        </button>
        
        {/* Show More Button */}
        {idxOfLastProject < projects.length && (
          <button
            onClick={handleNextPage}
            className="px-6 py-2 bg-[var(--card)] text-[var(--text-color)] rounded-lg hover:bg-[var(--card-hover)] transition duration-300 transform hover:scale-105"
          >
            <CircleChevronRight/>
          </button>
        )}
      </div>

      {/* Modal */}

      <ProjectModal selectedProject={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};