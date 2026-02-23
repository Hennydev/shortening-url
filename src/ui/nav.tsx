import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex h-20 md:w-[80%] font-sans w-[95%] items-center justify-between md:px-4 px-2">
      <div className=" flex flex-row text-xl font-semibold hover:font-bold ">
        <img src="assets/logo.svg" alt="Logo" className="inline-block mr-12" />
        <div className="space-x-12 md:flex hidden">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Resources
          </a>
        </div>
      </div>
      <div className="space-x-12 md:flex items-center text-lg font-semibold hidden">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Log In
        </a>
        <button className="text-white bg-cyan-500/70 hover:bg-cyan-600 py-2 px-6 rounded-4xl hover:font-bold">
          Sign Up
        </button>
      </div>
      <img
        onClick={toggleMenu}
        src="assets/ham.svg"
        alt="Menu"
        className="inline-block md:hidden cursor-pointer w-6 h-6 "
      />
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full transition duration-300 ease-in-out transform bg-white shadow-md flex flex-col items-center py-4 space-y-4  md:hidden">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Resources
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Log In
          </a>
          <button className="text-gray-600 bg-cyan-500/70py-2 px-6 rounded-4xl hover:text-gray-900">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
