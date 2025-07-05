import CategoryCard from "./CategoryCard"
import img4 from "../../../assets/images/4.png"
import img5 from "../../../assets/images/5.png"
import img6 from "../../../assets/images/6.png"
import img7 from "../../../assets/images/7.png"
import img8 from "../../../assets/images/8.png"
import img9 from "../../../assets/images/9.png"
import img10 from "../../../assets/images/7.png"
import img11 from "../../../assets/images/8.png"
import img12 from "../../../assets/images/9.png"


const categories = [
    { title: "Burgers & Fast food", count: 21, image: img4 },
    { title: "Salads", count: 32, image: img5 },
    { title: "Pasta & Casuals", count: 4, image: img6 },
    { title: "Pizza", count: 32, image: img7 },
    { title: "Breakfast", count: 4, image: img9 },
    { title: "Soups", count: 32, image: img8 },
    { title: "Pizza", count: 32, image: img10 },
    { title: "Breakfast", count: 4, image: img11 },
    { title: "Soups", count: 32, image: img12 },
    
]

const PopularCategoriesSection = () => 
   (
      <section className="my-8 px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Order.uk Popular Categories 🥳</h2>
        <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
            ))
            }
    
        </div>
        </section>
  )


export default PopularCategoriesSection