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
    {/* TEXT_BOX */}
    <Box className='flex flex-col gap-5 items-start' >
        {/* HEADINGS */}
        <Box>
            {/* SUBHEADING */}
           <span className=" inline-block text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-6">
              Home
          </span>
          <Typography
            variant="h1"
            className='text-white font-black tracking-tight mb-6'
            sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }, lineHeight: 1.05 }}
          >
            Forge Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-500">
              Crypto
            </span>{' '}
            Future
          </Typography>
        </Box>
        {/* DESC */}
        <Typography  className='text-gray-400 max-w-md text-base md:text-lg leading-relaxed mb-12 md:mb-14'>
          Step into the next generation of finance. Trade with precision,
          invest with clarity, and dominate the market with CryptoForge.
        </Typography>
    </Box>
    {/* BUTTONS_BOX */}
    <Box className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
      <Button
        variant="contained"
        component={motion.button}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="rounded-full px-7 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-sm md:text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
      >
        Get Started
      </Button>
      <Button
        variant="outlined"
        component={motion.button}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: '9999px',
          borderColor: 'rgba(6, 182, 212, 0.25)',
          color: '#22d3ee',
          fontSize: { xs: '0.875rem', md: '1rem' },
          fontWeight: 600,
          textTransform: 'none',
          backdropFilter: 'blur(8px)',
          background: 'rgba(6, 182, 212, 0.05)',
          '&:hover': {
            borderColor: 'rgba(6, 182, 212, 0.5)',
            background: 'rgba(6, 182, 212, 0.1)',
          },
        }}
      >
        Learn More
      </Button>
    </Box>
  </motion.div>
);

export default HomeView;
