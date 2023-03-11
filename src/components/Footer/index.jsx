import { useState } from "react";

// Helpers
import fetchAddContact from "../../helpers/fetchAddContact";

// Assets
import arrow from "../../assets/icon/arrow.svg";

// Styles
import styles from "./styles.module.scss";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const addContact = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchAddContact(email);
      setEmail("");
      if (response) {
        setResult("Thank you for subscribing to our newsletter!");
      } else {
        setResult("Something went wrong, please try again later.");
      }
    } catch {
      setResult("Something went wrong, please try again later.");
    }
  };

  return (
    <footer>
      <div className={styles.__form}>
        <h4>subscribe to our latest updates</h4>
        <form onSubmit={(e) => addContact(e)}>
          <div className={styles.inputContainer}>
            <label> email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className={styles.__result}>{result}</div>
            <button type="submit">
              <img
                className={styles.arrow}
                src={arrow}
                alt="icon arrow"
                id="btn_arrow"
              />
            </button>
          </div>
        </form>
        <div className={styles.link}>
          <a
            href="https://theoyster.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Oyster Gallery
          </a>
        </div>
      </div>
      <div className={styles.__network}>
        <p className={styles.__title}>follow our journey : </p>
        <a
          href="https://twitter.com/The___Oyster"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        <span>and</span>
        <a
          href="https://www.instagram.com/the____oyster"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
