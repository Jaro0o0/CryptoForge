"use client";

import { useSyncExternalStore } from "react";
import { Box, Container, Typography } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SecurityIcon from "@mui/icons-material/Security";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LayersIcon from "@mui/icons-material/Layers";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Canvas } from "@react-three/fiber";
import ETH from "../ETH/ETH";
import FeatureItem from "../common/FeatureItem/FeatureItem";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const whyData = [

  {
    title: "Connect your wallet",
    desc: "Use Trust Wallet, Metamask or any other wallet to connect to our platform.",
    icon: <AccountBalanceWalletIcon className="text-white" />,
  },
  {
    title: "Secure Storage",
    desc: "We prioritize your security with industry-leading encryption and cold storage.",
    icon: <SecurityIcon className="text-white" />,
  },
  {
    title: "Fast Transactions",
    desc: "Enjoy lightning-fast processing for all your crypto trades and transfers.",
    icon: <FlashOnIcon className="text-white" />,
  },
  {
    title: "Market Analysis",
    desc: "Get real-time data and expert insights to make informed investment decisions.",
    icon: <TrendingUpIcon className="text-white" />,
  },
  {
    title: "Multi-Chain Support",
    desc: "Swap and manage assets across multiple blockchains seamlessly.",
    icon: <LayersIcon className="text-white" />,
  },
  {
    title: "24/7 Support",
    desc: "Our dedicated support team is always available to help you with any issues.",
    icon: <QuestionAnswerIcon className="text-white" />,
  },
];

const WhyChooseUs = () => {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <>
      <Container>

      {/* TEXT_BOX */}
      <div>
          {/* SUBHEADING */}
           <span className=" inline-block text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-6">
              Why choose us
          </span>
          {/* HEAADING */}
        <Typography
          variant="h2"
          component="h3"
          
          className="font-black text-white mb-12 md:mb-16 uppercase tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
       
          Discover<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"> our features</span>
        </Typography>
      </div>

        <Box className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-center">
          {/* Left Column */}
          <Box className="flex flex-col gap-10 md:gap-12 order-2 lg:order-1">
            {whyData.slice(0, 3).map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </Box>

          {/* 3D Model Box */}
          <Box className="relative flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2">
            <Box className="absolute w-[80%] h-[80%] bg-purple-500/20 blur-[60px] md:blur-[100px] rounded-full animate-pulse" />
            <Box className="w-full h-full z-10">
              {mounted && (
                <Canvas camera={{ position: [0, 0, 7], fov: 90 }}>
                  <ETH />
                </Canvas>
              )}
            </Box>
          </Box>

          {/* Right Column */}
          <Box className="flex flex-col gap-10 md:gap-12 order-3">
            {whyData.slice(3).map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default WhyChooseUs;
