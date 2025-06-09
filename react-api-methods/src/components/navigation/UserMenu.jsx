import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const UserMenu = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  if (isLoggedIn) {
    return (
      <div className="relative ml-3">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <img className="size-8 rounded-full" src={user?.avatar || 'https://via.placeholder.com/32'} alt="user" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
            <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700">Your Profile</Link>
            <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700">Settings</Link>
            <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700">Sign out</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex space-x-4">
      <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
      <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
    </div>
  );
};

export default UserMenu;
