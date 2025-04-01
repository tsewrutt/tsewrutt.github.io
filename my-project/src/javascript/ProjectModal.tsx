import React from "react";
import { Project } from "../data/projects";
import Image from 'next/image'

interface ProjectModalProps {
    selectedProject: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, onClose }) => {
    if (!selectedProject) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-screen-lg
                            flex flex-col sm:flex-row md:flex-row gap-4">
                {/* Image */}
                <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="flex-1 sm:w-[250px] md:w-[300px] h-[200px] object-cover rounded"
                />
                <div className="flex-row min-w-0">
                    <h3 className="text-xl font-bold text-white sm:text-sm md:text-2xl">
                        {selectedProject.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base md:text-sm mt-2 text-wrap max-w-300px">
                        {selectedProject.desc}
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base md:text-sm mt-2 text-wrap max-w-screen-lg">
                        <strong>Skills:</strong> {selectedProject.skill}
                    </p>

                    <button
                        className="mt-4 self-start px-4 py-2 bg-blue-500 text-white rounded 
                                hover:bg-blue-600 transition sm:w-[120px] md:w-[150px]"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
                {/* Text Content */}
                
            </div>
        </div>


    );
};

export default ProjectModal;

