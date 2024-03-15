import React from "react";

function SerachBar({placeHolder="Search Here"}) {
  return <div className="w-full"> 
   <input type="text" className="w-full px-3 py-2 outline-none rounded-md bg-secondory text-primary" placeholder={placeHolder} />
  </div>;
}

export default SerachBar;
