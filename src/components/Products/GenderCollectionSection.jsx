import { Link } from "react-router-dom";
import mcs from "../../assets/mens-collection.webp";
import wcs from "../../assets/wcs.jpg";
const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* {women's collection} */}
        <div className="relative flex-1">
          <img
            src={wcs}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="bg-white absolute bottom-8 left-8 bg-opacity-95 p-4 rounded-md">
            <h2 className="text-2xl text-gray-900 font-bold ">
              Women's Collections
            </h2>
            <Link
              to="/collections/all?gender==Women"
              className="text-gray-900 underline"
            >
              Shop
            </Link>
          </div>
        </div>
        {/* {Men's Collection} */}
         <div className="relative flex-1">
          <img
            src={mcs}
            alt="Men's Collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="bg-white absolute bottom-8 left-8 bg-opacity-95 p-4 rounded-md">
            <h2 className="text-2xl text-gray-900 font-bold ">
              Men's Collections
            </h2>
            <Link
              to="/collections/all?gender==Men"
              className="text-gray-900 underline"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
