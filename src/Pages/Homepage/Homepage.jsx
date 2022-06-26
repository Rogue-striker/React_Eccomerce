import Catalogue from '../../Components/Catalogue/Catalogue'
import Footer from '../../Components/Footer/Footer.jsx'
import Navbar from '../../Components/Navbar/NavBar.jsx'
import PriceRange from '../../Components/PriceRange/PriceRange'
import Images from '../../Components/Slider/Images.jsx'
import Slider from '../../Components/Slider/Slider.jsx'
const Homepage = () => {
  return (
    <>
        <Navbar/>
        <Slider images ={Images}/>
        <PriceRange/>
        <Catalogue/>
        <Footer/>
    </>

    
  )
}

export default Homepage