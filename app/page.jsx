import Hero from "@/components/home/Hero";
import SearchConverter from "@/components/home/SearchConverter";
import PopularTools from "@/components/home/PopularTools";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import SupportedFormats from "@/components/home/SupportedFormats";
import HowItWorks from "@/components/home/HowItWorks";
import SecuritySection from "@/components/home/SecuritySection";
import Statistics from "@/components/home/Statistics";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

import StructuredData from "./StructuredData";
import FAQSchema from "./FAQSchema";
import BreadcrumbSchema from "./BreadcrumbSchema";

export default function Home() {
  return (
    <>
      <StructuredData />
      <FAQSchema />
      <BreadcrumbSchema />

      <Hero />
      <SearchConverter />
      <PopularTools />
      <Categories />
      <Features />
      <SupportedFormats />
      <HowItWorks />
      <SecuritySection />
      <Statistics />
      <FAQ />
      <CTA />
    </>
  );
}