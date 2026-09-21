import React from 'react'

function Input() {
  return (
    <div >
        <h1 className='sm:bg-blue-500 md:bg-yellow-300 lg:bg-red-800 xl:bg-green-100 m-20'>Input Element</h1>
       <input className='m-10 focus:border-4 border-red-800' type="text" placeholder='username'/>
    </div>
  )
}

export default Input