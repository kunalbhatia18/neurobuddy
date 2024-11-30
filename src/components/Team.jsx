import "../styles/Team.css";

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <h2 className="team-title">Who We Are</h2>
        <p className="team-description">
          Behind NeuroBuddy is a passionate group of innovators, researchers,
          and problem-solvers dedicated to transforming ADHD care.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <div
              className="member-photo"
              style={{ backgroundImage: "url('profile-pic.png')" }}
            ></div>
            <h3 className="member-name">Kunal Bhatia</h3>
            <p className="member-role">Founder & Innovator</p>
            <p className="member-bio">
              Passionate about neuroscience and problem-solving, Kunal founded
              NeuroBuddy to empower individuals with ADHD to thrive. He&apos;s
              driven by curiosity and a vision to create impactful,
              human-centered technology.
            </p>
            <a
              href="https://www.linkedin.com/in/kunalbhatia18"
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          {/* <div className="team-member">
            <div
              className="member-photo"
              style={{ backgroundImage: "url('path-to-photo2.jpg')" }}
            ></div>
            <h3 className="member-name">Jane Smith</h3>
            <p className="member-role">CTO</p>
            <p className="member-bio">
              An AI and neuroscience expert with a mission to make technology
              empathetic.
            </p>
            <a
              href="https://www.linkedin.com/in/janesmith"
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="team-member">
            <div
              className="member-photo"
              style={{ backgroundImage: "url('path-to-photo3.jpg')" }}
            ></div>
            <h3 className="member-name">Mark Taylor</h3>
            <p className="member-role">Lead Developer</p>
            <p className="member-bio">
              A tech wizard with a passion for creating seamless user
              experiences.
            </p>
            <a
              href="https://www.linkedin.com/in/marktaylor"
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div> */}
        </div>
      </div>

      {/* Advisors Section */}
      {/* <div className="advisors-container">
        <h2 className="advisors-title">Advisors</h2>
        <div className="advisors-grid">
          <div className="advisor-card">
            <div
              className="advisor-photo"
              style={{ backgroundImage: "url('path-to-advisor1.jpg')" }}
            ></div>
            <h3 className="advisor-name">Dr. Sarah Lee</h3>
            <p className="advisor-role">Clinical Psychologist</p>
            <p className="advisor-bio">
              Renowned expert in ADHD research and therapeutic practices.
            </p>
            <a
              href="https://www.linkedin.com/in/sarahlee"
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="advisor-card">
            <div
              className="advisor-photo"
              style={{ backgroundImage: "url('path-to-advisor2.jpg')" }}
            ></div>
            <h3 className="advisor-name">Michael Brown</h3>
            <p className="advisor-role">AI Consultant</p>
            <p className="advisor-bio">
              Industry leader in AI innovations with a focus on healthcare
              solutions.
            </p>
            <a
              href="https://www.linkedin.com/in/michaelbrown"
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Team;
