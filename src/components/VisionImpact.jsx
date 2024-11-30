import "../styles/VisionImpact.css";

const VisionImpact = () => {
  return (
    <section className="vision-section" id="vision">
      <div className="vision-container">
        <h2 className="vision-title">Our Vision: Transforming ADHD Care</h2>
        <p className="vision-description">
          At NeuroBuddy, we believe that ADHD should never be a barrier to
          success. Our mission is to empower individuals with ADHD to harness
          their unique strengths, overcome challenges, and lead fulfilling
          lives. With cutting-edge AI and neuroscience, we’re redefining what’s
          possible.
        </p>
        <div className="impact-statement">
          <blockquote className="impact-quote">
            <q>
              NeuroBuddy is not just a product—it’s a movement to empower and
              transform lives.
            </q>
          </blockquote>
        </div>
        <div className="vision-impact-grid">
          <div className="impact-card">
            <span className="impact-icon">🌍</span>
            <h3 className="impact-title">Global Reach</h3>
            <p className="impact-text">
              Making ADHD care accessible to millions around the world, breaking
              barriers in healthcare.
            </p>
          </div>
          <div className="impact-card">
            <span className="impact-icon">💡</span>
            <h3 className="impact-title">Innovation at Heart</h3>
            <p className="impact-text">
              Leveraging AI and neuroscience to create solutions that adapt and
              evolve with users.
            </p>
          </div>
          <div className="impact-card">
            <span className="impact-icon">❤️</span>
            <h3 className="impact-title">Empathy-Driven Design</h3>
            <p className="impact-text">
              Designed with empathy and care, putting the needs of individuals
              with ADHD first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionImpact;
