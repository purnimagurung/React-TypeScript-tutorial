import  { useState } from "react";
import DealCard from "../dealOffers/DealCard";

import img1 from "../../../assets/images/1.png";
import img2 from "../../../assets/images/2.png";
import img3 from "../../../assets/images/3.png";

const deals = [
  {
    id: 1,
    title: "Chef Burgers London",
    discount: "-40%",
    image: img1,
    category: "Pizza & Fast food",
  },
  {
    id: 2,
    title: "Grand Ai Cafe London",
    discount: "-20%",
    image: img2,
    category: "Vegan",
  },
  {
    id: 3,
    title: "Butterbrot Café London",
    discount: "-17%",
    image: img3,
    category: "Pizza & Fast food",
  },
];

const categories = ["Vegan", "Sushi", "Pizza & Fast food", "others"];

const DealSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pizza & Fast food");

  const filteredDeals = deals.filter(
    (deal) => deal.category === selectedCategory
  );

  return (
    <section className="px-6 py-10 bg-white">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">
          Up to <span className="text-blue-800">-40%</span> 🎉 Order.uk exclusive deals
        </h2>
        <div className="flex gap-6 mb-6">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedCategory(tab)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors duration-300 ${
                tab === selectedCategory
                  ? "bg-orange-100 border-orange-500 text-orange-600"
                  : "border-gray-300 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDeals.map((deal) => (
          <DealCard key={deal.id} {...deal} />
        ))}
      </div>
    </section>
  );
};

export default DealSection;
