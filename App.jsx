import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import LegacySection from "./components/LegacySection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <LegacySection />
      <FooterSection />
    </div>
  );
}

export default App;
