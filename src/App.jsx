import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './assets/pages/Home/Home.jsx';
import About from './assets/pages/About/About.jsx';
import Contact from './assets/pages/Contact/Contact';
import CategoryPage from './assets/pages/categories/CategoryPage.jsx';
import Products from './assets/pages/products/Products.jsx';

// Categories API
import categories from "./assets/api/categoryApi.js";
import productData from "./assets/api/productApi.js";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when route changes
  }, [location]);

  return null; // This component doesn't render anything
};

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {categories.map((category) => (
          <Route
            key={category.id}
            path={category.path}
            element={<CategoryPage categoryName={category.name} />}
          />
        ))}

        {/* Dynamic route for products */}
        {productData.map((product) => (
        <Route 
            key={product.id} 
            path="/products/:productId" 
            element={<Products />}  
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
