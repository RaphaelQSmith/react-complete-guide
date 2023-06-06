import { useState } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

const App = props => {

  const [personState, setPersonsState] = useState({
    persons: [
      {text:'Solid Snake'},
    ]
  });

  const changeNameHandler = (event) =>{
    setPersonsState({
    persons: [
      {text: event.target.value}
    ]
  }
  )
}

  return (
    <div className="App">
        <h1>React Course</h1>
        <UserInput 
         text={personState.persons[0].text}
         changed={changeNameHandler.bind(this)} />
        <UserOutput 
         text={personState.persons[0].text} />  
    </div>
  );
}

export default App;
