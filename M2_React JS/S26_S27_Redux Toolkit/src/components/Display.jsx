import React from 'react'
import {useSelector} from "react-redux"
function Display() {
        const username =  useSelector(({userNameReducer})=>userNameReducer)
  return (
    <div className='display'>
        <h1>Display Component</h1>
        <input type="text" placeholder='city Name' /> <button>Submit</button>
        <p>User Name : {username}</p>
        
    </div>
  )
}

export default Display