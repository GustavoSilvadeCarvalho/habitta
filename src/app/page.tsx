import Featured from "@/components/Featured/Featured";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import WhySection from "@/components/WhySection/whySection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Featured />
      <WhySection />
    </div>
  );
}
