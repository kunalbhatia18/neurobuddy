import Link from "react-scroll/modules/components/Link";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">NeuroBuddy</h1>
        <p className="hero-tagline">Thrive with ADHD. Simplified.</p>
        <p className="hero-subtitle">
          Revolutionizing ADHD care with AI-driven neuroscience insights.
        </p>
        <div className="hero-buttons">
          <Link
            to="features"
            smooth={true}
            duration={800}
            className="btn-primary"
          >
            Learn More
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={800}
            className="btn-secondary"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
