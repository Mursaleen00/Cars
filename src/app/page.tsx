import BrandCard from "@/components/BrandCard";
import FeaturedLuxuryCars from "@/components/FeaturedLuxuryCars";
import Future from "@/components/Future";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopView from "@/components/TopView";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Future />
      <BrandCard />
      <TopView />
      <FeaturedLuxuryCars />
    </>
  );
}
