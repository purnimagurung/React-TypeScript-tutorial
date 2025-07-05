const DealCard = ({ title, discount, image }) => (

  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="absolute top-2 right-2 bg-blue-900 text-white text-sm font-bold px-2 py-1 rounded">
      {discount}
    </div>
    <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 w-full">
      <div className="text-xs text-yellow-300">Restaurant</div>
      <div className="text-lg font-semibold leading-tight">{title}</div>
    </div>
  </div>
  
);

export default DealCard;