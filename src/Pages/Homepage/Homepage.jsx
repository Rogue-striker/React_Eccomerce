import React from 'react'
import Slider from './../../components/Slider/Slider.jsx'
import PriceRange from './../../components/PriceRange/PriceRange.jsx'
import Footer from './../../components/Footer/Footer.jsx'
import Catalogue from './../../components/Catalogue/Catalogue.jsx'
import Images from './../../components/Slider/Images.jsx'
const Homepage = () => {
  return (
    <>
        <Slider images ={Images}/>
        <PriceRange/>
        <Catalogue/>
        <Footer/>
    </>

    
  )
}

export default Homepage