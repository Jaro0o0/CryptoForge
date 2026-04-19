"use client"

import React, { useState, useEffect } from 'react';
import { Container, Box } from "@mui/system";
import { 
  Typography, 
  Button, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Menu, 
  MenuItem 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import ETH from "../ETH/ETH";
import CoinBox from '../CoinBox/CoinBox';
import { getData } from '@/utils/getData';

const HeroInner = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState('home');

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
    
  }, []);

  const btcData = data?.find(coin => coin.id === 'bitcoin');
  const ethData = data?.find(coin => coin.id === 'ethereum');
  const solData = data?.find(coin => coin.id === 'solana');

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="w-full h-screen bg-gray-950 relative overflow-hidden flex items-center">
      {/* GRADIENT BLOBS */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[130px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[130px] pointer-events-none" 
      />

      <Container maxWidth="lg" className="relative z-10 pt-20">
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* NAVIGATION BAR  */}
            <motion.div variants={itemVariants} className="mb-12">
              <AppBar 
                position="static" 
                className='backdrop-blur-xl rounded-2xl' 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.05)', 
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  backgroundImage: 'none'
                }}
              >
                <Toolbar className="justify-between px-4">
                  <Box className='flex gap-2 md:gap-6'>
                    {['home', 'news', 'popular'].map((v) => (
                      <Button 
                        key={v}
                        onClick={()=> setView(v)} 
                        // className={`capitalize transition-all duration-300 ${view === v ? 'text-cyan-400 font-bold' : 'text-gray-400 hover:text-white'}`}
                         sx={{ 
                  position: 'relative',
                  '&:hover': {
                    '&:after': {
                      width: '100%',
                    }
                  },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(to right, #22d3ee, #a855f7)',
                    transition: 'width 0.3s ease',
                  }
                }}
                      >
                        {v === 'popular' ? 'Most Popular' : v}
                      </Button>
                    ))}
                  </Box>
                </Toolbar>
              </AppBar>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    bgcolor: 'rgba(10, 15, 30, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    mt: 1.5
                  }
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
              </Menu>
            </motion.div>

            {/* CONTENT AREA */}
            <AnimatePresence mode="wait">
              {view === 'home' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Typography 
                    variant="h1" 
                    className='text-white font-black tracking-tighter mb-4'
                    sx={{ fontSize: { xs: '3.5rem', md: '5rem' }, lineHeight: 1 }}
                    gutterBottom
                  >
                    Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Crypto</span> Future
                  </Typography>
                  <Typography 
                    className='text-gray-400 max-w-md text-lg md:text-xl leading-relaxed mb-12'
                  >
                    Step into the next generation of finance. Trade with precision, 
                    invest with clarity, and dominate the market with CryptoForge.
                  </Typography>
                  <Box className="flex gap-4 mt-3">
                    <Button 
                      variant="contained" 
                      className="rounded-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-transform font-bold text-lg shadow-lg shadow-cyan-500/20"
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outlined" 
                      className="rounded-full px-8 py-3 border-white/10 text-white hover:bg-white/5 transition-colors font-bold text-lg"
                    >
                      Learn More
                    </Button>
                  </Box>
                </motion.div>
              )}

              {view === 'news' && (
                <motion.div
                  key="news"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-white"
                >
                  <Typography variant="h2" className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Market Insights</Typography>
                  <Box className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <Box key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors cursor-pointer">
                        <Typography className="text-cyan-400 text-xs font-bold uppercase mb-1">Trending</Typography>
                        <Typography className="font-semibold text-lg">Bitcoin Hits New Yearly High as Adoption Surges</Typography>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              )}

              {view === 'popular' && (
                <motion.div
                  key="popular"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className='grid grid-cols-1 sm:grid-cols-2 gap-4'
                >
                  {[
                    { data: btcData, label: 'BTC' },
                    { data: ethData, label: 'ETH' },
                    { data: solData, label: 'SOL' }
                  ].map((coin, idx) => (
                    <CoinBox key={idx}>
                      <Box className='flex items-center gap-4'>
                        <Box className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                          {coin.data?.image && <img src={coin.data.image} alt={coin.label} className="w-8 h-8" />}
                        </Box>
                        <Box>
                          <Typography className="text-gray-400 text-xs font-bold uppercase">{coin.label}</Typography>
                          <Typography variant='h6' className="text-white font-bold leading-none">
                            {coin.data ? `$${coin.data.current_price.toLocaleString()}` : '...'}
                          </Typography>
                        </Box>
                      </Box>
                    </CoinBox>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* 3D VISUAL AREA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[400px] md:h-[550px] w-full flex justify-center items-center mt-[-20px] lg:mt-0"
          >
            <Box className="absolute w-[70%] h-[70%] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
            <Box className="absolute w-[50%] h-[50%] bg-purple-500/15 blur-[100px] rounded-full delay-700 animate-pulse pointer-events-none" />
            <Canvas camera={{ position: [0, 0, 7], fov: 80 }}>
              <ETH />
            </Canvas>
          </motion.div>
        </Box>
      </Container>
    </section>
  );
};

export default HeroInner;
