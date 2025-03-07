'use client'

import ContactSection from "@/components/ContactSection/ContactSection";
import Featured from "@/components/Featured/Featured";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TestemonialSection from "@/components/TestemonialSection/TestemonialSection";
import WhySection from "@/components/WhySection/whySection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Featured />
      <WhySection />
      <TestemonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
