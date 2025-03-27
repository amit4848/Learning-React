import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  // let value=15  //value update on click but not propoget in UI
  let [Counter,setCounter]=useState(15) //default value of counter=15, update in DOM by setCounter funcn
  // If you write const [Counter,fun1]=useState(15) and you update value then got an error because value is constant
  const IncreaseValue=()=>
{
  // Counter=Counter+1;
  // setCounter(Counter) // take new value of 'value'
  // console.log("Clicked",Counter)
  if(Counter<20)
    setCounter(Counter+1)
}
const  DecreaseValue=()=>
{ 
  if(Counter>0)
  setCounter(Counter-1)

}
// Counter value always in b/w [0,20]
  return (
    <>
      <h1>Counter value : {Counter}</h1>
      <button onClick={IncreaseValue}>Increase</button>
      <br/>
      <br/>
      <button onClick={DecreaseValue}>Decrease</button>
    </>
  )
}

export default App
