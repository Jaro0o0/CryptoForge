"use client"

import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Box,
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    <section id="Home" className="w-full min-h-screen bg-gray-950 relative overflow-hidden flex items-center py-20 md:py-0">
      {/* GRADIENT BLOBS */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/30 rounded-full blur-[80px] md:blur-[130px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-5%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/30 rounded-full blur-[80px] md:blur-[130px] pointer-events-none" 
      />

      <Container maxWidth="lg" className="relative z-10 pt-10 md:pt-20">
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            {/* NAVIGATION BAR  */}
            <motion.div variants={itemVariants} className="mb-8 md:mb-12 w-full max-w-md lg:max-w-none">
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
                <Toolbar className="justify-center px-2 md:px-4">
                  {/* NAVS_BUTTONS */}
                  <Box className='flex justify-center gap-1 md:gap-6'>
                    {['home', 'news', 'popular'].map((v) => (
                      <Button 
                        key={v}
                        onClick={()=> setView(v)} 
                        sx={{ 
                          position: 'relative',
                          color: 'white',
                          fontSize: { xs: '0.85rem', md: '1.05rem' },
                          minWidth: { xs: 'auto', md: '64px' },
                          px: { xs: 1.5, md: 2 },
                          textTransform: 'capitalize',
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
                            width: view === v ? '100%' : '0%',
                            height: '2px',
                            background: 'linear-gradient(to right, #22d3ee, #a855f7)',
                            transition: 'width 0.3s ease',
                          }
                        }}
                      >
                        {v}
                      </Button>
                    ))}
                  </Box>
                </Toolbar>
              </AppBar>
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
                      className="rounded-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-transform font-bold text-base shadow-lg shadow-cyan-500/20"
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outlined" 
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderColor: 'rgba(6, 182, 212, 0.3)',
                        color: '#22d3ee',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: '#22d3ee',
                          bgcolor: 'rgba(6, 182, 212, 0.05)',
                        }
                      }}
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
                  className="text-white w-full"
                >
                  <Typography variant="h3" className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-3xl md:text-4xl">Market Insights</Typography>
                  <Box className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <Box key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors cursor-pointer text-left">
                        <Typography className="text-cyan-400 text-xs font-bold uppercase mb-1">Trending</Typography>
                        <Typography className="font-semibold text-base md:text-lg">Bitcoin Hits New Yearly High as Adoption Surges</Typography>
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
                  className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'
                >
                  {[
                    { data: btcData, label: 'BTC' },
                    { data: ethData, label: 'ETH' },
                    { data: solData, label: 'SOL' }
                  ].map((coin, idx) => (
                    <CoinBox key={idx}>
                      <Box className='flex items-center gap-4'>
                        <Box className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                          {coin.data?.image && <img src={coin.data.image} alt={coin.label} className="w-6 h-6 md:w-8 md:h-8" />}
                        </Box>
                        <Box className="text-left">
                          <Typography className="text-gray-400 text-[10px] md:text-xs font-bold uppercase">{coin.label}</Typography>
                          <Typography variant='h6' className="text-white font-bold leading-none text-sm md:text-lg">
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
            className="relative h-[300px] sm:h-[400px] md:h-[550px] w-full flex justify-center items-center mt-0 lg:mt-0 order-first lg:order-last"
          >
            <Box className="absolute w-[70%] h-[70%] bg-cyan-500/20 blur-[80px] md:blur-[120px] rounded-full animate-pulse pointer-events-none" />
            <Box className="absolute w-[50%] h-[50%] bg-purple-500/15 blur-[60px] md:blur-[100px] rounded-full delay-700 animate-pulse pointer-events-none" />
            {mounted && (
              <Canvas camera={{ position: [0, 0, 7], fov: 80 }}>
                <ETH />
              </Canvas>
            )}
          </motion.div>
        </Box>
      </Container>
    </section>

  );
};

export default HeroInner;
