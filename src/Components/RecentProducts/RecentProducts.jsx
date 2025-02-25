// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { Link } from "react-router-dom";
import { BarLoader, BeatLoader } from "react-spinners";
import useProducts from "../../Hooks/useProducts";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CardContext";
import toast from 'react-hot-toast';
import { ShoppingBag } from "lucide-react"


const RecentProducts = () => {

  let {addToCart , numberOfCartItems , setNumberOfCartItems} = useContext(CartContext) ; 
  const [isloadingAdd, setIsloadingAdd] = useState(false)

  
  let { data , isLoading , isError , error} = useProducts() ;
  if(isLoading){
    return <div className="w-full h-full flex justify-center items-center py-20">
      <BeatLoader color="purple" />
    </div>
  } ;
  
  if(isError){
    return <div className="w-full h-full flex justify-center items-center">
      {error}
    </div>
  } ;
  

  // const [recentProducts, setRecentProducts] = useState([])
  // const getRecentProducts = () =>{
    //   axios.get("https://ecommerce.routemisr.com/api/v1/products")
    //   .then(({data})=>{
  //     setRecentProducts(data.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error);  
  //   })
  // }
  // useEffect(()=>{
  //   getRecentProducts() ;
  // } , [])
  
    const addProduct = async(productId)=>{
      setIsloadingAdd(true) ;
    let resFlag = await  addToCart(productId) ;
    console.log(resFlag) ;
    if(resFlag){
      toast.success("Product Added Sucessfuly" , {
        position :"bottom-center" ,
        duration : 3000
      })
      setIsloadingAdd(false) ;
      setNumberOfCartItems(numberOfCartItems + 1)
    }else{
      toast.error("Product Added error" , {
        position :"bottom-center" ,
        duration : 3000
      })
      // 
    }
    
    };
  return <>
  <div className="container mx-auto px-4">
  <div className="text-center my-10">
    <div className="flex items-center justify-center mb-4">
      <ShoppingBag className="text-[#9333ea] w-10 h-10 mr-3" />
      <h1 className="text-5xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Premium Collection
      </h1>
    </div>
    <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
      Discover our curated selection of exceptional footwear, crafted for those who appreciate refined elegance
    </p>
  </div>

  <div className="flex flex-wrap -mx-3"> 
    {data?.data.data.map((product) => {
      return (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/6 px-3 mb-6">
          <div className="product">
            <Link to={`/productDetails/${product.id}/${product.category.name}`}>
              <img src={product.imageCover} alt={product.title} />
              <div>
                <span className="font-light text-main">{product.category.name}</span>
                <h2 className="text-lg font-sm">{product.title.split(" ").slice(0, 2).join(" ")}</h2>
              </div>
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-sm font-bold">{product.price} EGP</h1>
                <div>
                  {product.ratingsAverage} <i className="fa-solid fa-star rating-color"></i>
                </div>
              </div>
            </Link>
            <button onClick={() => addProduct(product.id)} className="btn mt-2">
              {isloadingAdd ? (
                <div className="py-2 flex items-center justify-center">
                  <BarLoader color="white" />
                </div>
              ) : (
                "Add To Cart"
              )}
            </button>
          </div>
        </div>
      );
    })}
  </div>
</div>

  </>
}
export default RecentProducts ;