"use client"

import { useState } from 'react';
import { Box } from "@mui/material";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";
import NavBar from './NavBar/NavBar';
import HomeView from './Views/HomeView';
import NewsView from './Views/NewsView';
import PopularView from './Views/PopularView';

const ThreeScene = dynamic(() => import('./ThreeScene/ThreeScene'), {
  ssr: false,
  loading: () => (
    <Box className="w-full min-h-[400px] rounded-3xl bg-white/[0.02] border border-white/5 animate-pulse" />
  )
});

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.15, ease: "easeOut" }
  }
};

const HeroInner = ({ btcData, ethData, solData }) => {
  const [view, setView] = useState('home');

  return (
    <Box className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* LEFT CONTENT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col text-center lg:text-left items-center lg:items-start h-full w-full"
      >
        {/* Decorative glow behind content */}
        <Box className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
        <Box className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Glass panel */}
        <Box className="relative w-full rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 lg:p-10">
          {/* NAVIGATION */}
          <NavBar view={view} setView={setView} />

          {/* CONTENT AREA */}
          <Box className="flex-1 flex flex-col justify-center w-full items-center lg:items-start min-h-[320px] md:min-h-[360px]">
            <AnimatePresence mode="wait">
              {view === 'home' && <HomeView />}
              {view === 'news' && <NewsView />}
              {view === 'popular' && <PopularView btcData={btcData} ethData={ethData} solData={solData} />}
            </AnimatePresence>
          </Box>
        </Box>
      </motion.div>

      {/* 3D SCENE */}
      <ThreeScene />
    </Box>
  );
};

export default HeroInner;