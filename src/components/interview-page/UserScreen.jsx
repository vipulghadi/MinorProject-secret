import React from "react";
import CodeEditor_ from "../shared/code-editor/CodeEditor";
import CircularImage from "../cards/CircularImage";

function UserScreen() {
  return <div className="w-full h-full  hide-scroll relative text-white  flex flex-col justify-start items-center   mb-5 sm: p-5 p-3 ">
  
   <CodeEditor_/> 
  <div className="verticle-line absolute w-[2px] h-full bg-primary left-0 sm:block hidden"></div>
  <div className="verticle-line absolute w-full h-[2px] bg-primary left-0 sm:hidden top-0"></div>
  <div className="user-icon absolute bottom-20 right-20">
  <CircularImage/>
  </div>
 
  </div>;
}

export default UserScreen;
