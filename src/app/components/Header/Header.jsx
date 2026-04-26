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
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { motion } from 'framer-motion';

function Header() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = ['Home', 'Market', 'Choose Us', 'Join'];

  const drawer = (
    <Box className="h-full bg-gray-950 text-white p-6">
      <Box className="flex justify-between items-center mb-10">
        <Typography 
          variant="h6" 
          className="font-black tracking-tighter"
          sx={{ 
            background: 'linear-gradient(to right, #22d3ee, #3b82f6, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          CryptoForge
        </Typography>
        <IconButton onClick={handleDrawerToggle} className="text-white">
          <CloseIcon />
        </IconButton>
      </Box>
      <List className="space-y-4">
        {navItems.map((item) => (
          <ListItem 
            key={item} 
            disablePadding
            onClick={handleDrawerToggle}
          >
            <ListItemText 
              primary={item} 
              primaryTypographyProps={{
                className: "text-2xl font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors"
              }}
            />
          </ListItem>
        ))}
      </List>
      
      <Box className="mt-auto pt-10">
        <Button 
          fullWidth 
          variant="contained"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl py-3 font-bold"
        >
          Connect Wallet
        </Button>
      </Box>
    </Box>
  );

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
          

            <IconButton
              size="large"
              edge="end"
              className="text-white md:hidden ml-2"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', maxWidth: '300px' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Header;