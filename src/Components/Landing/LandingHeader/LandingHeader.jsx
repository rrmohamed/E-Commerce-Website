import { ChevronRight } from "lucide-react";
import landingheader from "../../../assets/images/hero5.webp" ;
import { Link } from "react-router-dom";

function LandingHeader() {
  return <>
          <div className="py-20 relative min-h-[600px] bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-12 md:py-0 h-full">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0">
            <div className="w-full md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Discover Your Style, <br />
                <span className="text-purple-600">Elevate Your Life</span>
              </h1>
              {/* <p className="text-lg md:text-xl text-gray-600 mb-8">
                Explore our curated collection of premium products designed to bring elegance to your everyday life.
              </p> */}
              <Link to="/products">
                <button className="mt-10 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-purple-800 hover:to-pink-800 transition-colors flex items-center justify-center sm:justify-start">
                  Shop Now <ChevronRight className="ml-2" size={20} />
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img 
                src={landingheader}
                alt="Shopping Experience"
                className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  </>
}

export default LandingHeader ;