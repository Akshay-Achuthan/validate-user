import styles from "./UserModal.module.css"
import ReactDOM from "react-dom";

const UserModal = (props) => {

  const clickHandler = () =>{
    props.onIsModal();
  }

   return ReactDOM.createPortal(
    <div onClick={clickHandler} className={styles["overlay"]}>
      <div className={styles["modal-card"]}>
        <h3>{props.data.text}</h3>
        <p>{props.data.message}</p>
        <button onClick={clickHandler}>Okay</button>
      </div>
    </div>,
    document.getElementById("overlay")
  );
}

export default UserModal;