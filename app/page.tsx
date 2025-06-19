import About from "./components/about";
import Button from "./components/button";
import Contact from "./components/contact";
import HeroSection from "./components/hero-section";
import InfiniteSlider from "./components/InfiniteSlider";
import Playlists from "./components/playlists";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Stats />
      <About />
      <InfiniteSlider />
      <Playlists />
      <Testimonials />
      <Contact />
      <Button />
    </div>
  );
}
