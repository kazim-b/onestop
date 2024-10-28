import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import SignInButton from "../signInButton/SignInButton";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="categoryDiv">
          <h2>Categories</h2>
          <div className="links">
            <Link to="/assets">All Assets</Link>
            <Link to="/software">Software</Link>
            <Link to="/images">Images</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/games">Games</Link>
          </div>
        </div>

        <div className="infoDiv">
          <h2>Information</h2>
          <div className="links">
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About Us</Link>
            <Link to="/guideline">Guidelines</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQs</Link>
          </div>
        </div>

        <div className="legalDiv">
          <h2>Legal</h2>
          <div className="links">
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/copyright-information">Copyright Information</Link>
            <Link to="/license-agreement">License Agreement</Link>
          </div>
        </div>

        <div className="socialDiv">
          <h2>Social Media</h2>
          <div className="socials">
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <SignInButton text="SIGN IN NOW" btnColor="yellow" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
