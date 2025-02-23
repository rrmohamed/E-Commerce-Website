import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import { BeatLoader } from "react-spinners"

const Categories = () => {
  const getCategories = ()=>{
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  }

  const {data , isLoading} = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 8000,
  })
  return <>
    


    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <ShoppingBag className="text-[#9333ea] w-10 h-10 mr-3" />
            <h1 className="text-5xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Shop by Category
            </h1>
          </div>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated collection of premium products across various categories
          </p>
        </div>

        {/* Categories Grid */}
        {isLoading ?<>
          <div className="w-full h-full flex justify-center items-center">
            <BeatLoader color="purple" />
          </div></> : <>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.data.data.map((category, index) => (
            <div key={category._id} className="opacity-0 animate-fade-up" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
              


                <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Background Image */}
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  
                  <h3 className="text-3xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:translate-x-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-200 mb-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {category.slug}
                  </p>
                  
                  {/* Button */}
                    <Link to= "/products">
                      <button className="inline-flex items-center gap-2 bg-[#9333ea] text-white px-6 py-3 rounded-xl transition-all duration-300 hover:bg-opacity-90 transform group-hover:translate-x-2 shadow-lg hover:shadow-purple-500/25">
                          <span className="font-medium">Shop Now</span>
                          <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                </div>
              </div>


            </div>
          ))}
        </div>
        
        </>}
      </div>
    </div>

  </>
}

export default Categories