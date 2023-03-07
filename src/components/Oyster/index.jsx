import React, { useState, useEffect, useRef } from "react";
import oyster from "../../assets/images/theoyster-transparent.png";
import styles from "./styles.module.scss";

const Oyster = () => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [oysterAnim, setOysterAnim] = useState(null);
  const oystImg = useRef(null);
  const oysterImgContainer = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Mettre à jour l'état de la position de la souris
      setImagePosition({ x: e.clientX, y: e.clientY });

      // Afficher l'animation si la souris est à l'arrêt
      if (oysterAnim) {
        oysterAnim.style.display = "none";
      }

      // Si le timeout est déjà en cours, le réinitialiser
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Cacher l'animation après 2 secondes si la souris ne bouge pas
      timeoutRef.current = setTimeout(() => {
        if (oysterAnim) {
          oysterAnim.style.display = "block";
        }
      }, 2000);
    };

    if (oystImg.current) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutRef.current);
    };
  }, [oysterAnim]);

  useEffect(() => {
    setOysterAnim(oysterImgContainer.current);
  }, []);

  const oysterStyles = {
    left: `${imagePosition.x - 20}px`,
    top: `${imagePosition.y - 20}px`,
  };

  return (
    <div className={styles.main}>
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
          ref={oystImg}
        />
        <img
          className={`${styles.oyster2} ${styles.grayscale}`}
          src={oyster}
          alt="oyster2"
          style={oysterStyles}
          ref={oystImg}
        />
        {/* <div className={styles.oyster_animation} ref={oystImg}>
          <img src={oyster} alt="oyster animation" />
        </div> */}
      </div>
    </div>
  );
};

export default Oyster;
