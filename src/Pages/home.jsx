import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import CommoditiesSection from '../Components/CommoditiesSection'
import OtherCommoditiesSection from '../Components/OtherCommoditiesSection'
import Partnership from '../Components/Partnership'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'


function Home() {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <CommoditiesSection/>
            <OtherCommoditiesSection/>
            <Partnership/>
            <ContactSection/>
        </>
    )
}

export default Home