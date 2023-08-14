import styles from "./UserModal.module.css"

const UserModal = (props) => {
  return (
    <div className={styles['modal-card']}>
      <h3>
        Invalid input
      </h3>
      <p>Error message</p>
      <button>Okay</button>
    </div> 

    );
}

export default UserModal;