import {useReducer} from 'react'
import "./UseReducerConcept.css"
function UseReducerconcept() {
      const [state,dispatch] = useReducer(function(state,action){
         // logics to update state
         if(action.type==="inc"){

 return state + 1
         }else if(action.type==="dec") {

return state - 1
         }else if(action.type==="reset") {
            return 0
         }
         
        
      },0)
  return (
    <div className='use-reducer'>
        <h1>Count Value is : {state} </h1>
        <button onClick={()=>{
            dispatch({type:"inc"})
        }}>inc Count</button>
        <button>inc by 3</button>
        <button onClick={()=>{
            dispatch({type:"dec"})
        }}>dec Count</button>
        <button>dec by 5</button>
        <button onClick={()=>{
            dispatch({type:"reset"})
        }}>reset</button>
    </div>
  )
}

export default UseReducerconcept