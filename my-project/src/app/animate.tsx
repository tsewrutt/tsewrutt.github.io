import { motion } from "framer-motion";

export const AnimatedText = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-white">
      Welcome to My Portfolio!
    </motion.h1>
  );
};
//Taking text as input from page
export const TypewriterAnimation = ({ text }) => {
  const letters = text.split(""); //split up letters from txt
  return (
    <h3 className="text-4xl font-bold bg-gray-800">
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