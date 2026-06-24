"use client" 

import { Container, Typography } from "@mui/material";

import HeroInner from "../components/HeroInner/HeroInner";
import CryptoPricesTable from "@/components/CryptoPricesTable/CryptoPricesTable";
import JoinUs from "../components/JoinUs/JoinUs";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import MobileApp from "../components/MobileApp/MobileApp";




export default function Home() {
  return (
      <>
        <HeroInner/>
        
        {/* Table Section */}
        <CryptoPricesTable/>
  

        {/* WHY */}
        <WhyChooseUs />

        <MobileApp/>

        {/* JOIN_US Component */}
        <JoinUs />
      </>
  );
}
