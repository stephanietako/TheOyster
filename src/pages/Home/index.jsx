import React from "react";
// import Oyster from "../../components/Oyster";
// Styles
import styles from "./styles.module.scss";
// Images
import schema from "../../assets/images/schema.png";

const HomePage = () => {
  return (
    <div className={styles.main_content}>
      <div className={styles.sections}>
        <section id="top">
          <div className={styles.content1}>
            <p>Let's build the next big thing together</p>
          </div>
          <div className={styles.content2}>
            <p>
              You bring the vision, we help you turn it into a brand/product
              people love.
            </p>
          </div>
        </section>
      </div>

      <section id="speech">
        <div className={styles.sections}>
          <div className={styles.left_content1}>
            <p>WE ARE CREATIVE MINDS</p>
          </div>
          <div className={styles.right_content2}>
            <p>
              We craft products and brands that stands out. Together let's make
              things smarter, newer, and more memorable.
            </p>
          </div>
          <div className={styles.left_content1}>
            <p>DRIVEN BY RESULTS</p>
          </div>
          <div className={styles.right_content2}>
            <p>
              We believe that function is the substance of aesthetic experience.
              This principle guides clearer user interfaces, stronger branding
              devices and more cohesive design system.
            </p>
          </div>
        </div>
      </section>

      <section id="form">
        <div className={styles.sections}>
          <div className={styles.left_form}>Let's you stand out</div>
          <form>
            <label for="EMAIL">email</label>
            <a href="/" class="button">
              KEEP IN TOUCH
            </a>
          </form>
        </div>
      </section>

      <section id="ref">
        <div className={styles.sections}>
          <div className={styles.box}>
            <p>REF</p>
            <div className={styles.__box1}>box 1</div>
            <div className={styles.__box2}>box 2</div>
            <div className={styles.__box3}>box 3</div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className={styles.sections}>
          <p>
            ART DIRECTION / BRAND POSITIONING / BRAND & IDENTITY DESIGN /
            CREATIVE DIRECTION / MOTION / PROTOTYPING / PRODUCT STRATEGY /
            TESTING & RESEARCH / UX/UI DESIGN / WE LOVE CRAZY IDEAS{" "}
          </p>
        </div>
      </section>

      <section id="shema">
        <div className={styles.sections}>
          <img src={schema} alt="schema" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
