import React from "react";
import SidebarCard from "./SidebarCard";

function Sidebar() {
  return <div className=" w-10/12 p-3 flex flex-col ">
  <h2 className="text-primary ml-4 mb-5 font-semibold text-[22px]">Welcome Vipul</h2>
  <SidebarCard text="Home"/>
  <SidebarCard text="Profile"/>
  <SidebarCard text="Reports"/>
  <SidebarCard text="Help"/>
  <SidebarCard text="Community"/>


  
  
  </div>;
}

export default Sidebar;
