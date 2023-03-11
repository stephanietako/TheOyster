// Styles
import styles from "./styles.module.scss";

const References = ({ refs }) => {
  return (
    <section className={styles.references} id="ref">
      <div className={styles.sections}>
        <div className={styles.ref}>
          <h2 className={styles.__title}>ref</h2>
          <div className={styles.__box}>
            {refs &&
              refs.map((ref, index) => {
                return (
                  <div
                    key={`gallery-ref-${index}`}
                    className={styles.__ref_box}
                  >
                    {ref}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
