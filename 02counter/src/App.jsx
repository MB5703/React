  import { useState } from 'react'

  import './App.css'

  function App() {
    
    const[counter,setCounter]= useState(10);


    const addValue = () => {
      setCounter(prevCounter => prevCounter + 1);
    };

    const removeValue = () => {
      setCounter(prevCounter => prevCounter - 1);
    };
    return (
      <>
        <h2>Counter:{counter}</h2>
        <button onClick={addValue}>Add Value</button>{" "}
        <button onClick={removeValue}>Remove Value</button>
      </>
    )
  }

  export default App
