import ErrorMessage from "./ErrorMessage"
import FoodItems from "./FoodItems"
import Containers from "./Containers"
import FoodInput from "./FoodInput"
import { useState } from "react"

const Fragments = () => {
    // const foodItems = ["Dal", "Roti", "Salad" ]
    const [textShow, setTextShow] =  useState();
    const [foodItems, setFoodItems] = useState([
      "salad",
      "Green Vegetable",
      "Momo",
    ])

    const handleOnChange= (event) => {
      console.log(event.target.value)
      setTextShow (event.target.value);
    }
  
    
  return (
    <>
      <Containers>
        <h1>Healthy Food</h1>
        <ErrorMessage items= {foodItems} />
        <FoodInput handleOnChange = {handleOnChange} />
        <p>{textShow}</p>
        <FoodItems items= {foodItems} />
      </Containers>
      {/* <Containers>
        <p>Above is the list of Healthy foods that are good for your health</p>
      </Containers> */}
       
        
    </>
  )
}

export default Fragments