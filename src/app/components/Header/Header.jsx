"use client";

import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  IconButton, 
  MenuItem, 
  Menu, 
  Container 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { motion } from 'framer-motion';

function Header() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 0 } }}>
          {/* LOGO AREA */}
          <Typography 
            variant="h5" 
            component="div" 
            className="font-black tracking-tighter cursor-pointer"
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
              <Typography 
                key={item}
                component={motion.p}
                whileHover={{ y: -2 }}
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
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* USER ACTIONS */}
          <Box className="flex items-center gap-2">
            {auth && (
              <div>
             
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  slotProps={{
                    paper: {
                      sx: {
                        bgcolor: 'rgba(10, 15, 30, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        mt: 1.5,
                        minWidth: 150
                      }
                    }
                  }}
                >
                  <MenuItem onClick={handleClose} className="hover:bg-white/5 py-3">Profile</MenuItem>
                  <MenuItem onClick={handleClose} className="hover:bg-white/5 py-3">Settings</MenuItem>
                  <Box className="h-[1px] bg-white/10 my-1" />
                  <MenuItem onClick={handleClose} className="text-red-400 hover:bg-red-500/10 py-3">Logout</MenuItem>
                </Menu>
              </div>
            )}

            <IconButton
              size="large"
              edge="end"
              className="text-white md:hidden"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;