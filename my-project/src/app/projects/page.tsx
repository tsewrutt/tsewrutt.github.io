"use client";
import React, { useState, useEffect } from "react";
import { projects, Project } from "../../data/projects"; // Import the project data
import ProjectModal from "../ProjectModal"; // Import the modal component
import { CircleChevronLeft, CircleChevronRight, Filter, SortAsc, SortDesc } from "lucide-react";
import { SlideUp, StarryBackground } from "../animate"
import Image from 'next/image'


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1); // Page number state
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'skill'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterSkill, setFilterSkill] = useState<string>('');
  const projectsPerPage = 6; // Number of projects per page

  // Add new state to track hover image index
const [hoveredImageIndex, setHoveredImageIndex] = useState<{[key: number]: number}>({});

// Function to start hover slideshow
const handleMouseEnter = (projectId: number, imagesCount: number) => {
  if (imagesCount <= 1) return;

  let index = 0;
  const interval = setInterval(() => {
    setHoveredImageIndex(prev => ({ ...prev, [projectId]: (index++) % imagesCount }));
  }, 1000); // change every 1.5s

  setHoveredImageIndex(prev => ({ ...prev, [`interval_${projectId}`]: interval }));
};

const handleMouseLeave = (projectId: number) => {
  clearInterval(hoveredImageIndex[`interval_${projectId}`]);
  setHoveredImageIndex(prev => ({ ...prev, [projectId]: 0 }));
};

  // Get all unique skills for filtering
  const allSkills = Array.from(new Set(projects.flatMap(p => p.skill.split(',').map(s => s.trim()))));

  // Sort and filter projects
  const sortedAndFilteredProjects = projects
    .filter(project => 
      filterSkill === '' || project.skill.toLowerCase().includes(filterSkill.toLowerCase())
    )
    .sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'date':
          // Parse dates for comparison (assuming format like "2025-06" or "2024-12")
          const dateA = new Date(a.date.includes('-') ? a.date : `${a.date}-01`);
          const dateB = new Date(b.date.includes('-') ? b.date : `${b.date}-01`);
          comparison = dateA.getTime() - dateB.getTime();
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'skill':
          comparison = a.skill.localeCompare(b.skill);
          break;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  // Close the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Reset to first page when sorting or filtering changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, sortOrder, filterSkill]);

  const idxOfLastProject = currentPage * projectsPerPage;
  const idxOfFirstProject = idxOfLastProject - projectsPerPage;

  // Slice the sorted and filtered projects array to get the current page's projects
  const currentProjects = sortedAndFilteredProjects.slice(idxOfFirstProject, idxOfLastProject);

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
    <div className="relative min-h-screen bg-[var(--background)] text-white">
      <StarryBackground/>
      
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pt-20 sm:pt-24">
        {/* Compact Sorting and Filtering Controls */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 bg-[var(--card)] rounded-lg border border-[var(--border-color)] shadow-sm">
          {/* Sort Controls */}
          <div className="flex items-center gap-2">
            <SortAsc className="w-4 h-4 text-[var(--text-color)]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'skill')}
              className="px-3 py-1.5 bg-[var(--background)] text-[var(--text-color)] border border-[var(--border-color)] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-all"
            >
              <option value="date">Date</option>
              <option value="title">Title</option>
              <option value="skill">Technology</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-1.5 bg-[var(--accent)] text-white rounded-md text-sm hover:bg-[var(--accent-hover)] transition-all"
              title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
            >
              {sortOrder === 'asc' ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />}
            </button>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[var(--text-color)]" />
            <select
              value={filterSkill}
              onChange={(e) => setFilterSkill(e.target.value)}
              className="px-3 py-1.5 bg-[var(--background)] text-[var(--text-color)] border border-[var(--border-color)] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-all"
            >
              <option value="">All Skills</option>
              {allSkills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="text-[var(--text-color)] text-xs font-medium bg-[var(--card-bubbles)] px-2 py-1 rounded-md border border-[var(--border-color)] ml-auto">
            {currentProjects.length}/{sortedAndFilteredProjects.length}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {currentProjects.map((project, index) => (
        <SlideUp
          key={project.id}
          keyProp={project.id}
          delay={index * 0.05 }
          className="bg-[var(--card)] p-4 sm:p-6 rounded-xl cursor-pointer hover:bg-[var(--card-hover)] transition-all duration-300 ease-in-out transform hover:scale-105 border border-[var(--border-color)] hover:border-[var(--accent-hover)] shadow-lg hover:shadow-xl"
        >
          <div onClick={() => setSelectedProject(project)}>
            <h3 className="text-lg sm:text-xl text-[var(--text-color)] font-bold mb-2 sm:mb-3">{project.title}</h3>
            <div
                onMouseEnter={() => handleMouseEnter(project.id, project.img.length)}
                onMouseLeave={() => handleMouseLeave(project.id)}
                onClick={() => setSelectedProject(project)}
                className="relative w-full h-40 sm:h-52 mb-3 sm:mb-4 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={project.img[hoveredImageIndex[project.id] || 0]}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            <div className="text-[var(--text-color)] text-sm flex flex-wrap gap-1 sm:gap-2">
              {project.skill.split(",").slice(0, 3).map((keyword, index) => (
                <span
                  key={index}
                  className="bg-[var(--card-bubbles)] text-[var(--text-color)] px-2 sm:px-3 py-1 border border-[var(--border-color)] rounded-full text-xs font-medium"
                >
                  {keyword.trim()}
                </span>
              ))}
              {project.skill.split(",").length > 3 && (
                <span className="text-[var(--text-color)] text-xs px-2 py-1">
                  +{project.skill.split(",").length - 3} more
                </span>
              )}
            </div>
          </div>
        </SlideUp>
      ))}
    </div>

        {/* Pagination */}
        <div className="flex justify-between items-center gap-4 mt-6 sm:mt-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-[var(--card)] text-[var(--text-color)] rounded-lg hover:bg-[var(--card-hover)] transition-all duration-300 border border-[var(--border-color)] flex items-center gap-2 font-medium text-sm ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:border-[var(--accent-hover)]"
            }`}
          >
            <CircleChevronLeft className="w-4 h-4"/>
            <span className="hidden sm:inline">Previous</span>
          </button>
          
          <div className="px-3 py-1 bg-[var(--card-bubbles)] text-[var(--text-color)] rounded-md border border-[var(--border-color)] font-medium text-sm">
            Page {currentPage}
          </div>
          
          {idxOfLastProject < sortedAndFilteredProjects.length && (
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-[var(--card)] text-[var(--text-color)] rounded-lg hover:bg-[var(--card-hover)] transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-hover)] flex items-center gap-2 font-medium text-sm"
            >
              <span className="hidden sm:inline">Next</span>
              <CircleChevronRight className="w-4 h-4"/>
            </button>
          )}
        </div>
      </div>

      {/* Modal */}

      <ProjectModal selectedProject={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};