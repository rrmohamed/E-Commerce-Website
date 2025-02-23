import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup" ;
import { UserContext } from "../../Context/UserContext";
import { ClipLoader } from "react-spinners";

const Register = () => {
  const [apiError , setApiError]=useState("") ;
  const [isLoading , setIsLoading]=useState(false) ;
  const navigate = useNavigate() ;
  const {setUserLogin} = useContext(UserContext) ;
  
  const validationSchema = Yup.object().shape({
    name : Yup.string().min(5 , "min lenght is 5").max(20 , "max lenght is 20").required("Name is required"),
    email : Yup.string().email("Invalid Email").required("Email is required") ,
    password : Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/ , "Password must have capital, small letters and numbers ").required("password is required") ,
    rePassword : Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required"),
    phone : Yup.string().matches(/^01[0125][0-9]{8}$/,"Invalid Egyption phone number").required("Phone is required"),

  }) ;

  const handleRegister = (formValues)=>{
    setIsLoading(true) ;
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , formValues)
    .then((apiResponse)=>{
      if(apiResponse.data.message === "success"){
        navigate("/login") ;
        localStorage.setItem("userToken" , apiResponse.data.token) ;
        setUserLogin(apiResponse.data.token) ;
        setIsLoading(false) ;
        console.log(apiResponse);
        
      }
    })
    .catch( (apiResponse)=>{
      setIsLoading(false) ;
      setApiError(apiResponse.response.data.message)
      console.log(apiResponse);
    } )
  }

  const registerFormik = useFormik({
    initialValues : {
      name : "" ,
      email : "" ,
      password : "" ,
      rePassword : "" ,
      phone : ""
    } , 
    validationSchema ,
    onSubmit : handleRegister ,
  }) ;
  return <>




<div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-lg p-10 border border-white/20">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9333ea] mb-3">Create Account</h1>
        </div>
        
        <form onSubmit={registerFormik.handleSubmit} className="space-y-6">

          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-purple-100">
              Name
            </label>
            <input value={registerFormik.values.name} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange}
              id="name"
              name="name"
              type="text"
              className="w-full px-4 py-3 bg-white/5 border border-purple-300/20 rounded-xl text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent"
              placeholder="Enter your full name"
            />
        {registerFormik.errors.name && registerFormik.touched.name ? <>
          <div className=" ps-2 mt-1 text-sm text-red-800 rounded-md w-ful dark:text-red-400" role="alert">
            {registerFormik.errors.name}
          </div>
        </> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-purple-100">
              Email Address
            </label>
            <input value={registerFormik.values.email} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange}
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-3 bg-white/5 border border-purple-300/20 rounded-xl text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent"
              placeholder="Enter your email"
            />
        {registerFormik.errors.email && registerFormik.touched.email ? <>
          <div className=" ps-2 mt-1 text-sm text-red-800 rounded-md w-ful dark:text-red-400" role="alert">
            {registerFormik.errors.email}
          </div>
        </> : null}
          </div>


          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-purple-100">
              Password
            </label>
            <input value={registerFormik.values.password} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange}
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-3 bg-white/5 border border-purple-300/20 rounded-xl text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent"
              placeholder="Create a password"
            />
            {registerFormik.errors.password && registerFormik.touched.password ? <>
              <div className=" ps-2 mt-1 text-sm text-red-800 rounded-md w-ful dark:text-red-400" role="alert">
                {registerFormik.errors.password}
              </div>
            </> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="rePassword" className="block text-sm font-medium text-purple-100">
              Confirm Password
            </label>
            <input value={registerFormik.values.rePassword} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange}
              id="rePassword"
              name="rePassword"
              type="password"
              className="w-full px-4 py-3 bg-white/5 border border-purple-300/20 rounded-xl text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent"
              placeholder="Confirm your password"
            />
        {registerFormik.errors.rePassword && registerFormik.touched.rePassword ? <>
          <div className=" ps-2 mt-1 text-sm text-red-800 rounded-md w-ful dark:text-red-400" role="alert">
            {registerFormik.errors.rePassword}
          </div>
        </> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-purple-100">
              Phone Number
            </label>
            <input value={registerFormik.values.phone} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange}
              id="phone"
              name="phone"
              type="tel"
              className="w-full px-4 py-3 bg-white/5 border border-purple-300/20 rounded-xl text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent"
              placeholder="Enter your phone number"
            />
            {registerFormik.errors.phone && registerFormik.touched.phone ? <>
              <div className=" ps-2 mt-1 text-sm text-red-800 rounded-md w-ful dark:text-red-400" role="alert">
                {registerFormik.errors.phone}
              </div>
            </> : null}
          </div>

          <button type="submit" className="w-full py-3 px-4 border border-transparent rounded-xl text-base font-semibold text-white bg-[#9333ea] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9333ea] shadow-lg shadow-[#9333ea]/30">
            {isLoading  ?<ClipLoader color="white"/> : "Submit"}
          </button>

          {apiError?<div className=" py-2 ps-2 mt-1 text-sm text-red-800 rounded-md w-full dark:text-red-400 bg-red-100 " role="alert">
        {apiError}
      </div>:null}

        </form>

        <p className="mt-8 text-center text-sm text-purple-100">
          Already have an account?{' '}
          <Link to="/login" >
          <span className="font-semibold text-white hover:text-purple-200">
            Sign in instead
          </span>
          </Link>
        </p>
      </div>
</div>

  </>
}
export default Register ;