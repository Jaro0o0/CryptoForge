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
        <section className="py-[95px] px-0">
          <Container>
            <Typography variant="h1" component='h3' align="center" gutterBottom>Today's Crypto Prices</Typography>
            <Table/>
          </Container>
        </section>
      </>
  );
}
