import React from "react";
//it contains folllowing thing : name of interview: langugae: topics: interview by: rating : views: level: views
function InterviewSearchCard({ width = "320px" }) {
  return (
    <div
      className={`card sm:w-10/12 w-12/12  relative bg-black mt-3 rounded-md overflow-hidden mr-3`}
    >
      <div className="cover-image w-full h-[80px] bg-tertiary">efw</div>

      <div className="profile-image flex justify-center items-center absolute top-[35px]  w-full">
        <div className="circle w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center z-30 ">
          <img
            src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/07/25/Pictures/_5e293ed6-aee7-11e9-8ce3-2af94b9ec815.jpg"
            className="w-[60px] h-[60px] bg-cover rounded-full mx-auto"
            alt=""
          />
        </div>
      </div>
      <div className="interview-info w-full h-[150px]"></div>
    </div>
  );
}

export default InterviewSearchCard;
