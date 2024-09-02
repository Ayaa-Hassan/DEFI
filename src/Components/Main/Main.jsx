import React from 'react'

import hero from '../../assets/video.mp4';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Developers from '../Developers/Developers';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';


export default function Main() {
  return (
      <div className='main'>
          <video
              className=' object-cover h-svh w-full fixed top-[50px]  -z-10 '
              src={hero}
              autoPlay
              loop
              muted
              
          />
          <Navbar />
      <Hero />
      <About />
      <Developers />
      <Subscribe />
      <Footer/>
         
    </div>
  )
}
