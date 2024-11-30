import Link from "react-scroll/modules/components/Link";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-logo">NeuroBuddy</p>
        <div className="footer-links">
          <Link
            to="features"
            smooth={true}
            duration={800}
            className="footer-link"
          >
            Features
          </Link>
          <Link
            to="market"
            smooth={true}
            duration={800}
            className="footer-link"
          >
            Market Opportunity
          </Link>
          <Link
            to="vision"
            smooth={true}
            duration={800}
            className="footer-link"
          >
            Vision
          </Link>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} NeuroBuddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
