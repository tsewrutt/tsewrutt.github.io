import React, {useEffect} from "react";
import { Project } from "../data/projects";
import Image from 'next/image'
import { X } from 'lucide-react';
import { SlideUp } from "./animate"; 

interface ProjectModalProps {
    selectedProject: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, onClose }) => {
    // Effect to handle body overflow when modal is open
    // This effect adds a class to the body to prevent scrolling when the modal is open    
    useEffect(() => {
        if (selectedProject) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            // Always clean up on unmount
            document.body.classList.remove('overflow-hidden');
        };
    }, [selectedProject]);

    if (!selectedProject) return null;

    return (
        
        <div className="fixed inset-0 flex items-center z-[60] justify-center backdrop-blur-sm p-4 transition-transform duration-500 ease-in-out" onClick={onClose}>
        <SlideUp>
            <div className="bg-[var(--card)] p-6 rounded-lg shadow-lg max-w-screen-lg
                            flex flex-col sm:flex-row md:flex-row gap-4 relative border border-[var(--border-color)]"  onClick={(e) => e.stopPropagation() }>
                
                <div className="relative sm:w-[250px] md:w-[500px] h-[250px] lg:w-300">
                    <Image
                        src={selectedProject.img}
                        alt={selectedProject.title}
                        fill
                        className="object-cover rounded"
                    />

                </div>

                <div className="flex-row min-w-0">
                    <h3 className="text-xl font-bold text-[var(--text-color)] sm:text-sm md:text-2xl">
                        {selectedProject.title}
                    </h3>
                    {/* <p className="text-[var(--text-color)] text-sm sm:text-base md:text-sm mt-2 text-wrap max-w-300px whitespace-pre-wrap">
                        {selectedProject.desc}
                    </p> */}
                    {/* Scrollable description */}
                    <div className="rounded-lg overflow-hidden border border-[var(--border-color)]">
                        <div className="text-[var(--text-color)] text-sm sm:text-base md:text-sm mt-2 max-h-50 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pl-1 ">
                            <p className="whitespace-pre-wrap">
                                {selectedProject.desc}
                            </p>
                        </div>
                    </div>

                    <p className="text-[var(--text-color)] pt-1 text-sm sm:text-base md:text-sm mt-2 text-wrap max-w-screen-lg">
                        <strong>Skills:</strong> {selectedProject.skill}
                    </p>
                    <button
                        className="absolute top-3 right-3 text-white rounded 
                                hover:bg-gray-600 transition sm:w-[25px] md:w-[25px]"
                        onClick={onClose}
                    >
                        <X/>
                    </button>
                </div>
            </div>
        </SlideUp>
        </div>


    );
};

export default ProjectModal;

