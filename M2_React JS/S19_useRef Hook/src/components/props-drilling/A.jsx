import {useState} from 'react'
import "./PropsDrilling.css"
import B from './B'
function A() {
    const [state,setState] = useState("React JS Library")
  return (
    <div className='props-drilling'>
        <h1>A Component</h1>
        <B data={state} />
    </div>
  )
}

export default A