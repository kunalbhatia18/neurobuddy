import "../styles/Features.css";

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <h2 className="features-title">Why NeuroBuddy Stands Out</h2>
        <p className="features-description">
          NeuroBuddy offers innovative features tailored to help you thrive with
          ADHD.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-container">
              <span className="feature-icon">⚡</span>
            </div>
            <h3 className="feature-heading">Real-Time Tracking</h3>
            <p className="feature-text">
              Monitor focus and stress patterns as they happen, enabling instant
              insights.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <span className="feature-icon">📈</span>
            </div>
            <h3 className="feature-heading">Personalized Insights</h3>
            <p className="feature-text">
              Get actionable advice tailored to your unique needs and daily
              challenges.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <span className="feature-icon">🛠</span>
            </div>
            <h3 className="feature-heading">Customizable Support</h3>
            <p className="feature-text">
              Adapt NeuroBuddy to fit your lifestyle, empowering you to take
              control.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <span className="feature-icon">🌟</span>
            </div>
            <h3 className="feature-heading">Evidence-Based Design</h3>
            <p className="feature-text">
              Built with cutting-edge neuroscience to ensure real, measurable
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
