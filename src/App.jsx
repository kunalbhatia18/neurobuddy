import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import SolutionOverview from "./components/SolutionOverview";
import Features from "./components/Features";
import MarketOpportunity from "./components/MarketOpportunity";
import VisionImpact from "./components/VisionImpact";
import CallToAction from "./components/CallToAction";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <Features />
      <MarketOpportunity />
      <VisionImpact />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
