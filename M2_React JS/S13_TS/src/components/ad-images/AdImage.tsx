import React from 'react'
import "./AdImage.css"
import type { adProps } from '../../types/categoryTypes'

function AdImage({image}:adProps) {
  return (
    <div className='ad-image'>
        <img src={image} width={"100%"} height={270} alt="" />
    </div>
  )
}

export default AdImage