import React, {useState} from 'react';

import Wrapper from "./Helpers/Wrapper"

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
      // <Fragment>
        <Wrapper>
          <UserInput onNewUserData={newDataHandler}/>
          {newData.length > 0 && <UserResult dataItems={newData}/>}
        </Wrapper>
      // </Fragment>
   );
}

export default App;
