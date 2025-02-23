// import { createBrowserRouter, HashRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories";
import Brandes from './Components/Brands/Brandes';
import { UserContextProvider } from "./Context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from './../node_modules/@tanstack/react-query-devtools/src/production';
import CardContextProvider from "./Context/CardContext";
import { Toaster } from "react-hot-toast";
import Products from "./Components/Products/Products";
import Landing from "./Components/Landing/Landing";
import Payment from "./Components/Payment/Payment";
import { Offline } from "react-detect-offline";
import { createHashRouter, RouterProvider } from 'react-router-dom';

const App = () => {

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

  const query = new QueryClient() ;

  return <>
    <QueryClientProvider client={query}>
      <UserContextProvider>
        <CardContextProvider>
          <RouterProvider router={router} />
            <Toaster/>
        </CardContextProvider>  
          <ReactQueryDevtools/>
      </UserContextProvider>
    </QueryClientProvider>

    <Offline>
      <div className="bg-red-600 text-white p-5 rounded-xl text-center fixed bottom-5 left-5">
        <h2> You Are Offline , Internet corrupted </h2>
      </div>
    </Offline>
  </>
}

export default App ;