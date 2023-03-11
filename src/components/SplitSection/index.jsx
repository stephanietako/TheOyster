// Styles
import styles from "./styles.module.scss";

const SplitSection = ({ title, paragraph, size }) => {
  if (size === undefined) size = "full";
  return (
    <section
      className={`${styles.split_section} ${
        size === "full" ? styles.full : styles.half
      }`}
    >
      <div className={styles.sections}>
        <div className={styles.mindset}>
          <div className={styles.__box}>
            <div className={styles.__box_left}>
              <h2>{title}</h2>
            </div>
            <div className={styles.__box_right}>
              <p>{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
