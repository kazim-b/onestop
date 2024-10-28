import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/searchBar/Search";
import Sign from "../../components/SignSection/Sign";
import Carousel from "../../components/carousel/Carousel";
import Ad from "../../components/ad/Ad";
import Footer from "../../components/footer/Footer";


const Home = () => {
  return (
    <>
      <Navbar />

      <div className="landing">
        <h1>
          <span style={{ color: "#FEC73F" }}>One Stop</span> Solution To All
          Your Problems
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          lectus eu mauris consectetur maximus sed nec ex. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Nullam semper posuere tincidunt. Vestibulum venenatis
          pharetra massa, eu.
        </p>
        <Search />
      </div>

      <Sign />
        <div className="spacing"></div>
      <Carousel headingText="Most Popular At One Stop" />
        <div className="spacing"></div>
      <Carousel headingText="Most Recents At One Stop" />

      <Ad.AdBig />

      <Footer />
    </>
  );
};

export default Home;
