import React from 'react'
import "./contact.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
    return (
        <>
            <Navbar />

            <div className="contact">
                <h1>How Can We Help You?</h1>
                <form>
                    <input type="text" placeholder='Enter subject of your message' required />
                    <input type="email" placeholder='Enter your email' required />
                    <textarea placeholder='Enter your message' required></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Contact
