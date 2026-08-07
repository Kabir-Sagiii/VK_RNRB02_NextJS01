import React from 'react'
import "./PropsDrilling.css"
import D from './D'
function C({info}) {
  return (
    <div className='props-drilling'>
        <h1>C component</h1>
        <D data={info}/>
    </div>
  )
}

export default C