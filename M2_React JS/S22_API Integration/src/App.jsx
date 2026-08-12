import {useState} from 'react'

import Navbar from './components/nav-bar/Navbar'

import MainComp from './components/main-comp/MainComp'
import { AuthContext } from './context/authContext'
import UseRefComp from './components/use-Ref/UseRefComp'
import RefDOM from './components/use-Ref/RefDOM'
import AxiosConcept from './components/axios/AxiosConcept'
import UseReducerconcept from './components/use-Reducer/UseReducerconcept'
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
     <AxiosConcept />
    
  
    </div>
  )
}

export default App