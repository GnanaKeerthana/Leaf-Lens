import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo-removebg-preview1.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu} className="logo-link">
            <img src={logo} alt="App Logo" className="logo-img" />
            <span className="logo-name">Leaf Lens</span>
          </Link>
        </div>
        <div className={`nav-links ${isMobile ? "mobile" : ""}`}>
          <ul>
            <li>
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/check" className="nav-link" onClick={closeMobileMenu}>
                Check
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className="hamburger"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/** Internal CSS **/
const styleSheet = document.createElement("style");
styleSheet.innerText = `
.navbar {
  background-color: #8aea5e;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-img {
  max-height: 50px;
  width: auto;
  border-radius: 8px;
  margin-right: 10px;
}

.logo-name {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2e7d0d;
  font-family: 'Arial', sans-serif;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links ul {
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-link {
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #428b1a;
}

.mobile-menu-icon {
  display: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger {
  width: 25px;
  height: 3px;
  background-color: black;
  position: relative;
  transition: background-color 0.3s ease;
}

.hamburger:before,
.hamburger:after {
  content: "";
  width: 25px;
  height: 3px;
  background-color: black;
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
}

.hamburger:before {
  top: -8px;
}

.hamburger:after {
  top: 8px;
}

.mobile .hamburger {
  background-color: transparent;
}

.mobile .hamburger:before {
  top: 0;
  transform: rotate(45deg);
}

.mobile .hamburger:after {
  top: 0;
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #8aea5e;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .nav-links.mobile {
    transform: translateX(0);
  }

  .nav-links ul {
    flex-direction: column;
    gap: 2rem;
  }

  .mobile-menu-icon {
    display: block;
  }

  .nav-link {
    font-size: 2rem;
  }

  .nav-link:hover {
    color: #428b1a;
  }
}
`;

document.head.appendChild(styleSheet);
