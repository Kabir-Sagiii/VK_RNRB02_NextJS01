import {useState} from 'react'
import "./Context.css"
import B from './B'
import MyContext from './Context'

function A() {
    const [state,setState] = useState("React JS")
  return (
    <div className='context'>
        <h1>A Component</h1>
        <button onClick={()=>{
            setState("Context API Concept")
        }}>Update</button>
        <MyContext value={state}>
          <B />
        </MyContext>
        
    </div>
  )
}

export default A