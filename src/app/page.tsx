import FindSection from "@/components/FindSection/FindSection";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <FindSection />
    </div>
  );
}
