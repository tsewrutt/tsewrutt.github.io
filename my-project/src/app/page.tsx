"use client"
import { TypewriterAnimation, StarryBackground } from "./animate"
import { Download } from "lucide-react";
import Link from "next/link";
import Image from 'next/image'

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      
      <div className="flex flex-col items-center min-h-screen">
        <StarryBackground />
        
        {/* Cover Banner */}
        <div className="relative w-full h-85  z-1">
          <Image 
            src="/pictures/banner.jpeg" 
            alt="Banner"
            fill
            className="object-cover opacity-60"
            priority
          />

          {/* Profile Picture (Overlapping the Banner) */}
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-32 h-32 border-2 border-[var(--accent)] rounded-full overflow-hidden shadow-lg">
            <Image 
              src="/pictures/profile.jpeg" 
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>


        {/* Profile Content Box */}
        <div className="mt-10 p-6 bg-[var(--card)] shadow-lg rounded-lg w-3/4 max-w-lg text-center border border-[var(--border-color)] z-10">
          <TypewriterAnimation text="Hello, I'm the guy who made this website" />
          <p className="mt-2 text-[var(--text-color)]">
            A passionate developer building cool things as he goes.
          </p>
          <p className="mt-2 text-[var(--text-color)]">
            👋 Hi, I&apos;m Toushal Sewruttun! I&apos;m a Research Developer in the HCI Lab at the University of New Brunswick. My work focuses on building seamless integrations of platforms, mixed reality, real-time computer vision systems and many more.
          </p>

          {/* Social Links */}
          <div className="mt-4 flex justify-center space-x-4">
            <a href="mailto:tsewrutt@unb.ca" className="text-[var(--accent)] hover:underline">Email</a>
            <a href="https://www.linkedin.com/in/tsewrutt" className="text-[var(--accent)] hover:underline">LinkedIn</a>
            <a href="https://github.com/tsewrutt" className="text-[var(--accent)] hover:underline">GitHub</a>
          </div>

          {/* Projects Button */}
          <div className="mt-6 flex justify-center space-x-4">
            <Link 
              href="/projects"
              className="px-4 py-1 bg-[var(--accent)] text-[var(--background)] rounded-lg shadow-md hover:bg-[var(--accent-hover)] transition"
            >
              View Projects
            </Link>

            <Link
              href="personal/resume.pdf"
              download="Toushal_Sewruttun_Resume"
              className="flex px-4 py-1 bg-[var(--accent)] text-[var(--background)] rounded-lg shadow-md hover:bg-[var(--accent-hover)] transition"
            >
              <span className="pr-1">Resume</span>  
              <Download size={22}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
