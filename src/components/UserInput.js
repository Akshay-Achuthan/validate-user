import React, {useState, Fragment, useRef} from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css"

import UserModal from "../UI/UserModal"

const UserInput = (props) => {
   const nameInputRef = useRef();
   const ageInputRef = useRef();

  const [isModal,setIsModal] = useState('');
  

  const formHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    
    const dataObj = {
      text: enteredUserName,
      age: enteredUserAge
    }

    if(enteredUserName === "" || enteredUserAge === ""){
      setIsModal({
          text: "Invalid User Input :(",
          message: "Please enter some values input field cannot be empty"
        }
      )
      return;
    }else if(+enteredUserAge < 1){
      setIsModal({
          text: "Invalid User Input! :(",
          message: "Age should be greater than 0"
        }
      )
      return;
    }
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    props.onNewUserData(dataObj);
  }

  const errorHandler = () => {
    setIsModal(null);
  }

  return (
    <Fragment>
      <Card>
        <form onSubmit={formHandler}>

          <label htmlFor="userName" className={styles['form-label']}>User Name</label>
          <input ref={nameInputRef} className={styles['form-input']} id="userName" type="text" /> 
          
          <label htmlFor="userAge" className={styles['form-label']}>User Age</label>
          <input ref={ageInputRef} className={styles['form-input']} id="userAge" type="number" /> 
          
          <button className={styles['form-button']} type="submit">Add user</button>
        </form>
      </Card>
      {isModal && <UserModal data={isModal} onIsModal={errorHandler}/>}
    </Fragment>
  );
}

export default UserInput;