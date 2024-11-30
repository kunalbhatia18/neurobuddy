import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">NeuroBuddy</div>
        <div
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul
          className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={800}
              className="navbar-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="features"
              smooth={true}
              duration={800}
              className="navbar-link"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="market"
              smooth={true}
              duration={800}
              className="navbar-link"
            >
              Market
            </Link>
          </li>
          <li>
            <Link
              to="vision"
              smooth={true}
              duration={800}
              className="navbar-link"
            >
              Vision
            </Link>
          </li>
          <li>
            <Link
              to="team"
              smooth={true}
              duration={800}
              className="navbar-link"
            >
              Team
            </Link>
          </li>
          <li>
            <Link to="cta" smooth={true} duration={800} className="navbar-link">
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
