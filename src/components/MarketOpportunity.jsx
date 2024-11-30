import "../styles/MarketOpportunity.css";

const MarketOpportunity = () => {
  return (
    <section className="market-section" id="market">
      <div className="market-container">
        <h2 className="market-title">A $10B Opportunity to Transform Lives</h2>
        <p className="market-description">
          ADHD awareness is rising globally, creating a growing demand for
          effective, accessible solutions. NeuroBuddy is poised to disrupt the
          ADHD tech space, offering unparalleled personalization and support.
        </p>
        <div className="market-stats">
          <div className="stat-card">
            <h3 className="stat-value">$10B+</h3>
            <p className="stat-description">Global ADHD market size</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-value">300M+</h3>
            <p className="stat-description">
              People living with ADHD worldwide
            </p>
          </div>
          <div className="stat-card">
            <h3 className="stat-value">7% CAGR</h3>
            <p className="stat-description">Expected market growth annually</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
