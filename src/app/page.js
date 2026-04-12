"use client" 

import { Container,Box } from "@mui/system";
import Image from "next/image";
import Header from "./components/Header/Header";
import { duration, Typography } from "@mui/material";
import { Button }from "@mui/material";
import ETH from "./components/ETH/ETH";



import Table from "./components/Table/Table.jsx";
import { Canvas } from "@react-three/fiber";
import { Logo } from "./components/Logo/Ethereum_logo";


// Icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

//FRAMER
import { motion } from "framer-motion";
import { rotate } from "three/src/nodes/utils/RotateNode";
import { Opacity } from "@mui/icons-material";


import { getData } from "@/utils/getData";


const svgVariants = {
  hidden:{
    rotate: -180

  },
  visible:{
    rotate: 0,
  },
  transition:{duration: 1}

}

const pathVariants ={
  hidden:{
    opacity: 0,
    pathLength: 0,

  },
  visible:{
    opacity:1,
    pathLength:1,
    transition: {
      duration:2 ,
      easy:'easyInOut'
    }

  }
}

export default function Home() {

  
  return (
      <>
        <section className="w-full h-screen bg-linear-to-r from-cyan-500 to-purple-500 relative">
          <Container className='absolute top-[20%] left-[10%] grid grid-cols-2'>
            <Box>
              <Header/>
              <Typography variant="h1" component='h3'>Crypto</Typography>
              <Typography component='p'>Description</Typography>
              <Button variant="outlined">Outlined</Button>
            </Box>
            <Box sx={{ height: '500px' }}>
              <Canvas>
                <ETH/>
              </Canvas>
            </Box>

          </Container>
        </section>
        {/* Table */}
        <section className="py-[95px] px-0">
          <Container>
            <Typography variant="h1" component='h3' align="center" gutterBottom>Today's Crypto Prices</Typography>
            <Table/>
          </Container>
        </section>
        {/* WHY */}
        <section className="py-[95px] px-0">
          <Container>
             <Typography  variant="h1" component='h3' align="center" gutterBottom> Why Choose Us</Typography>
             <Box className='grid grid-cols-3'>
              {/* COL_LEFT */}
              <Box className='flex flex-col justify-between '>
                  {/* ICOM_ONE */}
                  <Box className='flex gap-2'>
                      <Box className=' flex justify-center items-center bg-linear-to-r from-cyan-500 to-purple-500 p-4 rounded-md'>
                        <AccountBalanceWalletIcon/>
                      </Box>
                      {/* TEXT_BOX */}
                      <Box>
                        <Typography variant="h5" component='h2'  >Connect your wallet</Typography>
                        <Typography component='p'>Use trust wallet</Typography>
                      </Box>
                  </Box>
                  {/* ICOM_Two */}
                  <Box className='flex gap-2'>
                      <Box className=' flex justify-center items-center bg-linear-to-r from-cyan-500 to-purple-500 p-4 rounded-md'>
                        <AccountBalanceWalletIcon/>
                      </Box>
                      {/* TEXT_BOX */}
                      <Box>
                        <Typography variant="h5" component='h2'  >Connect your wallet</Typography>
                        <Typography component='p'>Use trust wallet</Typography>
                      </Box>
                  </Box>
                  {/* ICOM_THREE */}
                  <Box className='flex gap-2'>
                      <Box className=' flex justify-center items-center bg-linear-to-r from-cyan-500 to-purple-500 p-4 rounded-md'>
                        <AccountBalanceWalletIcon/>
                      </Box>
                      {/* TEXT_BOX */}
                      <Box>
                        <Typography variant="h5" component='h2'  >Connect your wallet</Typography>
                        <Typography component='p'>Use trust wallet</Typography>
                      </Box>
                  </Box>

              </Box>
              {/* IMG_BOX */}
              <Box className='relative' sx={{ height: '400px' }}>
                <Image src='/imgs/why-img.png' alt="Why choose us" fill style={{ objectFit: "contain" }}/>
              </Box>
              {/* COL_RIGHT */}
              <Box className='flex flex-col justify-between '> 
                     {/* ICOM_ONE */}
                  <Box className='flex gap-2'>
                      <Box className=' flex justify-center items-center bg-linear-to-r from-cyan-500 to-purple-500 p-4 rounded-md'>
                        <AccountBalanceWalletIcon/>
                      </Box>
                      {/* TEXT_BOX */}
                      <Box>
                        <Typography variant="h5" component='h2'  >Connect your wallet</Typography>
                        <Typography component='p'>Use trust wallet</Typography>
                      </Box>
                  </Box>
                  {/* ICOM_Two */}
                  <Box className='flex gap-2'>
                      <Box className=' flex justify-center items-center bg-linear-to-r from-cyan-500 to-purple-500 p-4 rounded-md'>
                        <AccountBalanceWalletIcon/>
                      </Box>
                      {/* TEXT_BOX */}
                      <Box>
                        <Typography variant="h5" component='h2'  >Connect your wallet</Typography>
                        <Typography component='p'>Use trust wallet</Typography>
                      </Box>
                  </Box>
                  {/* ICOM_THREE */}
                  <Box className='flex gap-2'>
                      <Box className=' flex justify-center items-center bg-linear-to-r from-cyan-500 to-purple-500 p-4 rounded-md'>
                        <AccountBalanceWalletIcon/>
                      </Box>
                      {/* TEXT_BOX */}
                      <Box>
                        <Typography variant="h5" component='h2'  >Connect your wallet</Typography>
                        <Typography component='p'>Use trust wallet</Typography>
                      </Box>
                  </Box>
              </Box>
             </Box>
          </Container>
         
        
        </section>
        {/* JOIN_US */}
        <section className="w-full h-screen py-[95px] px-0 relative ">
          <Container>
            {/* TEXT_BOX */}
            <Box className='flex flex-col items-center'>
              <Typography variant="h1" align="center" >JOIN US</Typography>
              <Typography variant="h1" align="center" gutterBottom>Discord</Typography>
              <Typography component='p' align="center" gutterBottom>Invest and manage your crypto at one place</Typography>
              <motion.svg variants={svgVariants} initial='hidden' animate='visible' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                 {/* fill="#5865F2" */}
                <motion.path variants={pathVariants} d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3c-.161.287-.35.669-.479.969a18.27 18.27 0 0 0-4.812 0 9.99 9.99 0 0 0-.484-.969 19.736 19.736 0 0 0-3.437 1.372C4.533 8.36 3.794 12.254 4.06 16.093a19.91 19.91 0 0 0 5.993 3.03c.484-.663.913-1.366 1.282-2.107a12.79 12.79 0 0 1-2.017-.969c.169-.122.333-.249.49-.382a14.3 14.3 0 0 0 12.385 0c.158.133.322.26.49.382a12.73 12.73 0 0 1-2.02.97c.37.74.798 1.443 1.283 2.106a19.86 19.86 0 0 0 6-3.03c.33-4.446-.563-8.305-2.617-11.724ZM9.75 13.5c-.967 0-1.75-.89-1.75-1.987 0-1.096.773-1.987 1.75-1.987.984 0 1.75.89 1.75 1.987 0 1.096-.766 1.987-1.75 1.987Zm4.5 0c-.967 0-1.75-.89-1.75-1.987 0-1.096.773-1.987 1.75-1.987.984 0 1.75.89 1.75 1.987 0 1.096-.766 1.987-1.75 1.987Z" fill="none" stroke="#5865F2"/>
              </motion.svg>
              <Button variant="outlined" size="lg">Join Discord</Button>
            </Box>
          </Container>
          {/* <Image src='/imgs/join-img.png' width={500} height={500} className="absolute bottom-0"/> */}
          <Image src='/imgs/media-img.png' width={500} height={500} className="absolute bottom-0 right-0"/>
        </section>
        
      </>
  );
}
