import {useContext} from 'react'
import "./Context.css"
import MyContext from './Context'
function E() {
     const data  = useContext(MyContext)
  return (
    <div className='context'>
        <h1>E Component : { data }</h1>
    </div>
  )
}

export default E