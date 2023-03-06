import React, { useState, useEffect, useRef } from "react";
import oyster from "../../images/theoyster-transparent.png";
import styles from "./styles.module.scss";

const Oyster = () => {
  const oysterImgContainer = useRef(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [timeout, setTimeoutValue] = useState(null);
  // Déclarer un état pour stocker la référence de l'élément qui contient les images
  const [oysterAnim, setOysterAnim] = useState(null);

  const handleMouseMove = (e) => {
    // Mettre à jour l'état de la position de la souris
    setImagePosition({ x: e.clientX, y: e.clientY });
    oysterAnim.style.display =
      oysterAnim.style.display === "none" ? "block" : "none";
    clearTimeout(timeout);
    // Mettre à jour l'état de la fonction setTimeout
    setTimeoutValue(
      setTimeout(function () {
        oysterAnim.style.display =
          oysterAnim.style.display === "none" ? "block" : "none";
      }, 2000)
    );
  };
  // Utiliser useEffect pour définir la référence de l'élément contenant les images
  useEffect(() => {
    setOysterAnim(oysterImgContainer.current);
  }, []);

  const oysterStyles = {
    left: `${imagePosition.x - 50}px`,
    top: `${imagePosition.y - 10}px`,
  };

  return (
    <div className={styles.oyster_container} onMouseMove={handleMouseMove}>
      <div
        className={styles.oyster_image_container}
        id="oic"
        ref={oysterImgContainer}
      >
        <img
          className={styles.oyster1}
          src={oyster}
          alt="oyster1"
          style={oysterStyles}
        />
        <img
          className={`${styles.oyster2} ${styles.grayscale}`}
          src={oyster}
          alt="oyster2"
          style={oysterStyles}
        />
      </div>
    </div>
  );
};

export default Oyster;
