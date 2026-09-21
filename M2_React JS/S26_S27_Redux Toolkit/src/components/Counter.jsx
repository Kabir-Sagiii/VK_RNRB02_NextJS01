import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament } from '../redux-slices/counterSlice'
function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((store) => {
        return store.counterReducer
    })
    return (
        <div>
            <h1>Count Value is : {count}</h1>
            <button onClick={() => {
                // const action = increament()
                // dispatch(action)

                dispatch(increament())
            }}>inc</button>

        </div>
    )
}

export default Counter