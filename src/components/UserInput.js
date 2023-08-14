import React, {useState} from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css"

import UserModal from "../UI/UserModal"

const UserInput = (props) => {
  
  const [enteredText,setEnteredText] = useState(''); 
  const [enteredAge,setEnteredAge] = useState('');
  const [isModal,setIsModal] = useState('');
  

  const formHandler = (event) => {
    event.preventDefault();
    
    const dataObj = {
      text: enteredText,
      age: enteredAge
    }

    if(enteredText === "" || enteredAge === ""){
      setIsModal({
          text: "Invalid User Input :(",
          message: "Please enter some values input field cannot be empty"
        }
      )
      return;
    }else if(+enteredAge < 1){
      setIsModal({
          text: "Invalid User Input! :(",
          message: "Age should be greater than 0"
        }
      )
      return;
    }
    
    props.onNewUserData(dataObj);

    setEnteredText('');
    setEnteredAge('');

  }

  const userTextDataHandler = (event) => {
    setEnteredText(event.target.value);
  }
  
  const userAgeDataHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const errorHandler = () => {
    setIsModal(null);
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
      {isModal && <UserModal data={isModal} onIsModal={errorHandler}/>}
    </div>
  );
}

export default UserInput;