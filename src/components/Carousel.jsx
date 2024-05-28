import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'

const Carousel = () => {
   
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
      <Slider {...settings} className="d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <img src={img1} />
        </div>
        <div className="d-flex justify-content-center">
          <img src={img2} />
        </div>
        <div className="d-flex justify-content-center">
          <img src={img3} />
        </div>
      </Slider>
    );
  }

export default Carousel