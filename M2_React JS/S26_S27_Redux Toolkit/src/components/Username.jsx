import {useRef} from 'react'
import {updateUserName} from "../redux-slices/userNameSlice"
import { useDispatch } from 'react-redux'
function Username() {
    const dispatch = useDispatch()
  const inputRef = useRef(null)
    const updateUser = ()=>{
        //call actionCreator
       const action= updateUserName(inputRef.current.value)
       // action = {type:"username/updateUserName",payload:"Redux toolkit"}
        dispatch(action)
    }
  return (
    <div className='username'>
        <h1>Username Component</h1>
        <input ref={inputRef} type="text" placeholder='username'/>
        <button onClick={updateUser}>Submit</button>
        <p>City Name : {}</p>
    </div>
  )
}

export default Username