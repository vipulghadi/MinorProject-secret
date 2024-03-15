import React from "react";
import Analytics from "./Analytics";
import TrendingInterviews from "./TrendingInterview";
import InterviewSearchCard from "../../cards/interview-search/InterviewSearchCard";
import PastInterviewesList from "./PastInterviewesList";

function Main() {
  return <div className="w-full  p-4 bg-black  rounded-md "> 

  <div className="analytics-section w-full">
  <Analytics/>
  </div>
  <div className="trending-interviews w-full mt-5">
  <h2 className="text-white text-[20px]">Trending Interview</h2>
  <TrendingInterviews/>
 
  </div>
  <div className="past-interview w-full mt-5">
  <h2 className="text-white text-[20px] mb-3">You past Interview</h2>
  <PastInterviewesList/>
  </div>
  
  </div>;
}

export default Main;
