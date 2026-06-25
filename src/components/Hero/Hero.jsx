"use client"

import React from 'react';
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import HeroInner from "./HeroInner/HeroInner";
import { useCoinData } from '@/hooks/useCoinData';

const Hero = () => {
  const { data } = useCoinData();

  const btcData = data?.find(coin => coin.id === 'bitcoin');
  const ethData = data?.find(coin => coin.id === 'ethereum');
  const solData = data?.find(coin => coin.id === 'solana');

  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/30 rounded-full blur-[80px] md:blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-5%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/30 rounded-full blur-[80px] md:blur-[130px] pointer-events-none"
      />

      <Container maxWidth="lg" className="relative z-10 pt-10 md:pt-20">
        <HeroInner btcData={btcData} ethData={ethData} solData={solData} />
      </Container>
    </>
  );
};

export default Hero;
