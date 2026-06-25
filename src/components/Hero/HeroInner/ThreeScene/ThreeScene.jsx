"use client"

import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import ETH from "../../../ETH/ETH";

const ThreeScene = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative h-[400px] sm:h-[500px] md:h-[650px] lg:h-auto w-full flex justify-center items-center mt-0 lg:mt-0 order-first lg:order-last"
    >
      <Box className="absolute w-[70%] h-[70%] bg-cyan-500/20 blur-[80px] md:blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <Box className="absolute w-[50%] h-[50%] bg-purple-500/15 blur-[60px] md:blur-[100px] rounded-full delay-700 animate-pulse pointer-events-none" />
      {mounted && (
        <Canvas camera={{ position: [0, 0, 7], fov: 80 }}>
          <ETH />
        </Canvas>
      )}
    </motion.div>
  );
};

export default ThreeScene;
