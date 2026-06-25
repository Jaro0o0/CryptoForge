"use client"

import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import ETH from "../../../ETH/ETH";

const ThreeScene = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-[350px] sm:h-[450px] md:h-[600px] lg:h-[550px] w-full flex justify-center items-center order-first lg:order-last"
    >
      {/* Glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[65%] h-[65%] bg-cyan-500/20 blur-[100px] md:blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[45%] h-[45%] bg-purple-500/15 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"
      />
      {/* Subtle ring */}
      <Box className="absolute w-[80%] h-[80%] border border-white/5 rounded-full pointer-events-none" />

      {ready ? (
        <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
          <ETH />
        </Canvas>
      ) : (
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-cyan-400 animate-spin" />
          <span className="text-sm font-medium tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
            Loading 3D Scene…
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default ThreeScene;
