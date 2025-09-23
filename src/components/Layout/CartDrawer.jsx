import { IoMdClose } from "react-icons/io";
import CratContent from "../Cart/CratContent";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white transform shadow-lg transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* {close button} */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      {/* {Cart Contain with Scrollable area} */}
      <div className="flex-grow p-4 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CratContent />
      </div>
      {/* {cheakout fixed at the buttom } */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white rounded-lg py-3 font-semiblod hover:bg-gray-800 tansition">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping , taxes and discount codes calculated at Checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
