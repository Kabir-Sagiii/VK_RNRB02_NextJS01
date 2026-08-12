import {useReducer} from 'react'
import "./UseReducerConcept.css"
import { countReducer } from './reducer'
function UseReducerconcept() {
      const [state,dispatch] = useReducer(countReducer,0)
  return (
    <div className='use-reducer'>
        <h1>Count Value is : {state} </h1>
        <button onClick={()=>{
            dispatch({type:"inc",payload:1})
        }}>inc Count</button>


        <button onClick={()=>{
            dispatch({type:"inc",payload:3})
        }}>inc by 3</button>


        <button onClick={()=>{
            dispatch({type:"dec",payload:1})
        }}>dec Count</button>
        <button onClick={()=>{
            dispatch({type:"dec",payload:5})
        }}>dec by 5</button>
        <button onClick={()=>{
            dispatch({type:"reset"})
        }}>reset</button>
    </div>
  )
}

export default UseReducerconcept