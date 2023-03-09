import React from "react";
// import Oyster from "../../components/Oyster";
// Styles
import styles from "./styles.module.scss";
// Images
import schema from "../../assets/images/schema.png";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  const lists = [
    "art direction",
    "brand positionning ",
    "brand & identitydesign ",
    "creative direction ",
    "motion",
    "prototyping",
    "product strategy ",
    "testing & reserch ",
    "UX/UI design",
    " we love creazy ideas",
  ];
  const listItems = lists.map((list) => <li key={list}>{list}</li>);
  return (
    <>
      <Navbar />

      <section>
        <div className={styles.sections}>
          <div className={styles.top}>
            <div className={styles.__content1_top}>
              <h1 className={styles.font_italic}>
                <span className={styles.italic}> Let's build </span>
                <span className={styles.arimo}>
                  {" "}
                  the next <br /> big thing
                </span>
                <span className={styles.italic}> together</span>
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

      <section>
        <div className={styles.sections}>
          <div className={styles.mindset1}>
            <div className={styles.__box1}>
              <div className={styles.__box_left}>
                <h2>
                  we are <br /> creative <br /> minds
                </h2>
              </div>
              <div className={styles.__box_right}>
                <p>
                  We craft products and brands that stands out. Together let's
                  make things smarter, newer, and more memorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sections}>
          <div className={styles.mindset2}>
            <div className={styles.__box2}>
              <div className={styles.__box_left}>
                <h2>
                  driven by <br />
                  results
                </h2>
              </div>
              <div className={styles.__box_right}>
                <p>
                  We believe that function is the substance of aesthetic
                  experience. This principle guides clearer user interfaces,
                  stronger branding devices and more cohesive design systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sections}>
          <div className={styles.form}>
            <div className={styles.left_form}>
              <p>Let's you stand out</p>
            </div>
            <form>
              <label for="EMAIL">email</label>
              <a href="/" class="button">
                KEEP IN TOUCH
              </a>
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sections}>
          <div className={styles.ref}>
            <span>
              {" "}
              <p className={styles.__title}>REF</p>
            </span>
            <div className={styles.__box}>
              <div className={styles.__box1}>box 1</div>
              <div className={styles.__box2}>box 2</div>
              <div className={styles.__box3}>box 3</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sections}>
          <div className={styles.services}>
            <div className={styles.__title}>
              <h2>Services</h2>
            </div>
            <div className={styles.list}>
              <p>{listItems}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sections}>
          <div className={styles.schema}>
            <img src={schema} alt="schema" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
