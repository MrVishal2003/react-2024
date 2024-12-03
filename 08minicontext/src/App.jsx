import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './context/Login'
import Profile from './context/Profile'

function App() {
  return (
    <UserContextProvider>
     <h1>React with chai and share is important</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App