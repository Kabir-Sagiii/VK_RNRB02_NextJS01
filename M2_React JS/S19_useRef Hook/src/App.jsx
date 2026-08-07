import {useState} from 'react'

import Navbar from './components/nav-bar/Navbar'

import MainComp from './components/main-comp/MainComp'
import { AuthContext } from './context/authContext'
import UseRefComp from './components/use-Ref/UseRefComp'
import RefDOM from './components/use-Ref/RefDOM'
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const login = ()=>{
       setIsLoggedIn(true)
  }

  const logout = ()=>{
    setIsLoggedIn(false)
  }

  return (
    <div>
      {/* <UseRefComp /> */}
      <RefDOM />
     {/* {
       isLoggedIn  ? <Navbar logout={logout} />  : null
     } */}
     {/* <AuthContext value={login}>
      <MainComp isLoggedIn={isLoggedIn} />
     </AuthContext> */}
    
  
    </div>
  )
}

export default App