import React, {useState} from "react";
import Card from "../UI/Card";

import styles from "./UserInput.module.css"

import UserModal from "../UI/UserModal"

const UserInput = (props) => {
  
  const [enteredText,setEnteredText] = useState(''); 
  const [enteredAge,setEnteredAge] = useState(''); 
  const [isModal,setIsModal] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();
    
    const dataObj = {
      text: enteredText,
      age: enteredAge
    }

    if(enteredText === "" || enteredAge === ""){
      setIsModal(true);
    }else{
      props.onNewUserData(dataObj);
    }

    setEnteredText('');
    setEnteredAge('');

  }

  const userTextDataHandler = (event) => {
    setEnteredText(event.target.value);
  }
  
  const userAgeDataHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  return (
    <div>
      <Card>
        <form onSubmit={formHandler}>

          <label htmlFor="userName" className={styles['form-label']}>User Name</label>
          <input value={enteredText} onChange={userTextDataHandler} className={styles['form-input']} id="userName" type="text" /> 
          
          <label htmlFor="userAge" className={styles['form-label']}>User Age</label>
          <input value={enteredAge} onChange={userAgeDataHandler} className={styles['form-input']} id="userAge" type="number" /> 
          
          <button className={styles['form-button']} type="submit">Add user</button>
        </form>
      </Card>

      <UserModal isModalData={isModal}/>
    </div>
  );
}

export default UserInput;