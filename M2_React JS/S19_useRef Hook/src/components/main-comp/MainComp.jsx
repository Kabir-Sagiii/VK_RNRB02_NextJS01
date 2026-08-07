import React from 'react'
import Login from "../../pages/login/Login"
import Home from "../../pages/home/Home"
function MainComp({isLoggedIn}) {
  return (
    <div>
        {
          isLoggedIn  ? <Home /> : <Login />
        }
        
    </div>
  )
}

export default MainComp