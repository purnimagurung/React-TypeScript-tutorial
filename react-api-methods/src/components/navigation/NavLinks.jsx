import React from "react";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "bg-orange-500 text-white px-4 py-2 rounded-full font-semibold"
    : "text-black hover:text-orange-500 px-4 py-2 font-medium";

const NavLinks = () => {
  return (
    <div className="md:flex space-x-4">
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to="/menu" className={navLinkClass}>
        Browse Menu
      </NavLink>
      <NavLink to="/offers" className={navLinkClass}>
        Special Offers
      </NavLink>
      <NavLink to="/restaurants" className={navLinkClass}>
        Restaurants
      </NavLink>
      <NavLink to="/track" className={navLinkClass}>
        Track Order
      </NavLink>
    </div>
  );
};

export default NavLinks;
