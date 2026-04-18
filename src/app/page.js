"use client" 

import { Container,Box } from "@mui/system";
import Image from "next/image";
import { Typography } from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import HeroInner from "./components/HeroInner/HeroInner";
import Table from "./components/Table/Table.jsx";
import JoinUs from "./components/JoinUs/JoinUs";

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
             <Box className='grid grid-cols-3 gap-8'>
              {/* COL_LEFT */}
              <Box className='flex flex-col justify-between gap-10'>
                  {/* ICON_ONE */}
                  <Box className='flex gap-4'>
                      <Box className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-xl shadow-lg shadow-cyan-500/20'>
                        <AccountBalanceWalletIcon className="text-white" />
                      </Box>
                      <Box>
                        <Typography variant="h5" component='h2' className="font-bold">Connect your wallet</Typography>
                        <Typography component='p' className="text-gray-400">Use trust wallet</Typography>
                      </Box>
                  </Box>
                  {/* ICON_Two */}
                  <Box className='flex gap-4'>
                      <Box className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-xl shadow-lg shadow-cyan-500/20'>
                        <AccountBalanceWalletIcon className="text-white" />
                      </Box>
                      <Box>
                        <Typography variant="h5" component='h2' className="font-bold">Connect your wallet</Typography>
                        <Typography component='p' className="text-gray-400">Use trust wallet</Typography>
                      </Box>
                  </Box>
                  {/* ICON_THREE */}
                  <Box className='flex gap-4'>
                      <Box className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-xl shadow-lg shadow-cyan-500/20'>
                        <AccountBalanceWalletIcon className="text-white" />
                      </Box>
                      <Box>
                        <Typography variant="h5" component='h2' className="font-bold">Connect your wallet</Typography>
                        <Typography component='p' className="text-gray-400">Use trust wallet</Typography>
                      </Box>
                  </Box>
              </Box>

              {/* IMG_BOX */}
              <Box className='relative flex justify-center items-center' sx={{ height: '400px' }}>
                <Image src='/imgs/why-img.png' alt="Why choose us" fill style={{ objectFit: "contain" }} className="hover:scale-105 transition-transform duration-500"/>
              </Box>

              {/* COL_RIGHT */}
              <Box className='flex flex-col justify-between gap-10'> 
                  {/* ICON_ONE */}
                  <Box className='flex gap-4'>
                      <Box className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-xl shadow-lg shadow-cyan-500/20'>
                        <AccountBalanceWalletIcon className="text-white" />
                      </Box>
                      <Box>
                        <Typography variant="h5" component='h2' className="font-bold">Connect your wallet</Typography>
                        <Typography component='p' className="text-gray-400">Use trust wallet</Typography>
                      </Box>
                  </Box>
                  {/* ICON_Two */}
                  <Box className='flex gap-4'>
                      <Box className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-xl shadow-lg shadow-cyan-500/20'>
                        <AccountBalanceWalletIcon className="text-white" />
                      </Box>
                      <Box>
                        <Typography variant="h5" component='h2' className="font-bold">Connect your wallet</Typography>
                        <Typography component='p' className="text-gray-400">Use trust wallet</Typography>
                      </Box>
                  </Box>
                  {/* ICON_THREE */}
                  <Box className='flex gap-4'>
                      <Box className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-xl shadow-lg shadow-cyan-500/20'>
                        <AccountBalanceWalletIcon className="text-white" />
                      </Box>
                      <Box>
                        <Typography variant="h5" component='h2' className="font-bold">Connect your wallet</Typography>
                        <Typography component='p' className="text-gray-400">Use trust wallet</Typography>
                      </Box>
                  </Box>
              </Box>
             </Box>
          </Container>
        </section>

        {/* JOIN_US Component */}
        <JoinUs />
      </>
  );
}
