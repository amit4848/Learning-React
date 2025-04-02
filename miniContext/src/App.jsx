import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './components/login'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <UserContextProvider>
      <h1>React context Api for state management</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
    
  )
}

export default App
