import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./categoryPage.css";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/searchBar/Search";
import Sign from "../../components/SignSection/Sign";
import Ad from "../../components/ad/Ad";
import Footer from "../../components/footer/Footer.jsx";
import ItemsPage from "./ItemsPage.jsx"



const CategoryPage = (props) => {
  return (
    <>
      <Navbar />

      <div className="searchSection">
        <Search />
      </div>

      <ItemsPage.DoubleSection categoryName={props.categoryName} />

      <Sign />

      <Ad.AdMid />

      <Footer />
    </>
  );
}

export default CategoryPage
