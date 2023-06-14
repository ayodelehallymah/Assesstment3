import React, { useState } from 'react'
import UserOutput from './userOutput';
import UserInput from './userInput';



 
function App() {
  // Here, i created a state and called a setState function with 'oluwasemilore as the default value'
  const [Username, setUsername] = useState('Oluwasemilore ');

// then, i deployed the nameChangerfunction
function nameChanger (e) {
  setUsername(e.target.value);
}

  
  return (
    <div className='css'>
  <UserInput change={nameChanger} />
  <UserOutput Username={Username}/>
  <UserOutput Username={Username} />
   </div>
  );
}



export default App