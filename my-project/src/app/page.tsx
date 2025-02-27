"use client"
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./project"; // Import the Projects component

const HeroSection = () => (
  <div className="text-center py-20 px-6">
    <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
    <h3 className="text-4xl font-bold">Hello, I'm the guy who made this <span className="text-blue-400">John Jameson James</span></h3>
    <p className="mt-4 text-gray-400">A passionate developer creating amazing web experiences.</p>
    <div className="mt-6 space-x-4">
      <a href="mailto:tsewrutt@unb.ca" className="text-blue-400 hover:underline">Email</a>
      <a href="https://www.linkedin.com/in/tsewrutt" className="text-blue-400 hover:underline">LinkedIn</a>
      <a href="https://github.com/tsewrutt" className="text-blue-400 hover:underline">GitHub</a>
    </div>
  </div>
);





const App = () => {
    return (
      <Router>
        <div className="min-h-screen bg-gray-900 text-white font-sans">
          {/* Navbar */}
          <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <div className="space-x-6">
              <Link to="/" className="hover:text-blue-400">Home</Link>
              <Link to="/projects" className="hover:text-blue-400">Projects</Link>
            </div>
          </nav>
  
          {/* Routes */}
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    );
  };
  
  export default App;