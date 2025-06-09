import React from 'react'

const ErrorMessage = ({items}) => {
// const foodItems = ["Dal", "Roti", "Salad" ];

  return (
    <>
        {/* Conditional rendering based on foodItems array */}
        {items.length===0  &&  <h2>i am still hungry</h2> }
    </>
  )
}

export default ErrorMessage