import { useState } from "react";
import logo from '../../assets/Logo.png'
import {
  HiBars3BottomRight,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import CartDrawer from "../Layout/CartDrawer";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div>
          <Link to="/">
            <img src={logo} alt="Tashil logo"  className="w-20 h-14"/>
          </Link>
        </div>
        <div className="space-x-6 md:flex hidden">
          <Link
            to="/collections/all"
            className="text-gray-700 text-lg font-medium uppercase hover:text-black"
          >
            MEN
          </Link>
          <Link
            to="#"
            className="text-gray-700 text-lg font-medium uppercase hover:text-black"
          >
            WOMEN
          </Link>
          <Link
            to="#"
            className="text-gray-700 text-lg font-medium uppercase hover:text-black"
          >
            TOP WEAR
          </Link>
          <Link
            to="#"
            className="text-gray-700 text-lg font-medium uppercase hover:text-black"
          >
            BUTTOM WEAR
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="profile" className="hover:text-black">
            <HiOutlineUser className="h-8 w-8 text-gray-700" />
          </Link>
          <button
            className="relative hover:text-black"
            onClick={toggleCartDrawer}
          >
            <HiOutlineShoppingBag className="h-8 w-8 text-gray-600" />
            <span className="absolute -top-1 | text-xs bg-Tashil-red text-white rounded-full px-2 py-0.5">
              7
            </span>
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-8 w-8 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* {mobile navigation} */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white transform shadow-lg transition-transform duration-300 flex flex-col z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">Menu</h1>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              TOP Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Buttom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
