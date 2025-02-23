import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BeatLoader } from "react-spinners"

const Brandes = () => {


  const getAllBrands = () =>{
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  }

  const {data , isLoading } = useQuery({
    queryKey : "brands" , 
    queryFn: getAllBrands ,
    staleTime : 8000
  })

  return <>



<div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-20 px-4">
      <div className="max-w-[1920px] mx-auto">
        <header className="text-center mb-24">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-8 relative">
            <span className="relative inline-block">
              Premium Brands
              <div className="absolute -bottom-4 left-0 right-0 h-2 bg-[#9333ea] opacity-30 rounded-full transform -rotate-1"></div>
            </span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exclusive collection of world-class brands
          </p>
        </header>

        {isLoading? <>
          <div className="w-full h-full flex justify-center items-center">
            <BeatLoader color="purple" />
          </div></>
           :<><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data?.data.data.map((brand) => (
            <div
              key={brand._id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#9333ea] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="p-8">
                <div className="h-32 flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain relative z-10 transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#9333ea] transition-colors duration-300">
                    {brand.name}
                  </h3>
                  <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#9333ea] to-[#9333ea]/80 text-white rounded-full text-base font-medium shadow-lg shadow-purple-200/50">
                    {brand.slug}
                  </div>
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

export default Brandes