// import React, { useState, useEffect, useRef } from "react";
// import oyster from "../../images/theoyster-transparent.png";
// import styles from "./styles.module.scss";

// const Oyster = () => {
//   const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
//   const [timeout, setTimeoutValue] = useState(null);
//   const [oysterAnim, setOysterAnim] = useState(null);
//   const oystImg = useRef(null);
//   const oysterImgContainer = useRef(null);
//   const positionRef = useRef({
//     mouseX: 0,
//     mouseY: 0,
//     destinationX: 0,
//     destinationY: 0,
//     distanceX: 0,
//     distanceY: 0,
//     key: -1,
//   });

//   useEffect(() => {
//     document.addEventListener("mousemove", (event) => {
//       const { clientX, clientY } = event;

//       const mouseX = clientX;
//       const mouseY = clientY;

//       positionRef.current.mouseX = mouseX - oystImg.current.clientWidth / 2;
//       positionRef.current.mouseY = mouseY - oystImg.current.clientHeight / 2;
//     });
//     return () => {};
//   }, []);

//   useEffect(() => {
//     const followMouse = () => {
//       positionRef.current.key = requestAnimationFrame(followMouse);

//       const {
//         mouseX,
//         mouseY,
//         destinationX,
//         destinationY,
//         distanceX,
//         distanceY,
//       } = positionRef.current;

//       if (!destinationX || !destinationY) {
//         positionRef.current.destinationX = mouseX;
//         positionRef.current.destinationY = mouseY;
//       } else {
//         positionRef.current.distanceX = (mouseX - destinationX) * 0.5;
//         positionRef.current.distanceY = (mouseY - destinationX) * 0.5;

//         if (
//           Math.abs(positionRef.current.distanceX) +
//             Math.abs(positionRef.current.distanceY) <
//           0.1
//         ) {
//           positionRef.current.destinationX = mouseX;
//           positionRef.current.destinationY = mouseY;
//         } else {
//           positionRef.current.destinationX += distanceX;
//           positionRef.current.destinationY += distanceY;
//         }
//       }
//       if (oysterImgContainer.current) {
//         oysterImgContainer.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
//       }
//     };
//     followMouse();
//   }, []);

//   const handleMouseMove = (e) => {
//     // Mettre à jour l'état de la position de la souris
//     setImagePosition({ x: e.clientX, y: e.clientY });
//     if (oysterAnim) {
//       oysterAnim.style.display =
//         oysterAnim.style.display === "none" ? "block" : "none";
//     }
//     clearTimeout(timeout);
//     // Mettre à jour l'état de la fonction setTimeout
//     setTimeoutValue(
//       setTimeout(function () {
//         if (oysterAnim) {
//           oysterAnim.style.display =
//             oysterAnim.style.display === "none" ? "block" : "none";
//         }
//       }, 2000)
//     );
//   };
//   // Utiliser useEffect pour définir la référence de l'élément contenant les images
//   useEffect(() => {
//     setOysterAnim(oysterImgContainer.current);
//   }, []);

//   const oysterStyles = {
//     left: `${imagePosition.x - 20}px`,
//     top: `${imagePosition.y - 20}px`,
//   };

//   return (
//     <div className={styles.main}>
//       <div
//         className={styles.oyster_image_container}
//         id="oic"
//         onMouseMove={handleMouseMove}
//         ref={oystImg}
//       >
//         <img
//           className={styles.oyster1}
//           src={oyster}
//           alt="oyster1"
//           style={oysterStyles}
//         />
//         <img
//           className={`${styles.oyster2} ${styles.grayscale}`}
//           src={oyster}
//           alt="oyster2"
//           style={oysterStyles}
//         />
//       </div>
//     </div>
//   );
// };

// export default Oyster;
import React, { useState, useEffect, useRef } from "react";
import oyster from "../../images/theoyster-transparent.png";
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
