"use client"

import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const HomeView = () => (
  <motion.div
    key="home"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col items-center lg:items-start"
  >
    <Typography
      variant="h1"
      className='text-white font-black tracking-tighter mb-4'
      sx={{ fontSize: { xs: '2.8rem', sm: '3.5rem', md: '5rem' }, lineHeight: 1.1 }}
      gutterBottom
    >
      Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Crypto</span> Future
    </Typography>
    <Typography
      className='text-gray-400 max-w-md text-base md:text-xl leading-relaxed mb-8 md:mb-12'
      gutterBottom
    >
      Step into the next generation of finance. Trade with precision,
      invest with clarity, and dominate the market with CryptoForge.
    </Typography>

    <Box className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
      <Button
        variant="contained"
        component={motion.button}
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="rounded-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-base shadow-lg shadow-cyan-500/20"
      >
        Get Started
      </Button>
      <Button
        variant="outlined"
        component={motion.button}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        sx={{
          px: 4,
          py: 1.5,
          borderColor: 'rgba(6, 182, 212, 0.3)',
          color: '#22d3ee',
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'none',
        }}
      >
        Learn More
      </Button>
    </Box>
  </motion.div>
);

export default HomeView;
