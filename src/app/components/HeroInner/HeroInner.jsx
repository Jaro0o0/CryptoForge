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
import ETH from "../ETH/ETH";
import CoinBox from '../CoinBox/CoinBox';
import { getData } from '@/utils/getData';

const HeroInner = () => {
  // data fetch
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  // SHARE_BTC
  const btcPrice = data?.find(coin => coin.id === 'bitcoin')?.current_price;
  const ethPrice = data?.find(coin => coin.id === 'ethereum')?.current_price;
    // SHARE_SOL
    const solPrice = data?.find(coin => coin.id === 'solana')?.current_price;

  // filter
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
  };



  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="w-full h-screen bg-linear-to-r from-cyan-500 to-purple-500 relative">
      <Container className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2'>
        <Box>
          {/* Integrated SecondHeader logic */}
          <Box sx={{ flexGrow: 1, mb: 4 }}>
            <AppBar 
              position="static" 
              className='backdrop-blur-lg rounded-md' 
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Box className='flex gap-10'>
                  <Typography component='p' sx={{ fontWeight: 'bold', cursor: 'pointer' }}>New</Typography>
                  <Typography component='p' sx={{ fontWeight: 'bold', cursor: 'pointer' }}>Most popular</Typography>
                  {/* TOOGLE_BUTTON */}
                  <Button onClick={()=> setOpen(prev => !prev)}>Most popular</Button>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                {auth && (
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                  </div>
                )}
              </Toolbar>
            </AppBar>
          </Box>



        {/* TEXT_BOX */}
        {  open && <Box>
          <Typography variant="h1" component='h3'>Crypto</Typography>
          <Typography component='p'>Description</Typography>
          <Button variant="outlined">Outlined</Button>
        </Box>   }
        
        {/* MOST_PUPULAR */}
        {!open &&  
        <>
        <Box className='flex'>
            <CoinBox>
                    <Typography variant='h4'>{btcPrice ? `Btc Price: $${btcPrice.toLocaleString()}` : 'Loading BTC Price...'}</Typography>
            </CoinBox>
            <CoinBox>
                    <Typography variant='h4'>{ethPrice  ? `ETH Price: $${ethPrice .toLocaleString()}` : 'Loading ETH Price...'}</Typography>
            </CoinBox>
             <CoinBox>
                    <Typography variant='h4'>{ solPrice ? `SOL Price: $${ solPrice .toLocaleString()}` : 'Loading ETH Price...'}</Typography>
            </CoinBox>
        </Box>
        </>

       
        
        
        }


        </Box>
        {/* 3D_BOX */}
        <Box sx={{ height: '500px' }}>
          <Canvas>
            <ETH />
          </Canvas>
        </Box>
      </Container>
    </section>
  );
};

export default HeroInner;
