"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SecurityIcon from "@mui/icons-material/Security";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LayersIcon from "@mui/icons-material/Layers";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

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

const FeatureItem = ({ title, desc, icon }) => (
  <Box className="flex gap-4 group">
    <Box className="flex h-fit justify-center items-center bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-xl shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </Box>
    <Box>
      <Typography variant="h5" component="h2" className="font-bold text-white mb-1">
        {title}
      </Typography>
      <Typography component="p" className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </Typography>
    </Box>
  </Box>
);

const WhyChooseUs = () => {
  return (
    <section className="py-[95px] px-0 bg-gray-950">
      <Container>
        <Typography
          variant="h2"
          component="h3"
          align="center"
          className="font-bold text-white mb-16 uppercase tracking-wider"
        >
          Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Choose Us</span>
        </Typography>

        <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <Box className="flex flex-col gap-12 order-2 md:order-1">
            {whyData.slice(0, 3).map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </Box>

          {/* Image Box */}
          <Box className="relative flex justify-center items-center h-[300px] md:h-[500px] order-1 md:order-2">
            <Box className="absolute w-[80%] h-[80%] bg-purple-500/20 blur-[100px] rounded-full" />
            <Image
              src="/imgs/why-img.png"
              alt="Why choose us"
              fill
              style={{ objectFit: "contain" }}
              className="hover:scale-105 transition-transform duration-700 z-10"
            />
          </Box>

          {/* Right Column */}
          <Box className="flex flex-col gap-12 order-3">
            {whyData.slice(3).map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
