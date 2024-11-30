import "../styles/SolutionOverview.css";

const SolutionOverview = () => {
  return (
    <section className="solution-section" id="solution">
      <div className="solution-container">
        <h2 className="solution-title">
          Meet NeuroBuddy: Personalized ADHD Support
        </h2>
        <p className="solution-description">
          NeuroBuddy is an AI-powered assistant that adapts to your unique
          needs, providing real-time guidance using cutting-edge neuroscience
          and wearable technology.
        </p>
        <div className="solution-features">
          <div className="feature-card">
            <div className="icon-container">
              <span className="feature-icon">🧠</span>
            </div>
            <h3 className="feature-title">Real-Time Focus Tracking</h3>
            <p className="feature-description">
              Tracks your focus and mood patterns in real-time to provide
              actionable insights.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <span className="feature-icon">🤖</span>
            </div>
            <h3 className="feature-title">AI-Powered Guidance</h3>
            <p className="feature-description">
              Personalized nudges to help you stay on track and manage ADHD
              effectively.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <span className="feature-icon">📊</span>
            </div>
            <h3 className="feature-title">Actionable Insights</h3>
            <p className="feature-description">
              Provides easy-to-understand data trends to empower better
              decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
