import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return <>
  
  <footer className=" bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
              <p className="text-gray-400 mb-4"> We are dedicated to providing the best shopping experience with premium products and exceptional service.</p>
              <div className="flex space-x-4">
                <Facebook className="hover:text-purple-500 cursor-pointer" size={20} />
                <Twitter className="hover:text-purple-500 cursor-pointer" size={20} />
                <Instagram className="hover:text-purple-500 cursor-pointer" size={20} />
                <Youtube className="hover:text-purple-500 cursor-pointer" size={20} />
              </div>
            </div>
            <div>
              <h3 className=" font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 ">
                <li><Link to="/products" className=" text-light cursor-pointer">Products</Link></li>
                <li><Link to="/brands" className=" text-light cursor-pointer">Brands</Link></li>
                <li><Link to="/cart" className=" text-light cursor-pointer">Cart</Link></li>
                <li><Link to="/categories" className=" text-light cursor-pointer">Categories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a className="text-light cursor-pointer">FAQ</a></li>
                <li><a className="text-light cursor-pointer">Shipping Policy</a></li>
                <li><a className="text-light cursor-pointer">Returns & Exchanges</a></li>
                <li><a className="text-light cursor-pointer">Track Order</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="mr-2" size={20} />
                  <span> Cairo, Egypt</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2" size={20} />
                  <span>+20 1110289397</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2" size={20} />
                  <span>mohamedabdelkareem120@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Aspire Shopping. All rights reserved.</p>
          </div>
        </div>
      </footer>
  </>
}

export default Footer