import React from 'react';
import Slider from  "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"

const Carousel = (props) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };
      return (
        <>
        <div className="carousel">
        <h1 className='carouselHeading'>
            {props.headingText}
        </h1>
        <div className="sliderMain">
            <div className="sliderContainer">
            <Slider {...settings}>
                <div>
                <h3>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
                <div>
                <h3>5</h3>
                </div>
                <div>
                <h3>6</h3>
                </div>
                <div>
                <h3>7</h3>
                </div>
                <div>
                <h3>8</h3>
                </div>
                <div>
                <h3>9</h3>
                </div>
                <div>
                <h3>10</h3>
                </div>
            </Slider>
            </div>
        </div>
        </div>
        </>
      );
}

export default Carousel
