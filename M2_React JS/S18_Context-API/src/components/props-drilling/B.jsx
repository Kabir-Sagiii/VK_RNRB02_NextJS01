import React from 'react'
import "./propsDrilling.css"
import C from './C'
function B({data}) {
  return (
    <div className='props-drilling'>
        <h1>B Component </h1>
        <C info={data} />
    </div>
  )
}

export default B