import React from "react";
// Styles
import styles from "./styles.module.scss";
import logoImg from "../../assets/logo/oyster.png";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.nav_container}>
        <div className={styles.__logo}>
          <img src={logoImg} alt="logo The Oyster" />
          <div className={styles.__left}>
            <p>LAB</p>
          </div>
        </div>

        <div className={styles.__links}>
          <ul>
            <li>
              <a href="/"> GET IN TOUCH</a>
            </li>
            <li>
              <a href="/"> THE OYSTER GALLERY</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
