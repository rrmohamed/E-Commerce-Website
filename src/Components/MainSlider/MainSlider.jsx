import Slider from "react-slick";
import mainSlider1 from "../../assets/images/slider-image-3.jpeg" ;
import mainSlider2 from "../../assets/images/slider-image-2.jpeg" ;
import mainSlider3 from "../../assets/images/slider-image-1.jpeg" ;
import slide1 from "../../assets/images/grocery-banner.png" ;
import slide2 from "../../assets/images/grocery-banner-2.jpeg" ;
const MainSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows : false,
    pauseOnHover: false
  };
  return <>
<div className="container mx-auto ">

  <div className="row">
    <div className="w-3/4">
      <Slider {...settings}>
        <img src={mainSlider2} className="w-full h-[400px]" alt="" />
        <img src={mainSlider1} className="w-full h-[400px]" alt="" />
        <img src={mainSlider3} className="w-full h-[400px]" alt="" />
      </Slider>
    </div>
    <div className="w-1/4">
      <img src={slide1} className="w-full h-[200px]" alt="" />
      <img src={slide2} className="w-full h-[200px]" alt="" />
    </div>
  </div>
</div>
  
  </>
}

export default MainSlider ;