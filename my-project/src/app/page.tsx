"use client"
//import React, { useState } from "react";
import { TypewriterAnimation } from "./animate"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./project"; // Import the Projects component

// const HeroSection = () => (
//   // <div className="text-center bg-red-800 py-20 px-6 ">
//   <div className="relative bg-amber-300 text-center">  
//     {/* Profile Picture Positioned Overlapping the Banner */}
//     <div className="absolute bottom-[-80px] w-32 h-32 border-4 border-gray-900 bg-white rounded-full">
//       <img src="/pictures/aurora1edit.jpg" alt="Profile" className="w-full h-full rounded-full" />
//     </div>
//     <TypewriterAnimation text="Hello, I'm the guy who made this website"></TypewriterAnimation>
//     <p className="mt-4 text-gray-400 bg-gray-800">A passionate developer creating amazing web experiences.</p>
//     <div className="mt-6 space-x-4 bg-gray-800">
//       <a href="mailto:tsewrutt@unb.ca" className="text-blue-400 hover:underline">Email</a>
//       <a href="https://www.linkedin.com/in/tsewrutt" className="text-blue-400 hover:underline">LinkedIn</a>
//       <a href="https://github.com/tsewrutt" className="text-blue-400 hover:underline">GitHub</a>
//     </div>
//   </div>
// );

const HeroSection = () => (
  <div className="flex flex-col items-center bg-[#121212] min-h-screen text-white">
    {/* Cover Banner */}
    <div className="relative w-full h-60 bg-[#1E1E1E]">
      <img src="/pictures/aurora2.jpeg" alt="Banner" className="w-full h-full object-cover opacity-60"/>
      {/* Profile Picture (Overlapping the Banner) */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-32 h-32 border-2 border-[#00D4FF] bg-[#232323] rounded-full shadow-lg">
        <img src="/pictures/aurora1edit.jpg" alt="Profile" className="w-full h-full rounded-full"/>
      </div>
    </div>

    {/* Profile Content Box */}
    <div className="mt-16 p-6 bg-[#1E1E1E] shadow-lg rounded-lg w-3/4 max-w-lg text-center border border-[#00D4FF]/40">
      <TypewriterAnimation text="Hello, I'm the guy who made this website" />
      <p className="mt-2 text-gray-400">A passionate developer creating amazing web experiences.</p>
      <p className="mt-2 text-gray-400">
        👋 Hi, I'm Toushal Sewruttun! I'm a Research Lead Developer specializing in markerless motion capture, mixed reality, and AI-driven human tracking. My work focuses on building seamless integrations between Unity, Python, and real-time computer vision systems.
      </p>

      {/* Social Links */}
      <div className="mt-4 flex justify-center space-x-4">
        <a href="mailto:tsewrutt@unb.ca" className="text-[#00D4FF] hover:underline">Email</a>
        <a href="https://www.linkedin.com/in/tsewrutt" className="text-[#00D4FF] hover:underline">LinkedIn</a>
        <a href="https://github.com/tsewrutt" className="text-[#00D4FF] hover:underline">GitHub</a>
      </div>

      {/* Projects Button */}
      <div className="mt-6">
        <Link to="/projects" className="px-4 py-2 bg-[#00D4FF] text-black rounded-lg shadow-md hover:bg-[#00AACC] transition">
          View Projects
        </Link>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/80 shadow-md flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold text-gray-200">Toushal Sewruttun</h1>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
  
  export default App;