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
import SecondHeader from "./components/SecondHeader/SecondHeader";
import HeroInner from "./components/HeroInner/HeroInner";


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
        <HeroInner/>
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
            <Box className='flex flex-col items-center gap-5'>
              {/* TEXT_BOX */}
              <Box>
                <Typography variant="h1" align="center" >JOIN US</Typography>

                <Box className='flex'>
                  <Typography variant="h1" align="center" gutterBottom>Discord</Typography>
                      {/* ETHERIUM_3D */}
                  <Canvas>
                    <ETH/>
                  </Canvas>
              </Box>

                <Typography component='p' align="center" gutterBottom>Invest and manage your crypto at one place</Typography>
              </Box>
              <Button variant="outlined" size="lg">Join Discord</Button>
            </Box>
          </Container>
           
              {/* SVGS */}
              <Box className='flex gap-6 mb-10 absolute bottom-[20%] left-1/2 -translate-x-1/2'>
                  {/* DISCORD_SVG */}
                  <Box className='flex justify-center items-center bg-linear-to-r from-cyan-500 to-purple-500 p-3 rounded-full'>
                    <motion.svg variants={svgVariants} initial='hidden' animate='visible'  xmlns="http://www.w3.org/2000/svg" className="w-10 h-10"  fill="none" stroke="white"   viewBox="0 0 16 16">
                      <motion.path  variants={pathVariants} d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                    </motion.svg>
                  </Box>
                  {/* FACEBOOK_SVG */}
                  <Box className='flex justify-center items-center bg-linear-to-r from-cyan-500 to-purple-500 p-3 rounded-full'>
                    <motion.svg variants={svgVariants} initial='hidden' animate='visible'   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                      <motion.path variants={pathVariants}  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="none" stroke="white"/>
                    </motion.svg>
                  </Box>
                  {/* X_SVG */}
                  <Box className='flex justify-center items-center bg-linear-to-r from-cyan-500 to-purple-500 p-3 rounded-full'>
                    <motion.svg variants={svgVariants} initial='hidden' animate='visible'  xmlns="http://www.w3.org/2000/svg"  fill="none" stroke="white"  viewBox="0 0 16 16" className="w-10 h-10">
                      <motion.path variants={pathVariants}  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </motion.svg>
                  </Box>
              </Box>
              <Typography component='p'>Privacy</Typography>
              <Typography component='p'>Terms of use</Typography>

          {/* <Image src='/imgs/join-img.png' width={500} height={500} className="absolute bottom-0"/> */}
          <Image src='/imgs/media-img.png' width={500} height={500} className="absolute bottom-0 right-0"/>
          <Image src='/imgs/undraw_bitcoin_q7r1.png' width={500} height={500} className="absolute bottom-0 left-0"/>
          
        </section>
        
      </>
  );
}
