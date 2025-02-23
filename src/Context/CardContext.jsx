
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext() ;
export default function CardContextProvider ({children}) {

  const [allProducts, setAllProducts] = useState(null) ;
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartId, setCartId] = useState(null)


  const clearUICart = () =>{
    setAllProducts(null) ;
    setTotalCartPrice(0);
    setNumberOfCartItems(0);
    setCartId(null) ;
  }  

  const headers = {
    token : localStorage.getItem("userToken"),
  } ;

  
   const addToCart =async ( productId ) =>{
    return axios.post("https://ecommerce.routemisr.com/api/v1/cart" , {
      productId
    } , {
      headers
    })
    .then((response)=>{
      // setAllProducts(response.data.data.products);
      // setTotalCartPrice(response.data.data.totalCartPrice) ;
      // setNumberOfCartItems(response.data.numOfCartItems) ;
      getCartItems();
      return true ;
    })
    .catch((error)=>{
      console.log(error);
      return false ;
      
    }) ;
  }
  
  const getCartItems = async ()=>{
    return axios.get("https://ecommerce.routemisr.com/api/v1/cart" , {
      headers ,
    })
    .then((response)=>{
      setAllProducts(response.data.data.products);
      setTotalCartPrice(response.data.data.totalCartPrice) ;
      setNumberOfCartItems(response.data.numOfCartItems) ;
      setCartId(response.data.data._id)
      // return response ;
    })
    .catch((error)=>{
      console.log(error);
      // return false ;
      
    }) ;
  }

  useEffect(()=>{
    getCartItems() ;
  } ,[]) ;

  const removeCartItem = async(productId)=>{
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {
      headers
    })
    .then((response)=>{
      setAllProducts(response.data.data.products);
      setTotalCartPrice(response.data.data.totalCartPrice) ;
      setNumberOfCartItems(response.data.numOfCartItems) ;
      return true ;

    })
    .catch((error)=>{

      console.log(error);
      return false ;
    })
  }

  const updateCartItem = async (productId , count )=>{
      axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
      count : count
    } , {
      headers
    })
    .then((response)=>{
      setAllProducts(response.data.data.products);
      setTotalCartPrice(response.data.data.totalCartPrice) ;
      setNumberOfCartItems(response.data.numOfCartItems) ;
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return <CartContext.Provider value={{addToCart , getCartItems , removeCartItem , updateCartItem , allProducts , totalCartPrice , numberOfCartItems , setNumberOfCartItems , cartId , clearUICart}}>
    {children}
  </CartContext.Provider>
}








