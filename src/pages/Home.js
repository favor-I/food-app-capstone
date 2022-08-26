import React from 'react'
import '../App.css'
import '../assets/css/home.css'
import Footer from '../components/Footer/Footer'
import SectionOne from '../components/Home/SectionOne/SectionOne'
import SectionThree from '../components/Home/SectionThree/SectionThree'
import SectionTwo from '../components/Home/SectionTwo/SectionTwo'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='home-page-container'>
        <div className='home-page-top'>
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
        <Footer />
    </div>
  )
}

export default Home