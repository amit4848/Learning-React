import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  //useRef hook
  const passwordRef=useRef(null)
  
  const passwordGenerator=useCallback( ()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%&*()[]{}?"

    for(let i=1;i<=length;i++)
    {
      let index=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(index);
    }
    setPassword(pass)
  }
 ,[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{passwordGenerator()},
 [length,numberAllowed,charAllowed,passwordGenerator]
)

// for copy password 
const copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,100)
  navigator.clipboard.writeText(password)
},[password])



  return (
    <>
     <div className="max-w-md mx-auto shadow-md rounded-lg px-6 py-4 my-8 text-gray-900 bg-gray-700">
  <h1 className="text-center text-xl font-semibold my-3 text-white">Password Generator</h1>

  <div className="flex rounded-lg overflow-hidden mb-4 bg-white">
    <input
      type="text"
      value={password}
      className="outline-none w-full px-3 py-2 text-center text-gray-900 truncate"
      placeholder="Generated Password"
      readOnly
      ref={passwordRef}
      
    />
    <button
    onClick={copyPasswordToClipBoard}
      className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 active:bg-blue-700 transition" 
    >
      Copy
    </button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
    <input
    type="range"
    min={6}
    max={100}
    value={length}
    onChange={(event)=>{setlength(event.target.value)}}
      className='cursor-pointer'
    />
    <label className='text-white'>Length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input
      type='checkbox'
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={()=>{
        setNumberAllowed((prev)=>(!prev))
      }}
    />
    <label htmlFor='numberInput' className='text-white'>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input
      type='checkbox'
      defaultChecked={charAllowed}
      id='charaterInput'
      onChange={()=>{
        setCharAllowed((prev)=> !prev)
      }}
    />
    <label htmlFor='charaterInput' className='text-white'>Charaters</label>
    </div>
  </div>
</div>

    </>
  )
}

export default App
