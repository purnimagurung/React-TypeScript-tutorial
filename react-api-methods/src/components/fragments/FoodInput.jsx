import React from 'react'

const FoodInput = ({handleOnChange}) => {
   
  return (
    <input 
    type="text" 
    placeholder='Enter the text'
    classNameName="mb-4 bg-gray-100 rounded p-4 text-right text-2xl font-mono font-semibold text-gray-700 focus:outline-none" 
    onChange={handleOnChange}
    /> 
  )
}

export default FoodInput