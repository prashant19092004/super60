import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero.js'
import About from './components/About/About.js'
import Slider from './components/Slider/Slider.js'
import NumberShow from './components/NumberShow/NumberShow.js'
import Text_Slider from './components/Text_Slider/Text_Slider.js'
import Footer from './components/Footer/Footer.js'
import Testimonials from './components/Testimonials/Testimonials.js'
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <NumberShow />
      {/* <Testimonials /> */}
      <Text_Slider />
      {/* <Slider /> */}
      <Footer />
      
    </div>
  )
}

export default App