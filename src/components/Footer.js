import React from "react";
import { socialIcons } from "../data";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul className="social-icons">
          {socialIcons.map((item) => {
            const { id, href, icon } = item;
            return (
              <li key={id}>
                <a
                  href={href}
                  className="social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        {/* <p>&copy; <span id="date"></span> Cherry Web Dev. All rights reserved.</p> */}
      </footer>
    </>
  );
};

export default Footer;
