import React from "react";
// Styles
import styles from "./styles.module.scss";
import logoImg from "../../assets/logo/TheOyster_logo_inline-white.png";

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.__box}>
        <div className={styles.__left}>
          <img src={logoImg} alt="logo The Oyster" />
          <p>LAB</p>
        </div>
        <div className={styles.__right}>
          <p>GET IN TOUCH</p>
          <p>THE OYSTER GALLERY</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
