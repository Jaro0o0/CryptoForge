"use client"

import { useState } from 'react';
import { Box } from "@mui/material";

import { motion, AnimatePresence } from "framer-motion";
import NavBar from './NavBar/NavBar';
import ThreeScene from './ThreeScene/ThreeScene';
import HomeView from './Views/HomeView';
import NewsView from './Views/NewsView';
import PopularView from './Views/PopularView';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 }
  }
};

const HeroInner = ({ btcData, ethData, solData }) => {
  const [view, setView] = useState('home');

  return (
    <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
      {/* LEFT CONTENT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col text-center lg:text-left items-center lg:items-start h-full"
      >
          {/* NAVIGATION */}
          <NavBar view={view} setView={setView} />

          {/* CONTENT AREA */}
          <Box className="flex-1 flex flex-col justify-center w-full items-center lg:items-start">
              {/* VIEWS */}
              <AnimatePresence mode="wait">
                {view === 'home' && <HomeView />}
                {view === 'news' && <NewsView />}
                {view === 'popular' && <PopularView btcData={btcData} ethData={ethData} solData={solData} />}
              </AnimatePresence>
          </Box>

      </motion.div>
        {/* 3D_SCENE */}
        
            <ThreeScene />
        
    </Box>
  );
};

export default HeroInner;
