import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CardContext";

const Payment = () => {

  const {cartId , clearUICart} =useContext(CartContext) ;
  const [isOnline, setIsOnline] = useState(false)


  const detectAllCall = () =>{
    if(isOnline){
      onlinePayment() ;
    }else{
      createCashOrder() ;
    }
  }

  const onlinePayment = (values)=>{
    const backendBody = {
      shippingAddress: values
    } ;
    axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}` , backendBody , {
      headers : {
        token : localStorage.getItem("userToken") 
      } , params : {
        url : "http://localhost:5173/"
      }
    })
    .then((res)=>{
      console.log("after online order" ,res);
      window.open(res.data.session.url , '_self');
      // clearUICart() ;
    })
    .catch((err)=>{
      console.log("after online order" , err);  
    })  
  }

  const createCashOrder = (values)=>{
    const backendBody = {
      shippingAddress: values
    } ;
    axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` , backendBody , {
      headers : {
        token : localStorage.getItem("userToken") 
      }
    })
    .then((res)=>{
      console.log("after cash order",res);
      clearUICart() ;
      
    })
    .catch((err)=>{
      console.log("after cash order",err);
      
    })  
  }

  const paymentFormik =useFormik({
    initialValues :{
      details : "" ,
      phone : "" ,
      city :""
    } ,
    // onSubmit : createCashOrder ,
    onSubmit : detectAllCall 
  })
  return <>
  
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-2 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Payment Details</h2>
                  <p className="text-gray-500">Please fill in your payment information</p>
                </div>

                <form onSubmit={paymentFormik.handleSubmit}  className="space-y-6">
                  <div className="flex flex-col">
                    <label htmlFor="details" className="text-sm font-medium text-gray-700 mb-1">Details</label>
                    <input value={paymentFormik.values.details} onBlur={paymentFormik.handleBlur} onChange={paymentFormik.handleChange}  type="text" name="details" id="details" className="px-4 py-3 border-2 focus:ring-2 focus:ring-purple-200 focus:border-purple-400 w-full text-sm border-gray-200 rounded-lg focus:outline-none transition-colors duration-200" placeholder="Enter payment details"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input value={paymentFormik.values.phone} onBlur={paymentFormik.handleBlur} onChange={paymentFormik.handleChange}  type="tel" name="phone" id="phone" className="px-4 py-3 border-2 focus:ring-2 focus:ring-purple-200 focus:border-purple-400 w-full text-sm border-gray-200 rounded-lg focus:outline-none transition-colors duration-200" placeholder="Enter your phone number"/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="city" className="text-sm font-medium text-gray-700 mb-1">City</label>
                    <input value={paymentFormik.values.city} onBlur={paymentFormik.handleBlur} onChange={paymentFormik.handleChange}  type="text" name="city" id="city" className="px-4 py-3 border-2 focus:ring-2 focus:ring-purple-200 focus:border-purple-400 w-full text-sm border-gray-200 rounded-lg focus:outline-none transition-colors duration-200" placeholder="Enter your city"/>
                  </div>
                  <div className="pt-6">
                    <button onClick={()=> setIsOnline(false)} type="submit" className="w-full px-6 py-4 bg-[#9333ea] text-white font-medium rounded-lg shadow-md hover:bg-[#8829dd] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]">
                      Cash Order
                    </button>
                    <button onClick={()=> setIsOnline(true)} type="submit" className="mt-3 w-full px-6 py-4 bg-[#9333ea] text-white font-medium rounded-lg shadow-md hover:bg-[#8829dd] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02]">
                      Online Payment
                    </button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  </>
}

export default Payment ;