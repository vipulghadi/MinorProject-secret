import React from "react";

function SidebarCard({text,icon}) {
  return <div className=" w-full px-4 py-2 bg-primary text-primary rounded-md mb-4 ml-4 flex justify-start items-center gap-2"> 
  <img src={icon} alt="" className="w-[20px] h-[20px]" /> <span>{text}</span>
  
  </div>;
}

export default SidebarCard;
