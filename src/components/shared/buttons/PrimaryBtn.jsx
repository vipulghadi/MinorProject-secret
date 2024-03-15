import React from "react";

function PrimaryBtn({text,func=null,}) {
  return <div className="w-min rounded-md px-2 py-1 bg-white text-[13px] bg-primary text-primary shadow-2xl shadow-[#e31cc4] flex justify-center items-center">{text}</div>;
}

export default PrimaryBtn;
