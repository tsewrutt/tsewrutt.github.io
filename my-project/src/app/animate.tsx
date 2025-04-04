import { motion } from "framer-motion";

//Taking text as input from page
export const TypewriterAnimation = ({ text }) => {
  const letters = text.split(""); //split up letters from txt
  return (
    <h3 className="text-4xl font-bold" style={{fontFamily: "'VT323', monospace"}}>
      {letters.map((letter, index) => (
        <motion.span 
        key={index}
        initial = {{ opacity: 0, x: -10}}
        animate = {{ opacity: 1, x: 0}}
        transition={{
          duration: 0.1,
          delay: index * 0.1 //creates delay for each letter
        }}
        className={letter === " " ? "" : ""}
        >
          {letter}
        </motion.span>
      ))}
    </h3>
  );
};

export const StarryBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[1000px] z-0 overflow-hidden pointer-events-none">
      {/* Arc Shape */}
      <div className="w-full h-full bg-gradient-to-b from-[#1f1f1f] to-transparent rounded-b-full" />

      {/* Animated Stars */}
      {[...Array(200)].map((_, i) => {
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 10 + 5; // 5s to 15s
        // const delay = Math.random() * 2; // staggered
        const xMove = Math.random() * 20 - 10; // -10 to 10 px
        const yMove = Math.random() * 20 - 10;

        return (
          <motion.span
            key={i}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, x: xMove, y: yMove }}
            animate={{ opacity: [0.5, 1, 0.5], x: [xMove, -xMove, xMove], y: [yMove, -yMove, yMove] }}
            transition={{
              duration: duration,
              // delay: delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};


// Animation for Button
export const ButtonAnimation = () => {
  return (
    <motion.button 
      initial={{ scale: 0.8, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="px-6 py-2 mt-4 bg-blue-500 rounded-full text-white font-semibold"
    >
      Contact Me
    </motion.button>
  );
};

// Animation for Image
export const ImageAnimation = () => {
  return (
    <motion.img
      src="https://via.placeholder.com/150"
      alt="Sample"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    />
  );
};