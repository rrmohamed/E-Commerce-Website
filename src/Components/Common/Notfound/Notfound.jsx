import { Link } from "react-router-dom";

const Notfound = () => {
  return <>
  
  <div className="min-h-80 bg-gradient-to-r from-purple-50 to-pink-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-9xl font-bold text-[#9333ea] mb-4">404</h1>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Page not found</h2>
          <p className="text-gray-600 text-lg">Sorry, we could not find the page you are looking for. It might have been moved or does not exist.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <p className="bg-[#9333ea] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200 w-full sm:w-auto">
                Go back home
              </p>
              
            </Link>

          </div>
        </div>
        
  
      </div>
    </div>

  </>
}
export default Notfound ;