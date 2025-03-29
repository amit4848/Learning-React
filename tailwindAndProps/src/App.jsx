import './App.css'
import Card from './component/card'


function App() {
  let myobj={
    name:"Amit",
    age:22
  }
  let arr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-400 rounded-xl text-black p-4 mb-4'>Hello world</h1>
    <Card userName="Amit Kumar" btnText="click me" someObj={myobj} someArr={arr} />
    <Card userName="Deepak"  />

    </>
  )
}

export default App
