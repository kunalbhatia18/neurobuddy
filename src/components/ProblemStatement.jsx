import "../styles/ProblemStatement.css";

const ProblemStatement = () => {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-container">
        <h2 className="problem-title">The ADHD Struggle is Real</h2>
        <p className="problem-description">
          Over <span className="highlight">300M people globally</span> live with
          ADHD, struggling with focus, stress, and emotional regulation.
          Traditional solutions—medications, therapy, and apps—are often
          inaccessible, generic, or come with significant side effects.
        </p>
        <div className="problem-points">
          <div className="problem-point">
            <div className="icon-container">
              <span className="icon">💊</span>
            </div>
            <p>Medications with side effects</p>
          </div>
          <div className="problem-point">
            <div className="icon-container">
              <span className="icon">💰</span>
            </div>
            <p>Expensive and inaccessible therapy</p>
          </div>
          <div className="problem-point">
            <div className="icon-container">
              <span className="icon">📱</span>
            </div>
            <p>Generic apps that fail to adapt</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
