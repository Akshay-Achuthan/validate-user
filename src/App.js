import React, {useState} from 'react';

import UserInput from "./components/UserInput"
import UserResult from './components/UserResult';


function App() {
  
  const updatedDataArray = [];

  const [newData,setNewData] = useState(updatedDataArray);

  const newDataHandler = (data) => {
    setNewData((prevData) => {
      return [data,...prevData];
    });
  }

  return (
      <div>
        <UserInput onNewUserData={newDataHandler}/>
        {newData.length > 0 && <UserResult dataItems={newData}/>}
      </div>
   );
}

export default App;
