import React from "react";
import { X } from "lucide-react"

const ProjectModal = ({ project, onClose }) => {
    if(!project) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <img scr={project.img} alt={project.title} className="w-[400px] h-[300px] object-cover mt-4 rounded"/>
            <p className="mt-4 text-gray-400">{project.desc}</p>
            <p className="mt-4 text-gray-400">{project.skill}</p>
            {/* <button o */}
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
             <X size={24}/>    
            </button>            
            </div>
        </div>
    );
};


export default ProjectModal;