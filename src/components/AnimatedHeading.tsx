import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeaderProps {
  h1: string;
  h2: string;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ h1, h2 }) => {
  // Define animation variants for Framer Motion
  const textVariants = {
    hidden: { y: 200 }, // The text starts 20px below its final position
    visible: { y: 0 }  // The text ends at its final position
  };

  // Define the transition for the motion elements
  const transition = {
    duration: 1.0,
    ease: [0.6, 0.05, -0.01, 0.9],
  };

  return (
    <div className="flex gap-y-2 sm:block">
      <div className="overflow-hidden">
        <motion.h1
          className="hidden sm:block text-5xl sm:text-6xl lg:text-9xl font-bold uppercase tracking-tight"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.2 }}
        >
          {h1}
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-9xl font-bold uppercase tracking-tight"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.4 }}
        >
          {h2}
        </motion.h1>
      </div>
    </div>
  );
};

export default AnimatedHeader;
