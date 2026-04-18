"use client";

import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import ETH from "../ETH/ETH";

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const JoinUs = () => {
  return (
    <section className="w-full min-h-screen py-24 px-0 relative overflow-hidden flex flex-col justify-center bg-gray-950 text-white">
      <Container maxWidth="lg" className="relative z-10">
        <Box className="flex flex-col items-center text-center gap-8">
          <Box>
            <Typography
              variant="h1"
              className="font-bold tracking-tighter text-6xl md:text-8xl mb-2"
            >
              JOIN US
            </Typography>

            <Box className="flex items-center justify-center gap-4">
              <Typography
                variant="h2"
                className="font-bold text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
              >
                Discord
              </Typography>
              {/* ETHERIUM_3D */}
              <Box className="w-24 h-24 md:w-32 md:h-32">
                <Canvas camera={{ position: [0, 0, 7], fov: 80 }}>
                  <ETH />
                </Canvas>
              </Box>
            </Box>

            <Typography
              variant="body1"
              className="text-gray-400 text-lg md:text-xl mt-4 max-w-md mx-auto"
            >
              Invest and manage your crypto at one place. Join our community to
              stay updated with the latest trends.
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            className="rounded-full px-10 py-4 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20"
          >
            Join Discord
          </Button>
        </Box>
      </Container>

      {/* SVGS / SOCIALS */}
      <Box className="flex flex-col items-center gap-6 absolute bottom-32 left-1/2 -translate-x-1/2 z-10">
        <Box className="flex gap-6">
          {[
            {
              d: "M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612",
              viewBox: "0 0 16 16",
            },
            {
              d: "M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z",
              viewBox: "0 0 24 24",
            },
            {
              d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z",
              viewBox: "0 0 16 16",
            },
          ].map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex justify-center items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 p-4 rounded-full backdrop-blur-sm cursor-pointer hover:border-cyan-500/50 transition-colors"
            >
              <motion.svg
                variants={svgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox={icon.viewBox}
              >
                <motion.path variants={pathVariants} d={icon.d} strokeWidth={index === 1 ? 0 : 1} fill={index === 1 ? "white" : "none"} />
              </motion.svg>
            </motion.div>
          ))}
        </Box>
        <Box className="flex gap-8 text-sm text-gray-500">
          <Typography className="hover:text-cyan-400 cursor-pointer transition-colors">
            Privacy Policy
          </Typography>
          <Typography className="hover:text-cyan-400 cursor-pointer transition-colors">
            Terms of Use
          </Typography>
        </Box>
      </Box>

      {/* BACKGROUND DECORATIONS / IMAGES */}
      <Box className="absolute bottom-0 w-full h-1/2 pointer-events-none opacity-40 md:opacity-100">
        <Image
          src="/imgs/media-img.png"
          alt="Crypto Media"
          width={600}
          height={600}
          className="absolute bottom-[-10%] right-[-5%] object-contain"
        />
        <Image
          src="/imgs/undraw_bitcoin_q7r1.png"
          alt="Bitcoin Illustration"
          width={600}
          height={600}
          className="absolute bottom-[-10%] left-[-5%] object-contain"
        />
      </Box>

      {/* GRADIENT BLOBS */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />
    </section>
  );
};

export default JoinUs;
