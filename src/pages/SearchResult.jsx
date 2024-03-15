import React from "react";
import SerachBar from "../components/searchbar/SerachBar";
import PrimaryBtn from "../components/shared/buttons/PrimaryBtn";
import InterviewSearchCard from "../components/cards/interview-search/InterviewSearchCard";

function SearchResult() {
    return ( <
        div className = "w-full flex flex-col justify-center items-center" >

        <
        div className = "searchbar w-10/12 mt-3 flex space-x-1" >
        <
        SerachBar placeHolder = "Search Popular Interview" / >
        <
        PrimaryBtn text = "Search" / >
        <
        /div> <
        div className = "search-result-box w-10/12  mt-5" >
        <
        h2 className = "text-white text-[20px] mb-3" > Showing Result For < /h2> <
        div className = "search-result flex flex-wrap justify-start  " >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >
        <
        InterviewSearchCard / >

        <
        /div> <
        /div> <
        /div>
    );
}

export default SearchResult;