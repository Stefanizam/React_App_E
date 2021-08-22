import React from "react";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    const closeModalHandler = () => {
        props.closeModal();
    }

    return (
        <div className={styles.backdrop} onClick={closeModalHandler}>
            <div className={styles.errorModal}>
                <div>{props.typeOfError}</div>
                <button onClick={closeModalHandler}>Okay</button>
            </div>
        </div>
    );
}

export default ErrorModal;