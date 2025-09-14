"use client"
import { motion, AnimatePresence } from "framer-motion";
import React, { useMemo } from "react";
//Taking text as input from page
export const TypewriterAnimation = ({ text }) => {
  const letters = text.split(""); //split up letters from txt
  return (
    <h3 className="text-[var(--text-color)] font-bold" style={{ fontFamily: "'VT323', monospace" }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
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

const StarryBackgroundComponent = () => {
  const stars = useMemo(() => {
    return [...Array(100)].map((_, i) => {
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 10 + 5;
      const xMove = Math.random() * 20 - 10;
      const yMove = Math.random() * 20 - 10;

      return (
        <motion.span
          key={i}
          className="absolute bg-[var(--star-color)] rounded-full opacity-80"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, x: xMove, y: yMove }}
          animate={{
            opacity: [0.5, 1, 0.5],
            x: [xMove, -xMove, xMove],
            y: [yMove, -yMove, yMove],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      );
    });
  }, []);

  return (
    <div className="absolute top-20 left-0 w-full h-[100%] z-0 overflow-hidden pointer-events-none">
      {stars}
    </div>
  );
};

export const StarryBackground = React.memo(StarryBackgroundComponent);


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

export const SlideUp = ({
  children,
  delay = 0,
  keyProp,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  keyProp?: string | number;
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyProp}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.1, ease: "easeInOut", delay }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};