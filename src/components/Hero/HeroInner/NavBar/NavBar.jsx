"use client"

import { Box, Button, AppBar, Toolbar } from "@mui/material";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const NavBar = ({ view, setView }) => (
  <motion.div variants={itemVariants} className="mb-6 md:mb-8 w-full">
    <AppBar
      position="static"
      className='rounded-2xl'
      sx={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(16px)',
        backgroundImage: 'none'
      }}
    >
      <Toolbar className="justify-center px-2 md:px-4 min-h-[48px] md:min-h-[56px]">
        <Box className='flex justify-center gap-1 md:gap-2 w-full'>
          {['home', 'news', 'popular'].map((v) => (
            <Button
              key={v}
              onClick={() => setView(v)}
              sx={{
                position: 'relative',
                color: view === v ? 'white' : 'rgba(255, 255, 255, 0.5)',
                fontSize: { xs: '0.8rem', md: '0.95rem' },
                fontWeight: view === v ? 600 : 400,
                minWidth: { xs: 'auto', md: '80px' },
                px: { xs: 2, md: 3 },
                py: 0.5,
                textTransform: 'capitalize',
                letterSpacing: '0.02em',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                background: view === v ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: 'white',
                },
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
