import React from "react";
import "./Header.css";
import image from "../images/image4.jpeg";
import { useState } from "react";

const Header = () => {
  // when header scroll at top
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  //toggle menu
  const [Mobile, setMobile] = useState(false);
  return (
    <React.Fragment>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={image} alt="" />
            <h3>
              <i className="fa fa-code" aria-hidden="true">
                Mayadihno
              </i>
            </h3>
          </div>
          <div className="navlink">
            {/* <ul className="link f_flex uppercase"> */}
            <ul
              className={Mobile ? "nav-link-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#client">client</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="homeBtn">HIRE ME</button>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times close homeBtn" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-bars open" aria-hidden="true"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
