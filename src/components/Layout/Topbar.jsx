import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
const Topbar = () => {
  return (
    <div className="bg-Asan-Shop-red text-white">
      <div className=" container mx-auto flex justify-between items-center py-1 px-1">
        <div className=" hidden md:flex flex-wrap h-10 items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-7 w-7" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-7 w-7" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaXTwitter className="h-7 w-7" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow"><span>WE ship the worldwide - Fast reliable and shipping!</span></div>
        <div className="text-sm hidden md:block"><a href="tel:+93730111428" className="hover:text-gray-300">+93 730 111 428</a></div>
      </div>
    </div>
  );
};

export default Topbar;
