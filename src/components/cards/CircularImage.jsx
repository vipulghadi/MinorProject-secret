import React from "react";

const imageLink='https://i.pinimg.com/736x/ac/ec/2f/acec2fcf83e747b9648038c74881403f.jpg'
function CircularImage({dim='60',link=imageLink}) {
  return <div className={`w-[${dim}px] h-[${dim}px] bg-white p-1 overflow-hidden rounded-full absolute flex justify-center items-center`}> 
  <img src={imageLink} className=" rounded-full w-full h-full bg-contain" />
  </div>;
}

export default CircularImage;
