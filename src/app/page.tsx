import Banner from "@/components/Banner";
import BrandCard from "@/components/BrandCard";
import FeaturedLuxuryCars from "@/components/FeaturedLuxuryCars";
import Future from "@/components/Future";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SpecialOffer from "@/components/SpecialOffer";
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
      <SpecialOffer />
      <Banner />
    </>
  );
}
