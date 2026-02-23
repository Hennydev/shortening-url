import React from "react";

const Getstarted = () => {
  return (
    <div className='bg-[url("/assets/bg-boost-desktop.svg")] bg-no-repeat h-64 bg-cover bg-center flex flex-col items-center justify-center gap-4 p-6   w-full bg-[#232127]'>
      <h1 className="text-3xl md:text-4xl mb-6 font-bold text-white text-center">
        Boost your links today
      </h1>
      <button className=" md:mt-0 bg-cyan-500/70 hover:bg-cyan-600 text-white font-bold py-3 md:py-4 px-6 md:px-12 text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105">
        Get Started
      </button>
    </div>
  );
};

export default Getstarted;
