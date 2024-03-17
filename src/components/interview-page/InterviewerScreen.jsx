import React from "react";
import micImage from '../../assets/images/mic_.png'

import CircularImage from "../cards/CircularImage";
function InterviewerScreen() {
  return <div className="w-full flex justify-center items-center  h-full relative"> 

  <div className="finish-btn px-3 py-2 bg-red-500 text-primary absolute right-5 top-5 font-semibold rounded-sm">Finish</div>
  <div className="timer text-primary text-[18px] absolute top-5 left-4">20:40 sec</div>
  <img src={micImage} alt="" className="sm:w-10/12 sm:h-10/12 w-11/12 h-11/12" />

 
  <div className="intervieewr-image absolute bottom-20 right-20">
  <CircularImage/>
  </div>
 
  </div>;
}

export default InterviewerScreen;
