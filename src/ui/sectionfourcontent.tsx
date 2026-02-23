import React from 'react'
import UrlInput from './urlinput';
import Iconcomponent from './iconcomponent';

const Sectionfourcontent = () => {
  return (
    <div className="bg-[#f0f1f5]  h-full relative dark:bg-black md:mt-0 mt-24 py-24 md:py-16 px-4 md:px-8 flex flex-col items-center justify-center gap-6 rounded-lg  w-full">
      <div className=" w-full mx-auto absolute top-0 left-0 -translate-y-1/2 px-4">
        <UrlInput />
      </div>
      <div className="flex flex-col items-center justify-center pt-12 md:pt-24 gap-6 mt-20 md:w-[70%]">
        <h1 className="text-3xl md:text-4xl  text-[#232127] font-bold text-center">
          Advanced Statistics
        </h1>
        <p className=" text-xl text-gray-400 font-medium md:w-[50%] text-center">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      {/* <div className="flex flex-col  gap-6 mt-12 md:w-[80%] relative font-sans w-[95%] items-center justify-between">
        <div className="hidden md:block  w-full h-2 bg-cyan-500/70 z-0"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <div className="w-full  absolute  -top- 12 left-0 md:translate-y-0 -translate-y-1/2 z-10">
            <Iconcomponent
              imgSrc="assets/icon-brand-recognition.svg"
              title="Brand Recognition"
              subtitle="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. "
            />
          </div>
          <Iconcomponent
            imgSrc="assets/icon-detailed-records.svg"
            title="Detailed Records"
            subtitle="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <Iconcomponent
            imgSrc="assets/icon-fully-customizable.svg"
            title="Fully Customizable"
            subtitle="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div> */}
      <div className="relative flex flex-col md:flex-row gap-6  md:w-[80%] font-sans w-[95%] items-center justify-between">
        {/* Cyan line */}
        <div className="hidden md:block absolute top-1/2 left-0 md:w-full md:h-2 w-2 h-full  bg-cyan-500/70 md:-translate-y-1/2"></div>

        <div className="relative z-10">
          <Iconcomponent
            imgSrc="assets/icon-brand-recognition.svg"
            title="Brand Recognition"
            subtitle="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. "
          />
        </div>

        <div className="relative z-10 md:mt-16">
          <Iconcomponent
            imgSrc="assets/icon-detailed-records.svg"
            title="Detailed Records"
            subtitle="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </div>

        <div className="relative z-10 md:mt-32">
          <Iconcomponent
            imgSrc="assets/icon-fully-customizable.svg"
            title="Fully Customizable"
            subtitle="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  );
}

export default Sectionfourcontent