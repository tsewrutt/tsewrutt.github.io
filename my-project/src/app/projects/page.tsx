"use client";
import React, { useState } from "react";
import { projects, Project } from "../../data/projects"; // Import the project data
import ProjectModal from "../../javascript/ProjectModal"; // Import the modal component
import Image from 'next/image'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-6 pt-16">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>

      {/* Project List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <div className="relative w-full h-48 mb-2 rounded overflow-hidden">
              <Image
                src = {project.img}
                alt = {project.title}
                width={800}
                height={500}
                className="object-cover"
                // sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <p className="text-gray-400 text-sm line-clamp-2">{project.skill}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal selectedProject={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default Projects;
