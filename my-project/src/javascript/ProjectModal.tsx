// import React from "react";
// import { projects, Project } from "../data/projects";

// // Here we cant get Project Type to open up with the specific details
// // if we have to reset, then just dont use types, but we want to 


// interface ProjectModalProps {
//     selectedProject: Project | null ;
//     onClose: () => void;
// }

// const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, onClose }) => {
//     if (!selectedProject) return null; // If no project is selected, return null to hide the modal

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center relative">
//                 <h3 className="text-xl font-bold">{selectedProject.title}</h3>
//                 {/* <p className="text-gray-400 mt-2">Project ID: {selectedProject.id}</p> */}
//                 <img
//                     src={selectedProject.img}
//                     alt={selectedProject.title}
//                     className="mx-auto h-[10px] w-[20px] object-cover rounded"
//                 />
//                 <p className="text-gray-400 text-sm">{selectedProject.desc}</p>
//                 <p className="text-gray-400 text-sm">{selectedProject.skill}</p>
                
//                 <button
//                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//                     onClick={onClose}
//                 >
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProjectModal;


import React from "react";
import { Project } from "../data/projects";

interface ProjectModalProps {
    selectedProject: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, onClose }) => {
    if (!selectedProject) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[600px] max-w-full flex flex-col">
                <div className="flex gap-4">
                    {/* Image on the left */}
                    <img
                        src={selectedProject.img}
                        alt={selectedProject.title}
                        className="w-[300px] h-[200px] object-cover rounded"
                    />
                    
                    {/* Content on the right */}
                    <div className="flex flex-col text-left">
                        <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                        <p className="text-gray-400 text-sm mt-2 break-words">{selectedProject.desc}</p>
                        <p className="text-gray-400 text-sm mt-2"><strong>Skills:</strong> {selectedProject.skill}</p>
                        
                        {/* Close button */}
                        <button
                            className="mt-4 self-start px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;

