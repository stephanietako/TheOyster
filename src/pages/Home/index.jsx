// Assets
import schema from "../../assets/images/schema.png";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import SplitSection from "../../components/SplitSection";
import References from "../../components/References";
import KeepInTouch from "../../components/KeepInTouch";

// Styles
import styles from "./styles.module.scss";

const Home = () => {
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
    "we love creazy ideas",
  ];

  const listItems = lists.map((list, index) => (
    <li key={`${list}-${index}`}>{list}</li>
  ));

  const refs = ["", "", ""];

  return (
    <main>
      <Navbar />
      <Hero />
      <SplitSection
        title={
          <>
            we are <br /> creative <br /> minds
          </>
        }
        paragraph={
          "We craft products and brands that stands out. Together let's make things smarter, newer, and more memorable."
        }
        size={"half"}
      />
      <SplitSection
        title={
          <>
            driven by <br /> results
          </>
        }
        paragraph={
          "We believe that function is the substance of aesthetic experience. This principle guides clearer user interfaces, stronger branding devices and more cohesive design systems."
        }
        size={"half"}
      />
      <KeepInTouch />
      <References refs={refs} />
      <SplitSection
        title={<span className={styles.refs_title}>Services</span>}
        paragraph={<div className={styles.refs_list_items}>{listItems}</div>}
        size={"full"}
      />
      <section className={styles.schema}>
        <div className={styles.img_box}>
          <img src={schema} alt="schema" />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
