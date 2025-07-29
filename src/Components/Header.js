import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((sotre) => sotre.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 pr-4">
      <div className="flex items-center gap-4 p-2">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="h-16 w-auto object-contain drop-shadow-md"
        />

        <div className="leading-tight">
          <h1 className="text-[#4A2B0F] text-[1.6rem] font-dancing font-bold italic tracking-wide">
            Aroma
          </h1>
          <h2 className="text-[#4A2B0F] text-[1.5rem] font-pacifico font-bold italic tracking-wide">
            Crave
          </h2>
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex flex-wrap items-center gap-6 text-gray-700 font-medium text-md">
          <li className="flex items-center gap-1">
            Online Status{" "}
            <span className="text-xl">{onlineStatus ? "🟢" : "🔴"}</span>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="hover:text-orange-500 transition-all duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="hover:text-orange-500 transition-all duration-200"
            >
              Contact Us
            </Link>
          </li>

          <li className="relative">
            <Link
              to="/Cart"
              className="flex items-center gap-2 hover:text-orange-600 transition-all duration-200"
            >
              <FaShoppingCart className="text-xl" />
            </Link>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-[2px] shadow-md">
                {cartItems.length}
              </span>
            )}
          </li>
          <li>
            <button
              className="bg-orange-300 hover:bg-orange-400 text-white font-semibold px-4 py-1 rounded-lg transition-all duration-200"
              onClick={() => {
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
