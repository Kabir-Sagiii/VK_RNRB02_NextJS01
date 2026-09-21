import React from 'react'

function Card() {
  return (
    <div className='w-[270px] text-center h-[430px] shadow-2xl m-10'>
        <img src="https://thumbs.dreamstime.com/b/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.jpg" className='w-full h-[230px]' alt="" />
        <h3 className='text-center my-5 text-2xl text-green-800'>Rohan Verma</h3>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button className='bg-green-800 text-white py-3 px-10 my-5'>submit</button>
    </div>
  )
}

export default Card