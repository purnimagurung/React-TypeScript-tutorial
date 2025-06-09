import React from 'react'

export const AddTodo = () => {
  return (
    <>
        
        <div classNameName="flex flex-col md:flex-row items-start gap-4 max-w-screen-lg mx-auto px-4">
            <div classNameName="flex- p-4">
                <input placeholder="Enter Todo Here" />
            </div>
            <div classNameName="md:flex-none p-4">
                <input type="date" />
            </div>
            <div classNameName="flex-1 md:flex-none md:w-1/6 lg:w-1/1 p-4">
                <button classNameName="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add
                </button>
            </div>
        </div>

    </>
  )
}
