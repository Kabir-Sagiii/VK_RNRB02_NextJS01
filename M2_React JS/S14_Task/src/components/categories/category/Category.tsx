import React from 'react'
import "./Category.css"
import type {categoryProps} from "../../../types/categoryTypes.ts"
function Category(props:categoryProps) {
  return (
    <div className='category'>
        <img src={props.categoryImage} width={110} height={110} alt="" />
        <h2>{props.categoryName}</h2>
    </div>
  )
}

export default Category