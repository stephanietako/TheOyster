const { REACT_APP_SENDINBLUE_KEY } = process.env;

const fetchAddContact = async (email) => {
  try {
    const response = await fetch("https://api.sendinblue.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": REACT_APP_SENDINBLUE_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const res = await response.json();
    return res.id ? true : false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default fetchAddContact;
