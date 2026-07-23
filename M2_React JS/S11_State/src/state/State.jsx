import {useState} from "react"
import "./State.css"
function State() {
            const [state,setState]=useState(999)
            // data = [state,setterFn]

            function updateMystate(){
               
                //    data[1]("React JS State Concept")
                setState("React JS with Kabir")
            }
            
  return (
    <div id="state">
        <h1>State Concept : {state}</h1>
        
        <button onClick={updateMystate}> Update Data :{state} </button>
    </div>
  )
}

export default State