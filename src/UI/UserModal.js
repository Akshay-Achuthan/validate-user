import styles from "./UserModal.module.css"

const UserModal = (props) => {

  const clickHandler = () =>{
    props.onIsModal();
  }

  return (
    <div onClick={clickHandler} className={styles['overlay']}>
    <div className={styles['modal-card']}>
      <h3>
        {props.data.text}
      </h3>
      <p>{props.data.message}</p>
      <button onClick={clickHandler}>Okay</button>
    </div> 
    </div>
    );
}

export default UserModal;