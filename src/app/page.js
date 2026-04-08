"use client" 

import { Container,Box } from "@mui/system";
import Image from "next/image";
import Header from "./components/Header/Header";
import { Typography } from "@mui/material";
import { Button }from "@mui/material";
import ETH from "./components/ETH/ETH";



import Table from "./components/Table/Table.jsx";
import { Canvas } from "@react-three/fiber";
import { Logo } from "./components/Logo/Ethereum_logo";


// Icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


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
        
      </>
  );
}
