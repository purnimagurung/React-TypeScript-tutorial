// src/components/layouts/MainLayout.jsx
import React from 'react';
import Navbar from '../navigation/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
