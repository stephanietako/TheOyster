import React from "react";
import Oyster from "../../components/Oyster";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <div className={styles.oyster_image_wrapper}>
      <Oyster />
    </div>
  );
};

export default HomePage;
