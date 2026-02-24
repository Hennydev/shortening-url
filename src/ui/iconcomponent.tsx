import React from 'react'

type IconComponentProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
};

const Iconcomponent = ({ imgSrc, title, subtitle }: IconComponentProps) => {
  return (
    <div className=" relative flex flex-col md:items-start md:justify-start items-center justify-center gap-4  mt-12  w-full bg-white rounded-lg p-6 py-18">
<div className="
  h-20 w-20 md:h-24 md:w-24
  rounded-full
  bg-[#232127]
  flex items-center justify-center
  absolute -top-8
  left-1/2 -translate-x-1/2
  md:left-6 md:translate-x-0
">
        <img src={imgSrc} alt={title} className="w-8 h-8" />
      </div>

      <h2 className="text-xl pt-4 font-bold">{title}</h2>
      <p className="text-gray-400 font-semibold md:text-start text-center">{subtitle}</p>
    </div>
  );
}

export default Iconcomponent