import React from "react";
import { useState } from "react";

import styles from "./InputMain.module.css";

const InputMain = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (+enteredAge < 1) {
      props.onSubmitData("wrongAgeEntered");
    } else if (!enteredUsername || !enteredAge) {
      props.onSubmitData("noUserEntered");
    } else {
      const newUser = {
        key: Math.random(),
        username: enteredUsername,
        age: enteredAge,
      };

      props.onSubmitData(newUser);
      setEnteredUsername("");
      setEnteredAge("");
    }
  };


  return (
    <form className={styles.inputMain} onSubmit={onSubmitHandler}>
      <label htmlFor="username">Username:</label>
      <input
        className={styles.inputMain__username}
        id="username"
        type="text"
        onChange={usernameChangeHandler}
      ></input>
      <label htmlFor="age">Age:</label>
      <input
        className={styles.inputMain__age}
        id="age"
        type="number"
        onChange={ageChangeHandler}
      ></input>
      <button
        className={styles.addUserButton}
        type="submit"
      >
        Add User
      </button>
    </form>
  );
};

export default InputMain;
