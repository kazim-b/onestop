import React from 'react'
import Slider from  "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css"

const Testimonial = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };

  return (
    <>
        <div className="testimonial">
        <div className="testimonialContainer">
            <h1>What They Say About Us?</h1>
            <div className="reviews">
            <Slider {...settings}>
                <div className='individualReview'>
                    <div className="innerContainer">
                        <div className="profilePhoto"></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed.</p>
                </div>
                
                <div className='individualReview'>
                    <div className="innerContainer">
                        <div className="profilePhoto"></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed.</p>
                </div>

                <div className='individualReview'>
                    <div className="innerContainer">
                        <div className="profilePhoto"></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed.</p>
                </div>

                <div className='individualReview'>
                    <div className="innerContainer">
                        <div className="profilePhoto"></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed.</p>
                </div>

                <div className='individualReview'>
                    <div className="innerContainer">
                        <div className="profilePhoto"></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed.</p>
                </div>

                <div className='individualReview'>
                    <div className="innerContainer">
                        <div className="profilePhoto"></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lectus eu mauris consectetur maximus sed.</p>
                </div>
            </Slider>
            </div>
        </div>
        </div>
    </>
  )
}

export default Testimonial
