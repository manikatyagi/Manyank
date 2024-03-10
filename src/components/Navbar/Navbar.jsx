import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setNavbarFixed(false); // Remove fixed property
    setMenuOpen(false); // Close the menu
  };

  return (
    <nav className={`${styles.navbar} ${navbarFixed ? styles.fixed : styles.relative}`}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={toggleMenu}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        >
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#Skills" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#Experience" onClick={handleLinkClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#education" onClick={handleLinkClick}>
              Education
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
