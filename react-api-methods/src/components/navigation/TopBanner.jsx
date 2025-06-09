import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";

const TopBanner = () => {
  return (
    <div className="bg-gray-100 px-4 py-2 text-sm flex justify-between items-center">
      <div className="text-gray-700">
        🌟 Get 5% Off your first order, <span className="font-semibold text-orange-500">Promo: ORDER5</span>
      </div>
      <div className="flex items-center gap-6 text-gray-700">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          <span>Regent Street, A4, A4201, London</span>
          <button className="text-orange-500 ml-1 underline text-sm">Change Location</button>
        </div>
        <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded">
          <FaShoppingCart />
          <span>23 Items</span>
          <span>GBP 79.89</span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
