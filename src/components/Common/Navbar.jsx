import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div>
          <Link to="/" className="text-2xl ml-6 font-bold text-gray-800">
            Tashil
          </Link>
        </div>
        <div className="space-x-6 md:flex hidden">
          <Link
            to="#"
            className="text-gray-700 text-sm font-medium uppercase hover:text-black"
          >
            MEN
          </Link>
          <Link
            to="#"
            className="text-gray-700 text-sm font-medium uppercase hover:text-black"
          >
            WOMEN
          </Link>
          <Link
            to="#"
            className="text-gray-700 text-sm font-medium uppercase hover:text-black"
          >
            TOP WEAR
          </Link>
          <Link
            to="#"
            className="text-gray-700 text-sm font-medium uppercase hover:text-black"
          >
            BUTTOM WEAR
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 | text-xs bg-Tashil-red text-white rounded-full px-2 py-0.5">
              7
            </span>
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
