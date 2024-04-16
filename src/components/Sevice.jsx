import React from "react";
import Card from "./card";

const Sevice =()=>{
    return (

        <div id="services" className="min-h-screen bg-black flex flex-wrap items-center justify-center">
          <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items-center container">
            <Card
              title="基礎"
              price="免費"
              textColor="text-gray-500"
              priceColor="text-black"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              bgColor="bg-white"
              buttonBgColor="bg-gray-700"
              buttonText="免費下載"
              zIndex= "30"
            />
            <Card
              title="高級"
              price="$399.00"
              textColor="text-white"
              priceColor="text-gray-100"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              bgColor="bg-purple-500"
              buttonBgColor="bg-gray-700"
              buttonText="馬上訂閱"
              zIndex= "40"
              transformScale="transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl"
            />
            <Card
              title="專業"
              price="$899.00"
              textColor="text-gray-500"
              priceColor="text-black"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              bgColor="bg-white"
              buttonBgColor="bg-gray-700"
              buttonText="馬上訂閱"
              zIndex="30"
            />
          </div>
        </div>
      );
}
export default Sevice