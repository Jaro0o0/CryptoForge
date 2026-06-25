"use client" 

import Section from "@/components/common/Section/Section";
import Hero from "../components/Hero/Hero";
import CryptoPricesTable from "@/components/CryptoPricesTable/CryptoPricesTable";
import AboutUs from "../components/AboutUs/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import MobileApp from "../components/MobileApp/MobileApp";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section id="Home" className="w-full min-h-screen flex items-center py-20 md:py-0">
        <Hero/>
      </Section>


      {/* ABOUT_US  */}
      <Section id="About Us" className="w-full min-h-screen py-20 md:py-32 px-0 flex flex-col justify-center text-white">
        <AboutUs />
      </Section>


      {/* TABLE */}
      <Section id="Market" className="px-0">
        <CryptoPricesTable/>
      </Section>



      {/* MOBILE */}
      <Section className="py-24">
        <MobileApp/>
      </Section>

      {/* CHOOSE_US */}
      <Section id="Choose Us" className="px-0">
        <WhyChooseUs />
      </Section>

   
    </>
  );
}
