import React from "react";
import SerachBar from "../components/searchbar/SerachBar";
import PrimaryBtn from "../components/shared/buttons/PrimaryBtn";
import InterviewSearchCard from "../components/cards/interview-search/InterviewSearchCard";

function SearchResult() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="searchbar w-10/12 mt-3 flex space-x-1">
        <SerachBar placeHolder="Search Popular Interview" />
        <PrimaryBtn text="Search" />
      </div>
      <div className="search-result-box sm:w-10/12 w-full mt-5">
        <h2 className="text-white text-[20px] mb-3"> Showing Result For </h2>
        <div className="search-result flex flex-wrap sm:justify-start justify-center  ">
        <div className="card w-6/12 sm:w-3/12">    <InterviewSearchCard  /></div>
        <div className="card w-6/12 sm:w-3/12">    <InterviewSearchCard  /></div>
        <div className="card w-6/12 sm:w-3/12">    <InterviewSearchCard  /></div>
        <div className="card w-6/12 sm:w-3/12">    <InterviewSearchCard  /></div>
        <div className="card w-6/12 sm:w-3/12">    <InterviewSearchCard  /></div>
        <div className="card w-6/12 sm:w-3/12">    <InterviewSearchCard  /></div>
        <div className="card w-6/12 sm:w-3/12">    <InterviewSearchCard  /></div>
        <div className="card w-6/12 sm:w-3/12">    <InterviewSearchCard  /></div>
     
    
      
       
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default SearchResult;
