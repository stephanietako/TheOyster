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
            <p className={styles.font_italic}>
              <span className={styles.italic}> Let's build </span>
              <span className={styles.boldy}>
                {" "}
                the next <br /> big thing
              </span>
              <span className={styles.italic}> together</span>
            </p>
          </div>
          <div className={styles.content2}>
            <p>
              You bring the vision, we help you <br />
              turn it into a brand/product <br />
              people love.
            </p>
          </div>
        </section>
      </div>

      <section id="speech">
        <div className={styles.sections}>
          <div className={styles.left_content1}>
            <p>
              WE ARE <br /> CREATIVE <br />
              MINDS
            </p>
            {/* text-transform: uppercase; */}
          </div>
          <div className={styles.right_content2}>
            <p>
              We craft products and brands that <br />
              stands out. Together let's make
              <br />
              things smarter, newer, and more
              <br /> memorable.
            </p>
          </div>
          <div className={styles.left_content1}>
            <p>
              DRIVEN BY <br />
              RESULTS
            </p>
          </div>
          <div className={styles.right_content2}>
            <p className={styles.fonts}>
              We believe that function is <br />
              stands out. Together let's makethe substance of aesthetic
              experience.
              <br />
              This principle guides clearer user <br />
              interfaces, stronger branding devices <br />
              and more cohesive design systems.
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
          <p className={styles.title}>REF</p>
          <div className={styles.box}>
            <div className={styles.__box1}>box 1</div>
            <div className={styles.__box2}>box 2</div>
            <div className={styles.__box2}>box 3</div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className={styles.sections}>
          <p className={styles.content1}>SERVICES</p>
          <p className={styles.list_right}>
            ART DIRECTION <br /> BRAND POSITIONING <br /> BRAND & IDENTITY
            DESIGN <br />
            CREATIVE DIRECTION <br /> MOTION <br /> PROTOTYPING <br /> PRODUCT
            STRATEGY <br />
            TESTING & RESEARCH <br /> UX/UI DESIGN <br /> WE LOVE CRAZY IDEAS{" "}
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
