"use client"

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import ETHCanvas from "../../../ETH/ETHCanvas";

const ThreeScene = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-[300px] sm:h-[450px] md:h-[600px] lg:h-[550px] w-full order-first lg:order-last"
    >
      {/* Glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[65%] h-[65%] bg-cyan-500/20 blur-[100px] md:blur-[140px] rounded-full pointer-events-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[45%] h-[45%] bg-purple-500/15 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
      {/* Subtle ring */}
      <Box className="absolute w-[80%] h-[80%] border border-white/5 rounded-full pointer-events-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />

      <div className="absolute inset-0">
        <ETHCanvas camera={{ position: [0, 0, 7], fov: 75 }} className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default ThreeScene;
