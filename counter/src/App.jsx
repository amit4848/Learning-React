import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let value=15  //value update on click but not propoget in UI
  let [Counter, setCounter] = useState(15); //default value of counter=15, update in DOM by setCounter funcn
  // If you write const [Counter,fun1]=useState(15) and you update value then got an error because value is constant
  const IncreaseValue = () => {
    // Counter=Counter+1;
    // setCounter(Counter) // take new value of 'value'
    // console.log("Clicked",Counter)
    // if(Counter<20)
    // {
    //   setCounter(Counter+1)
    // }

    // some interview question  :: here state not change
    // setCounter(Counter + 1);
    // setCounter(Counter + 1);
    // setCounter(Counter + 1);
    // setCounter(Counter + 1);
    // now tell what is value of counter
    // If you call it multiple times in the same render, 
    // React batches them together and only applies the last one.
    // If counter = 15, each call still sees the initial value (15)
    // After React processes them, counter only updates to 16, not 19.
    // Each setCounter(counter + 1) sees the old value, so state updates incorrectly.

    // again if I do this   
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    // setCounter(prev => prev + 1)(Functional Update)
    // Here, prev represents the latest state value React provides.
    // If multiple setCounter calls happen, React ensures each one gets 
    // the updated state from the last update.
    
  };
  const DecreaseValue = () => {
    if (Counter > 0) setCounter(Counter - 1);
  };
  // Counter value always in b/w [0,20]
  return (
    <>
      <h1>Counter value : {Counter}</h1>
      <button onClick={IncreaseValue}>Increase</button>
      <br />
      <br />
      <button onClick={DecreaseValue}>Decrease</button>
    </>
  );
}

export default App;
