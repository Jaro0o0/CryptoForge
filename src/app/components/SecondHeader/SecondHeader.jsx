"use client";


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


// hooks
import { useState,useEffect } from "react";

// //filter
// const [open, setOpen] = useEffect(false)
// const toogleButton = () =>{
//     setOpen(!open)

// }




function SecondHeader() {


  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
return ( 


   
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        className='backdrop-blur-lg rounded-md' 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.05)', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        //   borderRadius: '0 0 16px 16px' 
        }}

      >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
   
            <MenuIcon />
          </IconButton>
                   {/* MENU */}
                          <Box className='flex gap-10'>
                            <Typography component='p' sx={{ fontWeight: 'bold', cursor: 'pointer' }}>New</Typography>
                            <Typography component='p' sx={{ fontWeight: 'bold', cursor: 'pointer' }}>Most popular</Typography>
                           
                          </Box>
     
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
     );
}

export default SecondHeader;