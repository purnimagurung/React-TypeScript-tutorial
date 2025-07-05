import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, count, image }) => {
  const linkPath = `/categories/${encodeURIComponent(title.toLowerCase())}`;

  return (
    <Link to={linkPath}>
    <div className="w-36 md:w-48 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 transform hover:scale-105">
        <img src={image} alt={title} className="w-full h-28 object-cover" />    
        <div className="bg-primary-dark text-white text-sm md:text-base p-2">
        <p className="font-semibold">{title}</p>
            <p className="text-xs">{count} Restaurants</p>
        </div>
    </div>
  </Link>
   
  );
};

export default CategoryCard;
