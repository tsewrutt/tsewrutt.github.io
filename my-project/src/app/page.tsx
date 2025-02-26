// "use client"
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import projects from "../data/projects";
// import ProjectModal from "../javascript/ProjectModal";

// const HeroSection = () => (
//   <div className="text-center py-20 px-6">
//     <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
//     <h3 className="text-4xl font-bold">Hello, I'm the guy who made this <span className="text-blue-400">John Jameson James</span></h3>
//     <p className="mt-4 text-gray-400">A passionate developer creating amazing web experiences.</p>
//     <div className="mt-6 space-x-4">
//       <a href="mailto:tsewrutt@unb.ca" className="text-blue-400 hover:underline">Email</a>
//       <a href="https://www.linkedin.com/in/tsewrutt" className="text-blue-400 hover:underline">LinkedIn</a>
//       <a href="https://github.com/tsewrutt" className="text-blue-400 hover:underline">GitHub</a>
//     </div>
//   </div>
// );


// type Project = {
//   id: number;
//   title: string;
//   desc: string;
//   skill: string;
//   img: string;
//   date: string;
// };

// const Projects = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null); // ✅ Define the correct type

//   return (
//     <div className="py-16 px-6 relative">
//     {/* Move modal outside the main container to ensure it overlays correctly */}
//     {selectedProject && (
//       <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
//     )}
//       <h3 className="text-3xl font-semibold text-blue-400">Projects</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//         {projects.slice(0, showAll ? projects.length : 6).map((project) => (
//           <div
//             key={project.id}
//             className="bg-gray-800 p-6 rounded-lg shadow-lg flex cursor-pointer hover:bg-gray-700 transition"
//             onClick={() => setSelectedProject(project)}
//           >
//             <img
//               src={project.img}
//               alt={project.title}
//               className="w-[100px] h-[50px] rounded-lg mr-4"
//             />
//             <div>
//               <h4 className="text-xl font-semibold">{project.title}</h4>
//             </div>
//           </div>
//         ))}
//       </div>
//       {!showAll && (
//         <button
//           onClick={() => setShowAll(true)}
//           className="mt-6 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500"
//         >
//           View More
//         </button>
//       )}


//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-900 text-white font-sans">
//         {/* Navbar */}
//         <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
//           <h1 className="text-2xl font-bold">My Portfolio</h1>
//           <div className="space-x-6">
//             <Link to="/" className="hover:text-blue-400">Home</Link>
//             <Link to="/projects" className="hover:text-blue-400">Projects</Link>
//           </div>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/projects" element={<Projects />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
//}

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