const ButtonContainer = () => {
  const buttonNames = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.' ];
  return (
    <>
      { buttonNames.map((buttonsName => 
        <button classNameName="bg-gray-300 p-4 rounded text-xl font-semibold text-gray-700 hover:bg-gray-400 key = {buttonName.id}">{buttonsName}</button>
      )
      
      )}
         
    </>
  )
}

export default ButtonContainer