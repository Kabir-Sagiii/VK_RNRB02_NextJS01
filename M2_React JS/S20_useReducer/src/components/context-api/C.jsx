import {useContext} from 'react'
import "./Context.css"
import MyContext from './Context'
import D from './D'
function C() {
   const data= useContext(MyContext)
  return (
    <div className='context'>
        <h1>C Component : {data}</h1>
        <D />
    </div>
  )
}

export default C