"use client"
import { TypewriterAnimation, StarryBackground } from "./animate"
import { Download } from "lucide-react";
import Link from "next/link";
import Image from 'next/image'

const App = () => {
  return (
    <div className="min-h-screen font-sans bg-[var(--background)]">
      <div className="flex flex-col items-center min-h-screen">
        <StarryBackground />

        {/* Cover Banner */}
        <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[25vh] z-0">
          <Image 
            src="/pictures/banner.jpeg" 
            alt="Banner"
            fill
            className="object-cover opacity-60"
            priority
          />

          {/* Profile Picture */}
          <div className="absolute bottom-[-3.5rem] sm:bottom-[-4rem] md:bottom-[-4.5rem] left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-32 xl:h-32 border-2 border-[var(--accent)] rounded-full overflow-hidden shadow-lg z-10">
            <Image 
              src="/pictures/profile.jpeg" 
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Profile Content Box */}
        <div className="mt-20 px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12 bg-[var(--card)] shadow-lg rounded-lg w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl lg:py-7 text-center border border-[var(--border-color)] z-10">
          
          {/* Typewriter Headline */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-8 font-semibold text-[var(--accent)]">
            <TypewriterAnimation text="...you've found my little corner of the internet." />
          </div>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base md:text-lg lg:text-6 text-[var(--text-color)] leading-relaxed">
            A passionate developer building cool things as he goes...
          </p>
          <p className="mt-3 text-sm sm:text-base md:text-lg lg:text--6 text-[var(--text-color)] leading-relaxed">
            👋 Hi, I&apos;m Toushal! I work on everything from interactive frontends to real-time computer vision systems, and I love building things that connect the digital and physical worlds. I&apos;m also passionate about meeting people from different cultures and backgrounds, and I enjoy learning from different perspectives. Glad you&apos;re here, Take a look around!
          </p>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base md:text-lg">
            <a href="mailto:tsewrutt@unb.ca" className="text-[var(--accent)] hover:underline">Email</a>
            <a href="https://www.linkedin.com/in/tsewrutt" className="text-[var(--accent)] hover:underline">LinkedIn</a>
            <a href="https://github.com/tsewrutt" className="text-[var(--accent)] hover:underline">GitHub</a>
          </div>

          {/* Projects + Resume */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/projects"
              className="px-4 sm:px-5 py-2 text-sm sm:text-base md:text-lg bg-[var(--accent)] text-[var(--background)] rounded-lg shadow-md hover:bg-[var(--accent-hover)] transition"
            >
              View Projects
            </Link>

            <Link
              href="personal/resume.pdf"
              download="Toushal_Sewruttun_Resume"
              className="flex items-center px-4 sm:px-5 py-2 text-sm sm:text-base md:text-lg bg-[var(--accent)] text-[var(--background)] rounded-lg shadow-md hover:bg-[var(--accent-hover)] transition"
            >
              <span className="pr-2">Resume</span>
              <Download size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

