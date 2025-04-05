import React from "react";
import { Project } from "../data/projects";
import Image from 'next/image'
import { X } from 'lucide-react';

interface ProjectModalProps {
    selectedProject: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, onClose }) => {
    if (!selectedProject) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm p-4 transition-transform duration-500 ease-in-out">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-screen-lg
                            flex flex-col sm:flex-row md:flex-row gap-4 relative">

                <div className="relative sm:w-[250px] md:w-[500px] h-[250px] lg:w-300">
                <Image
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded"
                />

                </div>
                <div className="flex-row min-w-0">
                    <h3 className="text-xl font-bold text-white sm:text-sm md:text-2xl">
                        {selectedProject.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base md:text-sm mt-2 text-wrap max-w-300px whitespace-pre-wrap">
                        {selectedProject.desc}
                    </p>
                    <p className="text-gray-400 pt-4 text-sm sm:text-base md:text-sm mt-2 text-wrap max-w-screen-lg">
                        <strong>Skills:</strong> {selectedProject.skill}
                    </p>

                    <button
                        className="absolute top-3 right-3 text-white rounded 
                                hover:bg-blue-600 transition sm:w-[25px] md:w-[25px]"
                        onClick={onClose}
                    >
                        <X/>
                    </button>
                </div>
                
            </div>
        </div>


    );
};

export default ProjectModal;

