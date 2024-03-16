import React from "react";
import CodeEditor_ from "../shared/code-editor/CodeEditor";
import CircularImage from "../cards/CircularImage";

function UserScreen() {
  return <div className=" relative w-full h-full  hide-scroll  text-white  flex flex-col justify-start items-center   mb-5 sm:p-5 p-3 overflow-y-scroll">
  
   <CodeEditor_/> 
   <CodeEditor_/> 
    <CodeEditor_/> 
    <CodeEditor_/> 
   
 
   

<div className="vertical-line fixed w-[2px] h-full bg-primary right-[50%] sm:block hidden"></div>
  
  <div className="horizantal-line absolute w-full h-[2px] bg-primary left-0 sm:hidden top-0"></div>
  <div className="user-icon fixed bottom-20 right-20">
  <CircularImage/>
  </div>
 
  </div>;
}

export default UserScreen;
