import React from "react";

const Card = ({ title, price,textColor,priceColor, description, bgColor, buttonBgColor, buttonText ,zIndex,transformScale}) => {
  return (
    <div className={`py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:w-[250px] sm:w-full shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl ${bgColor} z-${zIndex} ${transformScale}`}>
      <h1 className={`${textColor} font-semibold text-xl`}>{title}</h1>
      <div className="text-center py-4 px-7">
        <h1 className={`${priceColor} text-4xl font-black`}>{price}</h1>
        <p className={`${textColor} mt-2`}>每月</p>
      </div>
      <div className="h-px bg-gray-200"></div>
      <div className="text-center mt-3">
        <p className={`text-sm ${textColor}`}>{description}</p>
      </div>
      <button className={`w-full mt-6 mb-3 py-2 text-white font-semibold ${buttonBgColor} hover:shadow-xl duration-200 hover: ${buttonBgColor}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
