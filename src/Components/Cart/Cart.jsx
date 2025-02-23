import { useContext } from "react"
import { CartContext } from "../../Context/CardContext"
// import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
      
const Cart = () => {


  const {allProducts , totalCartPrice , numberOfCartItems , setNumberOfCartItems , updateCartItem , removeCartItem} = useContext(CartContext)


  function handleUpdetCart (productId , count){
    updateCartItem(productId , count)
  }

  async function handleDelete (productId){
    const resFlag = await removeCartItem(productId) ;
    if(resFlag){
      toast.success("Product Removed successfully")
      setNumberOfCartItems(numberOfCartItems - 1)
    }else{
      toast.error("Failed to Remove Product")
    }
  }
  // const {getCartItems , removeCartItem ,updateCartItem} = useContext(CartContext) ;
  // const [cartDetails, setCartDetails] = useState(null)

  // async function getCartItemsHnadler(){
  //   let res = await getCartItems() ;
  //   setCartDetails(res.data) ;
  //   console.log(res.data) ;
  // }

  // useEffect(()=>{
  //   getCartItemsHnadler() ;
  // } , []) ;

  // async function removeItem(productId){
  //   const response = await removeCartItem(productId) ;
  //   setCartDetails(response.data) ;
  //   console.log(response) ;
  // }

  // async function updateQuantity(productId , count){
  //   const response = await updateCartItem(productId , count) ;
  //   setCartDetails(response.data) ;
  //   console.log(response) ;
  // }
  

  return <>
{/* {allProducts? <> */}
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-4xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea] to-purple-500 shadow-xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative bg-white/90 backdrop-blur-lg shadow-lg sm:rounded-3xl border border-purple-100">
            <div className="px-4 py-10 sm:p-20">
              <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shopping Cart
              </h1>
              
              <div className="space-y-6">
                {allProducts?.map(product => (
                  <div 
                    key={product._id} 
                    className="p-6 flex items-center bg-white/60 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group hover:bg-purple-50/50 border border-purple-50"
                  >
                    <img src={product.product.imageCover} alt={product.product.title} className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"/>
                    <div className="ml-6 sm:ml-8 flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{product.product.title}</h2>
                        <button onClick={()=>handleDelete(product.product._id)} className="text-sm text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Remove
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#9333ea] font-medium text-lg">{product.price} EGP</p>
                        <div className="flex items-center">
                          <button onClick={()=>handleUpdetCart(product.product._id , product.count - 1)} className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-[#9333ea] hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                            </svg>
                          </button>
                          <span className="mx-4 text-gray-900 font-medium text-lg w-6 text-center">{product.count}</span>
                          <button 
                            onClick={()=>handleUpdetCart(product.product._id , product.count + 1)}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-[#9333ea] hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-purple-100 pt-8">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-medium text-gray-900">Total Price</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {totalCartPrice} LE 
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-medium text-gray-900">Cart Items</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {numberOfCartItems}
                  </span>
                </div>
                <Link to='/payment'>
                  <button className="mt-8 w-full px-8 py-4 bg-gradient-to-r from-[#9333ea] to-purple-500 text-white text-lg font-medium rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-[1.02] hover:translate-y-[-2px]">
                    Proceed to Payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* </> : <>
  <div className="w-full h-full flex justify-center items-center min-h-80">
            <BeatLoader color="purple" />
          </div>
</>} */}


  </>
}

export default Cart ;