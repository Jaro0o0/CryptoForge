"use client";

import { Container, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LazyETHCanvas from "../ETH/LazyETHCanvas";

const containerVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } },
};

const stats = [
  { value: "250+", label: "Cryptocurrencies" },
  { value: "$2B+", label: "Trading Volume" },
  { value: "50K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
];

const AboutUs = () => {
  return (
    <Box className="flex flex-col items-center w-full flex-1">
      <Container maxWidth="lg" className="relative z-20 flex-1 flex flex-col justify-center">
        <Box className="flex flex-col items-center text-center gap-6 md:gap-8">
          <Box>
            <Typography
              variant="h1"
              className="font-black tracking-tighter text-[2rem] sm:text-7xl md:text-8xl lg:text-9xl mb-2"
            >
              ABOUT US
            </Typography>

              <Box className="flex items-center justify-center gap-3 md:gap-4">
                <Typography
                  variant="h2"
                  className="font-black text-[1.4rem] sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                >
                  CryptoForge
                </Typography>
                <Box className="w-10 h-10 sm:w-24 sm:h-24 md:w-32 md:h-32 shrink-0" sx={{ position: "relative", overflow: "hidden" }}>
                  <LazyETHCanvas camera={{ position: [0, 0, 7], fov: 80 }} className="absolute inset-0" />
                </Box>
            </Box>

            <Typography
              variant="body1"
              className="text-gray-400 text-sm sm:text-base md:text-xl mt-4 md:mt-6 max-w-2xl mx-auto px-4 sm:px-6 md:px-0"
            >
              We provide real-time crypto market data, advanced analytics, and portfolio tracking tools. 
              Our mission is to make cryptocurrency accessible to everyone through intuitive design 
              and powerful insights.
            </Typography>
          </Box>

          <Box className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 w-full max-w-3xl mt-2 md:mt-4 px-4 sm:px-0">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-3 sm:p-4 md:p-6 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
              >
                <Typography
                  variant="h3"
                  className="font-black text-xl sm:text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" className="text-gray-500 text-xs sm:text-sm md:text-sm mt-1">
                  {stat.label}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>

      {/* SVG */}
      <Box className="flex flex-col items-center gap-3 md:gap-6 z-20 w-full px-4 pb-8 md:pb-12 md:pt-12">
        <Box className="flex gap-3 md:gap-6">
          {[
            {
              d: "M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612",
              viewBox: "0 0 16 16",
            },
            {
              d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258V8.05h2.23l-.355 2.325H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
              viewBox: "0 0 16 16",
            },
            {
              d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z",
              viewBox: "0 0 16 16",
            },
          ].map((icon, index) => (
              <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex justify-center items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 p-2 md:p-4 rounded-full backdrop-blur-sm cursor-pointer hover:border-cyan-500/50 transition-colors"
            >
              <svg
                className="w-4 h-4 md:w-8 md:h-8"
                fill="currentColor"
                viewBox={icon.viewBox}
              >
                <path d={icon.d} />
              </svg>
            </motion.div>
          ))}
        </Box>
        <Box className="flex gap-4 md:gap-8 text-[10px] md:text-sm text-gray-500">
          <Typography className="hover:text-cyan-400 cursor-pointer transition-colors">
            Privacy Policy
          </Typography>
          <Typography className="hover:text-cyan-400 cursor-pointer transition-colors">
            Terms of Use
          </Typography>
        </Box>
      </Box>

      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-[80px] md:blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-[80px] md:blur-[128px] pointer-events-none" />
    </Box>
  );
};

export default AboutUs;
