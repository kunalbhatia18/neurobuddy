import { Link } from "react-scroll";
import "../styles/CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-container">
        <h2 className="cta-title">Join Us in Transforming ADHD Care</h2>
        <p className="cta-description">
          Be a part of a movement that’s redefining ADHD care through
          innovation, empathy, and empowerment. Let’s work together to create a
          world where ADHD is no longer a barrier but a strength.
        </p>
        <div className="cta-buttons">
          <Link to="team" smooth={true} duration={800} className="btn-primary">
            Contact Us
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={800}
            className="btn-secondary"
          >
            Request Pitch Deck
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
