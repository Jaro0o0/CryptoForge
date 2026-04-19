"use client" 

import { Container } from "@mui/system";
import { Typography } from "@mui/material";

import HeroInner from "./components/HeroInner/HeroInner";
import MarketTable from "./components/MarketTable/MarketTable";
import JoinUs from "./components/JoinUs/JoinUs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
      <>
        <HeroInner/>
        
        {/* Table Section */}
        <MarketTable />

        {/* WHY */}
        <WhyChooseUs />

        {/* JOIN_US Component */}
        <JoinUs />
      </>
  );
}
