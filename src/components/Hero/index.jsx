// Styles
import styles from "./style.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.sections}>
        <div className={styles.top}>
          <div className={styles.__content1_top}>
            <h1>
              <span className="italic"> Let's build </span>
              <span className="arimo">
                {" "}
                the next <br /> big thing
              </span>
              <span className="italic"> together</span>
            </h1>
          </div>
          <div className={styles.__content2}>
            <p>
              You bring the vision, we help you turn it into a brand / product
              people love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
