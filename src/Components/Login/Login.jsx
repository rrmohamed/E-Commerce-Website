import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup" ;
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CardContext";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const [apiError , setApiError]=useState("") ; 
  const [isLoading , setIsLoading]=useState(false) ;
  const navigate = useNavigate() ;
  const {setUserLogin} = useContext(UserContext) ;

  const {getCartItems} = useContext(CartContext) ;
  
  const validationSchema = Yup.object().shape({
    email : Yup.string().email("Invalid Email").required("Email is required") ,
    password : Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/ , "Password must have capital, small letters and numbers  ").required("Password is required") ,
  }) ;

  const handleLogin = (formValues)=>{
    setIsLoading(true) ;
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , formValues)
    .then((apiResponse)=>{
      if(apiResponse.data.message === "success"){
        localStorage.setItem("userToken" , apiResponse.data.token) ;
        setUserLogin(apiResponse.data.token) ;
        getCartItems() ;
        setIsLoading(false) ;
        navigate("/") ;
        console.log(apiResponse);
      }
    })
    .catch( (apiResponse)=>{
      setIsLoading(false) ;
      setApiError(apiResponse.response.data.message)
      console.log(apiResponse);
    } )
  }

  const loginFormik = useFormik({
    initialValues : {
      email : "" ,
      password : "" ,
    } , 
    validationSchema ,
    onSubmit : handleLogin ,
  }) ;
  return <>


<div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-lg p-10 border border-white/20">
      

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9333ea] mb-3">Welcome Back</h1>
          <p className="text-purple-100 text-lg">Sign in to your account</p>
        </div>
        
        <form onSubmit={loginFormik.handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-purple-100">Email Address</label>
            <input value={loginFormik.values.email} onBlur={loginFormik.handleBlur} onChange={loginFormik.handleChange} 
              id="email" name="email" type="email"
              className="w-full px-4 py-3 bg-white/5 border border-purple-300/20 rounded-xl text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent"
              placeholder="Enter your email"
            />
            {loginFormik.errors.email && loginFormik.touched.email ? <>
              <div className=" ps-2 mt-1 text-sm text-red-800 rounded-md w-full  dark:text-red-400" role="alert">
              {loginFormik.errors.email}
            </div>
            </> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-purple-100">Password</label>
            <input value={loginFormik.values.password} onBlur={loginFormik.handleBlur} onChange={loginFormik.handleChange}
              id="password" name="password" type="password"
              className="w-full px-4 py-3 bg-white/5 border border-purple-300/20 rounded-xl text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent"
              placeholder="Enter your password"
            />
          {loginFormik.errors.password && loginFormik.touched.password ? <>
            <div className=" ps-2 mt-1 text-sm text-red-800 rounded-md w-full  dark:text-red-400" role="alert">
            {loginFormik.errors.password}
          </div>
        </> : null}
          </div>


              <button type="submit"   className="w-full py-3 px-4 border border-transparent rounded-xl text-base font-semibold text-white bg-[#9333ea] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9333ea] shadow-lg shadow-[#9333ea]/30">
                {isLoading  ?<ClipLoader color="white"/> : "Submit"}
              </button>

              {apiError? <div className=" ps-2 mt-1 text-sm text-red-800 rounded-md w-full  dark:text-red-400 bg-red-100" role="alert">
                  {apiError}
                </div>:null}
        </form>

        <p className="mt-8 text-center text-sm text-purple-100">
          Do not have an account?{" "}
          <Link to="/register" >
          <span className="font-semibold text-white hover:text-purple-200">
            Create one now
          </span>
          </Link>
        </p>
      </div>
    </div>


  </>
}
export default Login ;