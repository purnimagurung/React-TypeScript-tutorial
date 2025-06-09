import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import TopBanner from "./TopBanner";
import NavLinks from "./NavLinks";
import SignupForm from "../auth/SignUpForm";
import { Dialog } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <TopBanner />

      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-black">
            Order<span className="bg-orange-500 text-white px-1 ml-1 text-sm align-top">UK</span>
          </div>

          <NavLinks />

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center bg-black text-white px-4 py-2 rounded-full"
          >
            <FaUserCircle className="mr-2" />
            Login/Signup
          </button>
        </div>
      </nav>

      {/* Modal for Signup */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white rounded p-6 shadow-xl w-full max-w-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-red-500 text-xl"
            >
              ✖
            </button>
            <SignupForm />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Navbar;
