import React, { useState } from "react";
// const { REACT_APP_API_KEY } = process.env;
// Styles
import styles from "./styles.module.scss";
import arrow from "../../assets/icon/arrow.svg";

const EmailInput = ({ section, buttonType }) => {
  const [email, setEmail] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    // fetch('https://api.sendinblue.com/v3/contacts', {
    //   method: 'POST',
    //   headers: {
    //     accept: 'application/json',
    //     'api-key': REACT_APP_API_KEY,
    //     'content-type': 'application/json'
    //   },
    //   body: `{"email": ${email} }`
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response);
    //     //popup success
    //     setEmail("");
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     //popup error
    //   });
  };

  return (
    <form onSubmit={(e) => addContact(e)}>
      <div className={styles.inputContainer}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <button type="submit" id="btn_arrow">
          {buttonType !== "icon" ? (
            <img className={styles.arrow} src={arrow} alt="icon arrow" />
          ) : (
            <span id="btn_kit">
              <p>keep in touch</p>
            </span>
          )}
        </button>
      </div>
    </form>
  );
};
export default EmailInput;
