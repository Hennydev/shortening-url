import React from 'react'

const Hero = () => {
  return (
    <div className="md:w-full font-sans w-[95%] md:pl-4 flex md:flex-row flex-col items-center  justify-between py-12  md:py-24">
      <div className="md:hidden  block w-full text-center mb-12">
        <img src="assets/illustration-working.svg" alt="Hero Image" />
      </div>
      <div className="md:w-[40%] w-full text-center md:text-left  pl-[10%]  ">
        <h1 className="text-3xl md:text-6xl text-black/70 font-bold">
          More than just shorter links{" "}
        </h1>
        <p className="mt-4.5 text-xl text-gray-400 font-semibold ">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="mt-4 md:mt-8 bg-cyan-500/70 hover:bg-cyan-600 text-white font-bold md:py-3 py-2 px-6 md:px-10 text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </div>
      <div className="md:block hidden">
        <img src="assets/illustration-working.svg" alt="Hero Image" />
      </div>
    </div>
  );
}

export default Hero