import Items from './Items';

const FoodItems = ({items}) => {
    // const foodItems = ["Dal", "Roti", "Salad" ]
    const handleBuy = (foodItem) => {
     // Prevents default form submission
      // console.log(event);
      console.log(`${foodItem} being bought`);
    };
  

  return (
    <>
        <div classNameName="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {/* map methods */}
            {items.map((item) => (
               <Items 
               key= {item}  foodItem = {item} handleBuy = {handleBuy} 
               />
            ))}
        </div>
    </>
  );
};

export default FoodItems