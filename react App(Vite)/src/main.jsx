import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <h4>My App!</h4>
  )
}

const anotherElement=(
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click me to visit google.com'
)

createRoot(document.getElementById('root')).render(
  
  // anotherElement
  // MyApp()
  // reactElement

  
  <StrictMode>
  <>
    <App />
    <MyApp/>
  </>
  </StrictMode>,
)
