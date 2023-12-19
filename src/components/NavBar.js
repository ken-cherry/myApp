import React from "react";
import { useState, useRef } from "react";
import { pageLinks } from "../data";
import { socialIcons } from "../data";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height + 10}px`
      : "0px",
  };
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <i className="fa-solid fa-code"></i>
            <button className="nav-toggle" onClick={toggleLinks}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className="links-container"
            ref={linksContainerRef}
            style={linkStyles}
          >
            <ul className="links" ref={linksRef}>
              {pageLinks.map((item) => {
                const { id, href, text } = item;
                return (
                  <li key={id}>
                    <a href={href}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* social icons */}
          <ul className="nav-social-icons">
            {socialIcons.map((item) => {
              const { id, href, icon } = item;
              return (
                <li key={id}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* <div id="top-page"></div>
      <span className="nav-btn" id="nav-btn">
        <i className="fas fa-bars"></i>
      </span>
      <nav className="navbar" id="navbar">
        <div className="navbar-header">
          <span className="nav-close" id="nav-close">
            <i className="fas fa-times"></i>
          </span>
        </div>
        <ul className="nav-items">
          {pageLinks.map((item) => {
            const { id, href, text } = item;
            return (
              <li key={item.id}>
                <a href={item.href} className="nav-link"></a>
              </li>
            );
          })}
        </ul>
      </nav> */}
    </>
  );
};

export default NavBar;
