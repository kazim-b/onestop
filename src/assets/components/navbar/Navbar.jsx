import React from "react";
import "./navbar.css";
import SignInButton from "../signInButton/SignInButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const activeNav = () => {
    setIsNavbarActive(true);
    document.body.classList.add("noScroll");
  };

  const closeNav = () => {
    setIsNavbarActive(false);
    document.body.classList.remove("noScroll");
  };

  return (
    <>
      <nav>
        <div className="left">
          <div className="logo">
            <Link to="/"  onClick={() => closeNav()}>ONESTOP</Link>
          </div>
          <div className="navs">
            <Link to="/assets">Assets</Link>
            <Link to="/software">Software</Link>
            <Link to="/images">Images</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/games">Games</Link>
            <Link to="/more">More</Link>
          </div>
        </div>

        <div className="right">
          <Link to="/pricing">Pricing</Link>
          <SignInButton text="SIGN IN" />
        </div>

        <div
          className={`hamburger${isNavbarActive ? "" : " active"}`}
          onClick={() => activeNav()}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div
          className={`closeNav${isNavbarActive ? " active" : ""}`}
          onClick={() => closeNav()}
        >
          X
        </div>
      </nav>

      {/* Slide-in  Navbar */}
      <nav className={`responsiveNav${isNavbarActive ? " active" : ""}`}>
        <div className="navs">
          <Link to="/assets" onClick={() => closeNav()}>
            Assets
          </Link>
          <Link to="/software" onClick={() => closeNav()}>
            Software
          </Link>
          <Link to="/images" onClick={() => closeNav()}>
            Images
          </Link>
          <Link to="/videos" onClick={() => closeNav()}>
            Videos
          </Link>
          <Link to="/games" onClick={() => closeNav()}>
            Games
          </Link>
          <Link to="/more" onClick={() => closeNav()}>
            More
          </Link>
          <Link to="/pricing" onClick={() => closeNav()}>
            Pricing
          </Link>
          <SignInButton text="Sign In" onClick={() => closeNav()} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
