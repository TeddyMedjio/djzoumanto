import About from "./components/about";
import HeroSection from "./components/hero-section";
import InfiniteSlider from "./components/InfiniteSlider";
import Navbar from "./components/navbar";
import Stats from "./components/stats";

export default function Home() {
  return (
    <div>
      <span className="hidden md:block absolute top-30 -left-10 h-[500px] w-[500px] bg-secondary/5 rounded-full blur-[100px] -z-50"></span>
      <span className="hidden md:block absolute top-60 -right-10 h-[500px] w-[500px] bg-secondary/5 rounded-full blur-[100px] -z-50"></span>
      <Navbar />
      <HeroSection />
      <Stats />
      <About />
      <InfiniteSlider />
    </div>
  );
}
