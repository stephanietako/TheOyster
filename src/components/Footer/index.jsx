import React from "react";
import EmailInput from "../Input";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_content}>
      <div className={styles.__form}>
        <EmailInput />
      </div>
      <div className={styles.network}>
        <p>follow our journey : </p>
        <p>twitter</p>
        <p>instagram</p>
      </div>
    </div>
  );
};

export default Footer;
