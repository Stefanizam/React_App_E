import React from "react";

import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.userContainer}>
      <span className={styles.name}>{props.username}: </span>
      <span className={styles.age}>{props.age} years old</span>
    </div>
  );
};

export default User;
