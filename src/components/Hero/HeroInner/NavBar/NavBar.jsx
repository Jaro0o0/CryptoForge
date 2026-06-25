"use client"

import { Box, Button, AppBar, Toolbar } from "@mui/material";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const NavBar = ({ view, setView }) => (
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
        <Box className='flex justify-center gap-1 md:gap-6'>
          {['home', 'news', 'popular'].map((v) => (
            <Button
              key={v}
              onClick={() => setView(v)}
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
);

export default NavBar;
