import React from "react";
import SidebarCard from "./SidebarCard";
import homeIcon from '../../../assets/icons/home.png'
function Sidebar() {
  return <div className=" w-10/12 p-3 flex flex-col ">
  <h2 className="text-primary ml-4 mb-5 font-semibold text-[22px]">Welcome Vipul</h2>
  <SidebarCard text="Home" icon={homeIcon}/>
  <SidebarCard text="Home" icon={homeIcon}/>
  <SidebarCard text="Home" icon={homeIcon}/>
  <SidebarCard text="Home" icon={homeIcon}/>


  
  
  </div>;
}

export default Sidebar;
