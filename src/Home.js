import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import HowItWorks from './HowItWorks'
import Aboutus from './Aboutus';
import Services from './Services';
import Contactus from './Contactus';
import Footer from './Footer';

const Home = () => {
    return (
    <>
    <Navbar/>
    <Header/>
    <HowItWorks/>
    <Aboutus/>
    <Services/>
    <Contactus/>
    <Footer/>        
    </>
    )
}

export default Home
