import React from 'react'
import "./about.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Testimonial from "../../components/testimonial/Testimonial";

const About = () => {
    return (
        <>
            <Navbar />

            <div className="aboutMain">
                <div className="whoWeAre aboutContent">
                    <div className="left"><h1>Who We Are?</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac</p></div>
                    <div className="right"></div>
                </div>
                <div className="whatWeDo aboutContent">
                    <div className="right"></div>
                    <div className="left"><h1>What We Do?</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac</p></div>
                </div>
            </div>

            <Testimonial />

            <Footer />
        </>
    )
}

export default About
