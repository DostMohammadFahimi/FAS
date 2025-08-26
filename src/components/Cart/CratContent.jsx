import { RiDeleteBin5Line } from "react-icons/ri";
const CratContent = () => {
  const CartProducts = [
    {
      productId: "1",
      name: "T-Shirt",
      size: "M",
      color: "blue",
      quantity: 1,
      price: 300,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: "2",
      name: "Jense",
      size: "L",
      color: "green",
      quantity: 1,
      price: 300,
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {CartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 rounded object-cover mr-4 "
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size:{product.size} | color:{product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border text-xl font-medium px-2 py-1 rounded">
                  -
                </button>
                <span className="mx-3">{product.quantity}</span>
                <button className="border text-xl font-medium px-2 py-1 rounded">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-medium">{product.price.toLocaleString()} Af</p>
            <button>
              <RiDeleteBin5Line className="h-6 w-6 mt-2 text-gray-700 hover:text-red-700" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CratContent;
