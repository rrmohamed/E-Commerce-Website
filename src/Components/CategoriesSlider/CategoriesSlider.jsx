import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const CategoriesSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: true
  };

  const[categories , setCategories] = useState([]) ;

  const getCategories = ()=>{
    axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    .then(({data})=>{
      // console.log(data.data);
      setCategories(data.data) ;
    })
    .catch(()=>{})
  } 
  useEffect(()=>{
    getCategories() ;
  }, [])
  return <>
  <div className="container mx-auto ">
    <div className=" py-3">
      <h2 className="text-xl my-3  text-main">Shop Popular Categories</h2>
      <Slider {...settings}>
          {categories.map((category)=> <div className="" key={category._id}> 
            <img className="img-category-slider w-full" src={category.image} alt={category.name} />
            <h5 className="text-center font-light text-main mt-2" > {category.name} </h5>
          </div> )}
      </Slider>
    </div>

  </div>
  </>
}

export default CategoriesSlider ;