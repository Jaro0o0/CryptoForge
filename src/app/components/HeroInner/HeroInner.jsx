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

  // Full coin data
  const btcData = data?.find(coin => coin.id === 'bitcoin');
  const ethData = data?.find(coin => coin.id === 'ethereum');
  const solData = data?.find(coin => coin.id === 'solana');

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
                  
                  <Button onClick={()=> setOpen(prev => !prev)} sx={{color: 'white'}}>News</Button>
                  {/* TOOGLE_BUTTON */}
                  <Button onClick={()=> setOpen(prev => !prev)} sx={{color: 'white'}}>Most popular</Button>

                  
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
          <Typography 
            variant="h1" 
            component='h3' 
            className='text-white font-bold drop-shadow-lg'
            sx={{ mb: 2 }}
          >
            CryptoForge
          </Typography>
          <Typography 
            component='p' 
            className='text-white/80 max-w-md text-lg leading-relaxed'
            sx={{ mb: 2 }}
          >
            Step into the future of finance with CryptoForge.
            Trade smarter, invest confidently, and grow your portfolio faster.
            Everything you need, right at your fingertips.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            
          >
            Get Started
          </Button>
        </Box>   }
        
        {/* MOST_PUPULAR */}
        {!open &&  
        <>
        <Box className='flex gap-4'>
            <CoinBox>
                <Box className='flex flex-col items-center gap-2'>
                    {btcData?.image && <img src={btcData.image} alt="BTC" width={40} height={40} />}
                    <Typography variant='h5'>{btcData ? `BTC: $${btcData.current_price.toLocaleString()}` : 'Loading BTC...'}</Typography>
                </Box>
            </CoinBox>
            <CoinBox>
                <Box className='flex flex-col items-center gap-2'>
                    {ethData?.image && <img src={ethData.image} alt="ETH" width={40} height={40} />}
                    <Typography variant='h5'>{ethData ? `ETH: $${ethData.current_price.toLocaleString()}` : 'Loading ETH...'}</Typography>
                </Box>
            </CoinBox>
             <CoinBox>
                <Box className='flex flex-col items-center gap-2'>
                    {solData?.image && <img src={solData.image} alt="SOL" width={40} height={40} />}
                    <Typography variant='h5'>{solData ? `SOL: $${solData.current_price.toLocaleString()}` : 'Loading SOL...'}</Typography>
                </Box>
            </CoinBox>
        </Box>
        </>

       
        
        
        }


        </Box>
        {/* 3D_BOX */}
        <Box sx={{ height: '600px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Canvas camera={{ position: [0, 0, 7], fov: 80 }}>
            <ETH />
          </Canvas>
        </Box>
      </Container>
    </section>
  );
};

export default HeroInner;
