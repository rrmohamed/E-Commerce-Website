
import {  createHashRouter } from "react-router-dom";
import Landing from "../Components/Landing/Landing";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import Products from "../Components/Products/Products";
import Brandes from "../Components/Brands/Brandes";
import Cart from "../Components/Cart/Cart";
import Categories from "../Components/Categories/Categories";
import Payment from "../Components/Payment/Payment";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Notfound from "../Components/Notfound/Notfound";
import Layout from "../Components/Layout/Layout";



const router = createHashRouter([
    {path : "" , element : <Layout/> , children : [
      {index : true, element : <Landing/> } ,
      {path : "products" , element : <ProtectedRoute><Products/></ProtectedRoute> } ,
      {path : "brands" , element :<ProtectedRoute><Brandes/></ProtectedRoute> } ,
      {path : "cart" , element :<ProtectedRoute><Cart/></ProtectedRoute> } ,
      {path : "categories" , element :<ProtectedRoute><Categories/></ProtectedRoute> } ,
      {path : "payment" , element :<ProtectedRoute><Payment/></ProtectedRoute> } ,
      {path : "productDetails/:id/:category" , element :<ProtectedRoute><ProductDetails/></ProtectedRoute> } ,
      {path : "register" , element : <Register/>} ,
      {path : "login" , element : <Login/>} ,
      {path : "*" , element : <Notfound/>} ,
    ]}
  ]) ;

  export default router ;