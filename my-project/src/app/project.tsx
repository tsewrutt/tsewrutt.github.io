// "use client";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import projects  from "../data/projects";

// // Define the structure for a Project
// interface Project {
//   id: number;
//   name: string;
//   description: string;
// }

// // Modal component to display selected project
// const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
//   if (!project) return null; // Don't render if no project is selected

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//         <button className="absolute top-2 right-2 text-white text-2xl" onClick={onClose}>✖</button>
//         <h2 className="text-2xl font-bold">{project.name}</h2>
//         <p className="mt-2">{project.description}</p>
//         <p className="mt-4 text-gray-400">Project ID: {project.id}</p>
//       </div>
//     </div>
//   );
// };

// const Projects: React.FC = () => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   // Generates dummy project data
//   const projects: Project[] = Array.from({ length: 5 }, (_, index) => ({
//     id: index + 1,
//     name: `Project ${index + 1}`,
//     description: `This is a randomly generated description for Project ${index + 1}.`,
//   }));

//   return (
//     <div className="py-16 px-6">
//       <h2 className="text-3xl font-bold text-blue-400 mb-4">Projects</h2>
//       <div className="grid grid-cols-2 gap-4">
//         {projects.map((project) => (
//           <button
//             key={project.id}
//             className="bg-gray-800 p-4 rounded-lg text-white hover:bg-gray-700 transition"
//             onClick={() => setSelectedProject(project)}
//           >
//             {project.name}
//           </button>
//         ))}
//       </div>

//       {/* Display Modal if a project is selected */}
//       {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

//       {/* Back to Home */}
//       <div className="mt-6">
//         <Link to="/" className="text-blue-400 hover:underline">← Back to Home</Link>
//       </div>
//     </div>
//   );
// };

// export default Projects;
// "use client";
// import React, { useState } from "react";
// import projects from "../data/projects"; // Import the project data

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState<{ id: number; title: string } | null>(null);

//   return (
//     <div className="relative min-h-screen bg-gray-900 text-white p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>

//       {/* Project List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition"
//             onClick={() => setSelectedProject({ id: project.id, title: project.title })}
//           >
//             <h3 className="text-xl font-semibold">{project.title}</h3>
//             <p className="text-gray-400 text-sm">{project.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center relative">
//             <h3 className="text-xl font-bold">{selectedProject.title}</h3>
//             <p className="text-gray-400 mt-2">Project ID: {selectedProject.id}</p>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//               onClick={() => setSelectedProject(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

"use client";
import React, { useState } from "react";
import { projects, Project } from "../data/projects"; // Import the project data
import ProjectModal from "../javascript/ProjectModal"; // Import the modal component
// id: number; title: string



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-6">
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
            <p className="text-gray-400 text-sm">{project.skill}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal selectedProject={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default Projects;
