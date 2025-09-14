import React, {useEffect, useState} from "react";
import { Project } from "../data/projects";
import Image from 'next/image'
import { CircleChevronLeft, CircleChevronRight, X } from 'lucide-react';
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

    const [modalImageIndex, setModalImageIndex] = useState(0);

    useEffect(() => {
    setModalImageIndex(0); // reset to first image on modal open
    }, [selectedProject]);

    if (!selectedProject) return null;

    return (
        
        <div className="fixed inset-0 flex items-center z-[60] justify-center backdrop-blur-sm p-4 transition-transform duration-500 ease-in-out" onClick={onClose}>
        <SlideUp>
            <div
                className="bg-[var(--card)] p-6 rounded-lg shadow-lg 
                        sm:w-[500px] md:w-[650px] lg:w-[750px] 
                        
                        flex flex-col gap-4 relative border border-[var(--border-color)]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image at top */}
                <div className="relative w-full h-[350px] flex items-center justify-center">
                    <Image
                        src={selectedProject.img[modalImageIndex]}
                        alt={selectedProject.title}
                        fill
                        className="object-cover rounded"
                    />
                    
                    {selectedProject.img.length > 1 && (
                        <>
                        <button
                            className="absolute left-2 text-white bg-black bg-opacity-50 rounded-full p-2"
                            onClick={() => setModalImageIndex((modalImageIndex - 1 + selectedProject.img.length) % selectedProject.img.length)}
                        >
                            <CircleChevronLeft className="w-6 h-6"/>
                        </button>
                        <button
                            className="absolute right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
                            onClick={() => setModalImageIndex((modalImageIndex + 1) % selectedProject.img.length)}
                        >
                            <CircleChevronRight className="w-6 h-6"/>
                        </button>
                        </>
                    )}
                    </div>

                {/* Text content below */}
                <div className="flex flex-col flex-grow min-w-0">
                    <h3 className="text-2xl font-bold text-[var(--text-color)]">
                        {selectedProject.title}
                    </h3>

                    {/* Scrollable description */}
                    <div className="rounded-lg overflow-hidden border border-[var(--border-color)] mt-2 flex-grow">
                        <div className="text-[var(--text-color)] text-sm max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2">
                            <p className="whitespace-pre-wrap">
                                {selectedProject.desc}
                            </p>
                        </div>
                    </div>

                    {/* Skills */}
                    <p className="text-[var(--text-color)] pt-1 text-sm mt-2">
                        <strong>Skills:</strong> {selectedProject.skill}
                    </p>

                    {/* Close button */}
                    <button
                        className="absolute top-3 right-3 text-white rounded hover:bg-gray-600 transition w-[25px] h-[25px] flex items-center justify-center"
                        onClick={onClose}
                    >
                        <X />
                    </button>
                </div>
            </div>
        </SlideUp>
        </div>


    );
};

export default ProjectModal;

