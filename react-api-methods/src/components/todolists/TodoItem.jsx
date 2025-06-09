
const TodoItem = ({ todoName,todoDate }) => {
  // const todoName = "Go to College";
  // const todoDate = "4/5/2024"; 

  return (
    <>
        <div classNameName="flex flex-col md:flex-row items-start gap-4 max-w-screen-lg mx-auto px-4">
            <div classNameName="flex- p-4">
            {todoName}
            </div>
            <div classNameName="md:flex-none p-4">
           {todoDate}
            </div>
            <div classNameName="flex-1 md:flex-none md:w-1/6 lg:w-1/1 p-4">
                <button classNameName="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
                </button>
            </div>
        </div>
    </>
  )
}

export default TodoItem