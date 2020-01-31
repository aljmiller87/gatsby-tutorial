import React, { useState } from "react";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import TransitionLink from "gatsby-plugin-transition-link";
import TransitionWrapper from "./TransitionWrapper";

import navStyles from "../css/navbar.module.css";
import { FaAlignRight } from "react-icons/fa";
import links from "../constants/links";
import socialIcons from "../constants/social-icons";
import logo from "../images/logo.svg";

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.navCenter}>
        <div className={navStyles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button
            type="button"
            className={navStyles.logoBtn}
            onClick={toggleNav}
          >
            <FaAlignRight className={navStyles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${navStyles.navLinks} ${navStyles.showNav}`
              : `${navStyles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <TransitionWrapper path={item.path} text={item.text} />
              </li>
            );
          })}
        </ul>
        <div className={navStyles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.url}>
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

// Navbar.propTypes = {};

export default Navbar;
