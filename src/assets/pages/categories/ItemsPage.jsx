import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Ad from "../../components/ad/Ad";
import "./categoryPage.css"

// Data API
import productData from "../../api/productApi.js"

const SingleSection = (props) => {

    const [products, setProducts] = useState([]); // Store product data
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const itemsPerPage = 12;
    const maxButtons = 3;

    if(props.categoryName == "Assets"){
        useEffect(() => {    
              setProducts(productData); // Set the products from the local JS file
              setCurrentPage(1);
          },[props.categoryName]);
      } else{
        useEffect(() => {
            const filteredProducts = productData.filter(product =>
                product.category === props.categoryName
              );
            setProducts(filteredProducts); // Set the products from the local JS file
            setCurrentPage(1);
          },[props.categoryName]);
      }

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const currentProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

      // Divide products into a section, with 12 items
    const section1 = currentProducts.slice(0, 12);

    // Calculate the range of page buttons to display
    const calculateButtonRange = () => {
        const start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
        const end = Math.min(totalPages, start + maxButtons - 1);
        return { start, end };
    };

    const { start, end } = calculateButtonRange();

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const productClickCheck = (clickedProductId) => {
        // Store the id in localStorage
        localStorage.setItem('clickedProductId', clickedProductId);
      }
    
      useEffect(() => {
        productClickCheck();
      }, []);

  return (
    <>
        <div className="categoryContent">
        <div className="productContainer">
          {/* First section of product boxes */}
          <div className="productRow">
          {section1.map((productData) => (
                <Link to={`/products/${productData.id}`}>
                  <div className="productBox" key={productData.id} onClick={() => productClickCheck(productData.id)}>
                    {productData.name}
                  </div>
                </Link>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          {start > 1 && (
            <>
              <button onClick={() => handlePageChange(1)}>1</button>
              {start > 2 && <span>...</span>}
            </>
          )}
          {Array.from({ length: end - start + 1 }, (_, index) => (
            <button
              key={start + index}
              className={`${currentPage === start + index ? "clicked" : ""}`}
              onClick={() => handlePageChange(start + index)}
            >
              {start + index}
            </button>
          ))}
          {end < totalPages && (
            <>
              {end < totalPages - 1 && <span>...</span>}
              <button onClick={() => handlePageChange(totalPages)}>
                {totalPages}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

const DoubleSection = (props) => {

    const [products, setProducts] = useState([]); // Store product data
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const itemsPerPage = 24; // 24 items per page, 12 in each section
    const maxButtons = 3;
  
    // Simulate API call with local data
  
    if(props.categoryName == "Assets"){
      
      useEffect(() => {    
            setProducts(productData); // Set the products from the local JS file
            setCurrentPage(1);
        },[props.categoryName]);
    } else{
      useEffect(() => {
          const filteredProducts = productData.filter(product =>
              product.category === props.categoryName
            );
      
          setProducts(filteredProducts); // Set the products from the local JS file
          setCurrentPage(1);
        },[props.categoryName]);
    }
  
    // Calculate total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);
  
    // Get the products for the current page
    const currentProducts = products.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    // Divide products into two sections, each with 12 items
    const section1 = currentProducts.slice(0, 12);
    const section2 = currentProducts.slice(12, 24);
  
    // Calculate the range of page buttons to display
    const calculateButtonRange = () => {
      const start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
      const end = Math.min(totalPages, start + maxButtons - 1);
      return { start, end };
    };
  
    const { start, end } = calculateButtonRange();
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const productClickCheck = (clickedProductId) => {
      // Store the id in localStorage
      localStorage.setItem('clickedProductId', clickedProductId);
    }
  
    useEffect(() => {
      productClickCheck();
    }, []);

    return (
      <>
        <div className="categoryContent">
        <div className="productContainer">
          {/* First section of product boxes */}
          <div className="productRow">
            {section1.map((productData) => (
                <Link to={`/products/${productData.id}`}>
                  <div className="productBox" key={productData.id} onClick={() => productClickCheck(productData.id)}>
                    {productData.name}
                  </div>
                </Link>
            ))}
          </div>
        </div>

        <Ad.AdSmall />

        <div className="productContainer">
          {/* Second section of product boxes */}
          <div className="productRow">
            {section2.map((productData) => (
                <Link to={`/products/${productData.id}`}>
                  <div className="productBox" key={productData.id} onClick={() => productClickCheck(productData.id)}>
                    {productData.name}
                  </div>
                </Link>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          {start > 1 && (
            <>
              <button onClick={() => handlePageChange(1)}>1</button>
              {start > 2 && <span>...</span>}
            </>
          )}
          {Array.from({ length: end - start + 1 }, (_, index) => (
            <button
              key={start + index}
              className={`${currentPage === start + index ? "clicked" : ""}`}
              onClick={() => handlePageChange(start + index)}
            >
              {start + index}
            </button>
          ))}
          {end < totalPages && (
            <>
              {end < totalPages - 1 && <span>...</span>}
              <button onClick={() => handlePageChange(totalPages)}>
                {totalPages}
              </button>
            </>
          )}
        </div>
      </div>
      </>
    )
}

export default {SingleSection, DoubleSection}