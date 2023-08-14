import React, {useState, Fragment} from 'react';

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
      <Fragment>
        <UserInput onNewUserData={newDataHandler}/>
        {newData.length > 0 && <UserResult dataItems={newData}/>}
      </Fragment>
   );
}

export default App;
