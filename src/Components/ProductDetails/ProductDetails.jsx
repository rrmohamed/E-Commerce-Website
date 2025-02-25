import axios from "axios" ;
import { useContext, useEffect, useState } from "react" ;
import { Link, useParams } from "react-router-dom" ;
import Slider from "react-slick";
import { BarLoader, BeatLoader } from "react-spinners";
import { CartContext } from "../../Context/CardContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true ,
    }
  const { id ,category } = useParams() ;
  // category = product.category.name ;
  const [productDeatils, setProductDeatils] = useState() ;
  const [relatedProducts, setRelatedProducts] = useState() ;

  const [isloadingAdd, setIsloadingAdd] = useState(false)
  const {addToCart , numberOfCartItems , setNumberOfCartItems} = useContext(CartContext) ;

   const handleAddProduct =async (productId) =>{
    setIsloadingAdd(true)
    const resFlag = await addToCart(productId) ;
    console.log(resFlag) ;
    if(resFlag){
      toast.success("Added Product Sucessfuly" , {
        position :"bottom-center" ,
        duration : 3000
      })
      setIsloadingAdd(false)
      setNumberOfCartItems(numberOfCartItems + 1)
    }else{
      toast.error("Adding product error" , {
        position :"bottom-center" ,
        duration : 3000
      })
      // 
    }
   }

  const getProductDetails = (id)=>{
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then(({data})=>{
      setProductDeatils(data.data) ;
      // console.log(data.data) ;
    })
    .catch((error)=>{
      console.log(error);  
    })
  }
  const getRelatedProducts = (category)=>{
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then(({data})=>{
      const allData = data.data ;
      const related = allData.filter((product)=> product.category.name == category);
      // console.log(related) ;
      setRelatedProducts(related) ;
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
useEffect(()=>{
  getProductDetails(id) ;
  getRelatedProducts(category)
},[id , category]) ;

  return <>

  {relatedProducts && relatedProducts ?<>
      <div className="row">
        <div className="w-1/4">
        <Slider {...settings}>    
          {productDeatils?.images.map((src)=> <img className="w-full" key={src} src={src} alt={productDeatils?.title} /> )}
        </Slider>
        </div>
        <div className="w-3/4  ">
          <div className="mx-6">
            <h3 className="text-lg mb-6">{productDeatils?.title}</h3>
            <p className="font-light" > {productDeatils?.description} </p>
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-md font-bold" >{productDeatils?.price} EGP</h1>
              <div className=""> {productDeatils?.ratingsAverage} <i className="fa-solid fa-star rating-color"></i> </div>
            </div>
            <button onClick={()=>handleAddProduct(productDeatils._id)} className="btn mt-4 rounded-md">
              {isloadingAdd? <>
                <div className=" py-2 flex items-center justify-center">
                        <BarLoader color="white"/>
                      </div>
              </>:"Add To Cart"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-4 gap-4">
  {relatedProducts.map((product) => (
    <div key={product.id} className="px-3 py-8">
      <div className="product">
        <Link to={`/productDetails/${product.id}/${product.category.name}`}>
          <img src={product.imageCover} alt={product.title} />
          <div>
            <span className="font-light text-main">{product.category.name}</span>
            <h2 className="text-lg font-sm">
              {product.title.split(" ").slice(0, 2).join(" ")}
            </h2>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-sm font-bold">{product.price} EGP</h1>
            <div>
              {product.ratingsAverage} <i className="fa-solid fa-star rating-color"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  ))}
</div>

  </>:<>
    <div className="w-full h-full flex justify-center items-center min-h-72 py-20">
        <BeatLoader color="purple" />
    </div>
  </>}
  </>
}
export default ProductDetails ;