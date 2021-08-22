import React from "react";
import { useState } from "react";

import Card from "./components/UI/Card";
import InputMain from "./components/InputField/InputMain";
import UsersList from "./components/OutputField/UsersList";
import ErrorModal from "./components/ErrorModal/ErrorModal"

import "./App.css";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const closeModalHandler = () => {
    setModalIsOpen(false);
  }

  const newUserHandler = (usersData) => {
    if (usersData === "noUserEntered") {
      setErrorMessage("Please enter a valid name and age (non-empty values)");
      setModalIsOpen(true);
    } else if (usersData === "wrongAgeEntered") {
      setErrorMessage("Please enter a valid age (Age should be greater than 0)");
      setModalIsOpen(true);
    }

    else {
      setUsersData((originalUsersData) => {
        return [usersData, ...originalUsersData];
      })
    }
  }

  return (
    <div className="App">
      <Card>
        <InputMain onSubmitData={newUserHandler}></InputMain>
      </Card>
      <Card>
        <UsersList data={usersData}></UsersList>
      </Card>
      {modalIsOpen && <ErrorModal typeOfError={errorMessage} closeModal={closeModalHandler}></ErrorModal>}
    </div>
  );
}

export default App;
