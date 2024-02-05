import HeroSection from "../HeroSection";
import React from 'react'
import MySkills from "../MySkills";
import { AboutMe } from "../AboutMe";
import { MyPortfolio } from "../MyPortfolio";
import Testimonial from "../Testimonial";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

function Home() {
  return (
    <div>
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        <Testimonial/>
        <ContactMe/>
        <Footer/>
    </div>
  )
}

export default Home