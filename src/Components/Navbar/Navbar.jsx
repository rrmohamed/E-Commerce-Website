import { Link, NavLink, useNavigate } from "react-router-dom";
import freshLogo from "../../assets/images/Aspire-Logo.png";
import { useContext, useState } from "react";
import { UserContext } from './../../Context/UserContext';
import { CartContext } from "../../Context/CardContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { userLogin, setUserLogin } = useContext(UserContext);
  const { numberOfCartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const logOut = () => {
    localStorage.removeItem("userToken");
    setUserLogin(null);
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-50 to-pink-50 sticky top-0 right-0 left-0 z-50 px-4">
        <div className="container mx-auto py-3 flex flex-col lg:flex-row justify-between items-center">
          {/* Navbar Header */}
          <div className="flex w-full justify-between items-center lg:w-auto">
            <Link to="">
              <img src={freshLogo} alt="" />
            </Link>
            <button
              className="lg:hidden text-gray-700 text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>

          {/* Navbar Links */}
          <div className={`flex flex-col lg:flex-row items-center gap-6 ${isOpen ? "block" : "hidden"} lg:flex w-full lg:w-auto`}>
            <ul className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-x-4">
              {userLogin ? (
                <>
                  <li><NavLink to="/products"> Products</NavLink></li>
                  <li><NavLink to="/brands"> Brands</NavLink></li>
                  <li>
                    <NavLink to="/cart" className="relative">
                      Cart
                      <div className="absolute top-[-14px] right-[-14px] bg-[#9333ea] text-white flex items-center justify-center size-5 rounded-full">
                        {numberOfCartItems}
                      </div>
                    </NavLink>
                  </li>
                  <li><NavLink to="/categories"> Categories</NavLink></li>
                </>
              ) : null}
            </ul>
          </div>

          {/* Social Media & Auth Links */}
          <div className={`flex flex-col lg:flex-row items-center gap-8 ${isOpen ? "block" : "hidden"} lg:flex w-full lg:w-auto`}>
            <ul className="flex items-center gap-3">
              <li><i className="fa-brands cursor-pointer fa-facebook"></i></li>
              <li><i className="fa-brands cursor-pointer fa-x-twitter"></i></li>
              <li><i className="fa-brands cursor-pointer fa-instagram"></i></li>
              <li><i className="fa-brands cursor-pointer fa-linkedin"></i></li>
            </ul>
            <ul className="flex items-center gap-3">
              {userLogin == null ? (
                <>
                  <li><NavLink to="/register">Register</NavLink></li>
                  <li><NavLink to="/login">LogIn</NavLink></li>
                </>
              ) : (
                <li onClick={logOut}>
                  <span className="cursor-pointer">Log Out</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
