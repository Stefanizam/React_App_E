import styles from "./ErrorModal.module.css"

function Backdrop(props) {
    return <div className={styles.Backdrop} onClick={props.onClick} />;
  
  }
  
  export default Backdrop;