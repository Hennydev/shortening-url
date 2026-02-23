import React from 'react'

type IconComponentProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
};

const Iconcomponent = ({ imgSrc, title, subtitle }: IconComponentProps) => {
  return (
    <div className=" relative flex flex-col items-start justify-start gap-4 mt-12  w-full bg-white rounded-lg p-6 py-18">
      <div className="h-16 md:h-24 md:w-24 w-16 rounded-full bg-[#232127] flex items-center justify-center  absolute -top-8">
        <img src={imgSrc} alt={title} className="w-8 h-8" />
      </div>

        <h2 className="text-xl pt-4 font-bold">{title}</h2>
        <p className="text-gray-400 font-semibold">{subtitle}</p>

    </div>
  );
}

export default Iconcomponent