import {useState} from 'react'

import "./State.css"
// import {incCount,decCount} from "./counter.js"
function Counter() {
           const [count,setCount]  = useState(0)

function incCount(){
    setCount(count + 1)
}

function decCount(){
   setCount(count-1)
}

           
  return (
    <div id="state">
        <h1>Count Value : {count}</h1>
      <button onClick={incCount}>incCount</button>
      <button onClick={decCount}>decCount</button>

        {/* <button onClick={()=>{
            incCount(setCount,count)
        }}>incCount</button>
        <button onClick={function(){
             decCount(setCount,count)
        }}>decCount</button> */}
    </div>
  )
}

export default Counter