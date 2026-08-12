import {useState,useRef} from 'react'
import "./UseRefComp.css"
function UseRefComp() {
    const [state,setState] = useState("React JS")
   
    let data  = useRef(10) 
    // let info = useRef("JS")
    // data = {current : 10}
    var variableData = 100; // re-created
    // dont create normal js variable to maintain the data
    function displayData(){
         console.log("Variable Value : ",variableData)
         console.log("State Value : ",state)
         console.log("Ref Value ",data.current)
         console.log("")
    }

    function changeVariableData(){
         variableData++
    }

    function updateState(){
        setState("React Native")
    }

    function updateRef(){
        data.current = data.current + 5
    }

  return (
    <div className='use-ref'>
        <h1>useRef() hook concept : {state} </h1>
        <button onClick={displayData}>Display Data</button>
        <button onClick={changeVariableData}>Change Variable Data</button>
        <button onClick={updateState}>Update State</button>
        <button onClick={updateRef}>Update Ref</button>
    </div>
  )
}

export default UseRefComp