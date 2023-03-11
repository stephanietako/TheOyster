import { useState } from "react";

// Helpers
import fetchAddContact from "../../helpers/fetchAddContact";

// Styles
import styles from "./styles.module.scss";

const KeepInTouch = () => {
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
    <section className={styles.keep_in_touch} id="get-in-touch">
      <div className={styles.sections}>
        <div className={styles.form}>
          <div className={styles.__left}>
            <h3 className={styles.font_italic}>
              <span className="italic"> Let's make</span>
              <span className="arimo">
                {" "}
                you
                <br /> stand out
              </span>
            </h3>
          </div>
          <div className={styles.right_form}>
            <div className={styles.__email_input}>
              <form onSubmit={(e) => addContact(e)}>
                <div className={styles.inputContainer}>
                  <label>email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className={styles.__result}>{result}</div>
                  <input type="submit" value="keep in touch" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepInTouch;
