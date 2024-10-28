import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // useParams for extracting the ID
import "./products.css";
import Navbar from "../../components/navbar/Navbar";
import Ad from "../../components/ad/Ad";
import Footer from "../../components/footer/Footer.jsx";
import ItemsPage from "../categories/ItemsPage.jsx";

// Data API
import productData from "../../api/productApi.js";

const Products = (props) => {
    const { productId } = useParams(); // Get product ID from the URL params
    const [product, setProduct] = useState(null); // State to hold the product details

    useEffect(() => {
        // Find the product with the given ID from the product data
        const foundProduct = productData.find((p) => p.id === Number(productId));
        setProduct(foundProduct); // Update the state with the found product
    }, [productId]); // Re-run whenever the productId changes

    
    if (!product) {
      return <div>Loading...</div>;
  }

    return (
        <>
            <Navbar />
            
            <div className="productDetails">
                <div className="left">
                    <div className="productImage"></div>
                </div>

                <div className="right">
                    <div className="headings">
                        <h3>{product.category}</h3>
                        <h1>{product.name}</h1>
                        <p>By <span><b>{product.editor}</b></span></p>
                    </div>

                    <div className="info">
                        <h2>ITEM DETAILS</h2>
                        <p>{product.description}</p>
                    </div>

                    <button>Download Now</button>
                </div>
            </div>

            <ItemsPage.SingleSection categoryName={product.category} />

            <Ad.AdMid />

            <Footer />
        </>
    );
};

export default Products;
