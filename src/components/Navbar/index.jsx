// Assets
import logoOyster from "../../assets/logo/oyster.png";

// Styles
import styles from "./styles.module.scss";

const Navbar = () => (
  <nav>
    <div className={styles.nav_container}>
      <div className={styles.__logo}>
        <img src={logoOyster} alt="logo TheOyster" />
        <div className={styles.__left}>
          <p>LAB</p>
        </div>
      </div>
      <div className={styles.__links}>
        <ul>
          <li>
            <a href="#get-in-touch"> GET IN TOUCH</a>
          </li>
          <li>
            <a href="#ref"> THE OYSTER GALLERY</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
