import React from "react";

import User from "./User";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={styles.usersList}>
      {props.data.map((userData) => {
        return (
          <User
            username={userData.username}
            age={userData.age}
            key={Math.random()}
          ></User>
        );
      })}
    </div>
  );
};

export default UsersList;
