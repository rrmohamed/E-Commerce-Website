
const LandingSubscribe = () => {
  return <>


<div className="bg-purple-100 py-16">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4 text-black">Subscribe to Our Newsletter</h2>
            <p className="mb-8 text-gray-600">Get the latest updates and exclusive offers</p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button className="bg-main text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


  </>
}
export default LandingSubscribe ;