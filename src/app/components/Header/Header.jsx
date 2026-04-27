"use client";

import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Container
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Market', 'Choose Us', 'Join'];

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1.5, md: 2 }, px: { xs: 0 } }}>
          {/* LOGO AREA */}
          <Typography 
            variant="h5" 
            component="div" 
            className="font-black tracking-tighter cursor-pointer text-2xl md:text-3xl"
            sx={{ 
              background: 'linear-gradient(to right, #22d3ee, #3b82f6, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CryptoForge
          </Typography>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6 }}>
            {navItems.map((item) => (
              <a
                
                href={`#${item}`}
                key={item}
                className="text-gray-400 hover:text-white font-bold text-sm uppercase tracking-widest cursor-pointer transition-colors"
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
                }}>
                   {item}
                </a>
               
              
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;