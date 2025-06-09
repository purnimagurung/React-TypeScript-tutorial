
const Items = ({ foodItem, handleBuy }) => {
  const handleOnCLick = () => {
   handleBuy(foodItem);
  };

  
  
  return (
    <li classNameName="kg-span" > {foodItem}
    <button classNameName="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
    onClick={handleOnCLick}
    >
     buy
    </button>

    </li>
  )
}

export default Items      