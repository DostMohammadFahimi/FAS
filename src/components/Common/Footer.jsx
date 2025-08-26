import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 ">
        <div>
          <h3 className="text-xl text-gray-800 mb-4 ">Newslleter</h3>
          <p className="text-gray-500 mb-4">
            Be the first hear to new products, exclusive events , and online
            offers.
          </p>
          <p className="font-medium text-sm text-gray-700 mb-6">
            Sign up and get 10% off your first order.
          </p>
          {/* {newsllter form} */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-b border-l border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 text-sm rounded-r-md hover:bg-green-500 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* {shopping link} */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800  transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800  transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800  transition-colors">
                Men's Buttom Wear.
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800  transition-colors">
                Women's Buttom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* {Support link} */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800  transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800  transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800  transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800  transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* {fallow sections} */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Follow Us</h3>
          <div className="flex iten-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="-blank"
              rel="noopener onreffer"
            >
              <TbBrandMeta className="h-6 w-6 text-blue-800 hover:text-blue-400" />
            </a>
            <a
              href="https://www.Instagram.com"
              target="-blank"
              rel="noopener onreffer"
            >
              <IoLogoInstagram className="h-6 w-6 text-pink-800 hover:text-pink-400" />
            </a>
            <a
              href="https://www.X.com"
              target="-blank"
              rel="noopener onreffer"
              className="hover:text-gray-500"
            >
              <FaXTwitter className="h-6 w-6 " />
            </a>
          </div>
          <p className="text-gray-800">Call Us</p>
          <p>
            <FiPhoneCall className="h-6 w-6 inline-block mr-2 text-green-600 hover:text-green-800" />
            0730-111-428
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6 ">
        <p className="text-gray-600 text-sm tracking-tighter text-center">© 2025, Compile Tab. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
