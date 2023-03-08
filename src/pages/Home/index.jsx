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
    " brand & identitydesign ",
    "creative direction ",
    "motion",
    "prototyping",
    "product strategy ",
    "testing & reserch ",
    " UX/UI design",
    " we love creazy ideas",
  ];
  const listItems = lists.map((list) => <li key={list}>{list}</li>);
  return (
    <>
      <Navbar />
      <div className={styles.main_content}>
        <section>
          <div className={styles.top}>
            <div className={styles.__content1_top}>
              <h1 className={styles.font_italic}>
                <span className={styles.italic}> Let's build </span>
                <span className={styles.boldy}>
                  {" "}
                  the next <br /> big thing
                </span>
                <span className={styles.italic}> together</span>
              </h1>
            </div>
            <div className={styles.__content2}>
              <p>
                You bring the vision, we help you <br />
                turn it into a brand/product <br />
                people love.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.mindset}>
            <div className={styles.__box1}>
              <div className={styles.__box_right}>
                <h2>
                  WE ARE <br /> CREATIVE <br />
                  MINDS
                </h2>
              </div>
              <div className={styles.__box_left}>
                <p>
                  We craft products and brands that <br />
                  stands out. Together let's make
                  <br />
                  things smarter, newer, and more
                  <br /> memorable.
                </p>
              </div>
            </div>
            <div className={styles.__box2}>
              <div className={styles.__box_right}>
                <h2>
                  DRIVEN BY <br />
                  RESULTS
                </h2>
              </div>
              <div className={styles.__box_left}>
                <p>
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
          </div>
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
          <div className={styles.services}>
            <div className={styles.__title}>
              <h2>SERVICES</h2>
            </div>
            <p>{listItems}</p>
          </div>
        </section>

        <section>
          <div className={styles.schema}>
            <img src={schema} alt="schema" />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
