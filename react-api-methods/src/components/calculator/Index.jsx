import ButtonContainer from "./ButtonContainer";

const Index = () => {
  return (
    <div classNameName="flex items-center justify-center min-h-screen bg-gray-200">
      <div classNameName="w-80 bg-white rounded-lg shadow-lg p-6">
        {/* <!-- Display --> */}
        <input 
        type="text" 
        value="0" 
        readonly 
        classNameName="mb-4 bg-gray-100 rounded p-4 text-right text-2xl font-mono font-semibold text-gray-700 focus:outline-none" />
        {/* <!-- Buttons --> */}
        <div classNameName="grid grid-cols-4 gap-2">
           <ButtonContainer />
        </div>
    </div>
</div>
  )
};

export default Index