import React from "react";
import empty from "../../../assets/images/empty.png";

function EmptyInterviewList() {
  return (
    <div className=" w-full p-3 flex  justify-center items-center flex-col ">
      <img src={empty} alt="" className=" w-[250px] h-[250px]  opacity-15" />
      <div className="heading text-secondory">
   
        You havent shedule an Interview
      </div>
      <button className=" mt-3 px-3 py-2 bg-primary text-white rounded-sm">
        Create Interview
      </button>
    </div>
  );
}

export default EmptyInterviewList;
