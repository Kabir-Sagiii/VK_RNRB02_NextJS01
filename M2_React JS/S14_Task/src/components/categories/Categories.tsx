import React from 'react'
import "./Categories.css"
import Category from './category/Category'
function Categories() {
  return (
    <div className='categories'>
        
        <Category categoryImage={"https://tse4.mm.bing.net/th/id/OIP.gWrRbQOnFaY1PA8q6gvxagHaEK?r=0&pid=Api&h=220&P=0"} categoryName='Mobiles'  />

         <Category categoryImage={"https://tse2.mm.bing.net/th/id/OIP.J6LUFLuJDrHmpogyGuEkEQHaEo?r=0&pid=Api&h=220&P=0"} categoryName={"Men's"} />
          <Category categoryImage={"https://tse1.mm.bing.net/th/id/OIP.LU2WHYPfPWBOS1fjbNsCLAHaE8?r=0&pid=Api&h=220&P=0"} categoryName={"Women's "} />
          <Category categoryImage={"https://static.vecteezy.com/system/resources/previews/027/110/333/non_2x/fashion-model-kids-free-photo.jpg"} categoryName={"Kids"} />
         
         <Category categoryImage={"https://tse4.mm.bing.net/th/id/OIP.gWrRbQOnFaY1PA8q6gvxagHaEK?r=0&pid=Api&h=220&P=0"} categoryName='Mobiles'  />

         <Category categoryImage={"https://tse2.mm.bing.net/th/id/OIP.J6LUFLuJDrHmpogyGuEkEQHaEo?r=0&pid=Api&h=220&P=0"} categoryName={"Men's"} />
          <Category categoryImage={"https://tse1.mm.bing.net/th/id/OIP.LU2WHYPfPWBOS1fjbNsCLAHaE8?r=0&pid=Api&h=220&P=0"} categoryName={"Women's "} />
          <Category categoryImage={"https://static.vecteezy.com/system/resources/previews/027/110/333/non_2x/fashion-model-kids-free-photo.jpg"} categoryName={"Kids"} />
         
    </div>
  )
}

export default Categories