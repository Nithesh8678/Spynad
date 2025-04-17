import React from "react";
import Navbar from "./Navbar";
import SpynadWT from "../assets/Spynad-W-Trans.png";
import SplitText from "./SplitText";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="relative">
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-6">
        <Navbar />

        <img
          src={SpynadWT}
          alt="Spynad Logo"
          className="w-32 sm:w-40 md:w-48 lg:w-100 object-contain"
        />
        <SplitText
          text="Marketing That Speaks, Converts and Grows"
          className="-mt-35 text-4xl sm:text-5xl md:text-[65px] font-semibold text-white max-w-3xl"
          delay={50}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
          <motion.button
            onClick={() => navigate('/projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium
                      hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Projects
          </motion.button>

          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full text-white font-medium
                      hover:bg-white/10 transition-all duration-300"
          >
            Contact You
          </motion.button>
        </div>
      </div>
      
      {/* Dividerr */}
      <div className="absolute -bottom-20 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="h-20 bg-gradient-to-b from-black to-transparent opacity-50" />
      </div>
    </div>
  );
};

export default Header;
