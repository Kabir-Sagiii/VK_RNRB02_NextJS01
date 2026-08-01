import React from 'react'
import "./Home.css"

import Banner from '../../components/banner/Banner'
import Categories from '../../components/categories/Categories'
import AdImage from '../../components/ad-images/AdImage'
function Home() {
  return (
    <div className='home'>
        <Banner /> 
        <Categories />
       <section className='home-adImage'>
         <AdImage image={"https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/2e82a36a78c38aeb.png?q=60"} />
        <AdImage image={"https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/977d262edc6fd92d.jpg?q=60"} /> 
        <AdImage image={"https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/91b54daafc6493ec.png?q=60"}/>
       </section>
    </div>
  )
}

export default Home