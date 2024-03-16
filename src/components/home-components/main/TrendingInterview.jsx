import React, { useEffect,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InterviewSearchCard from "../../cards/interview-search/InterviewSearchCard";

export default function TrendingInterviews() {
   const [currentWindow, setCurrentWindow] = useState('')
 

  useEffect(()=>{
     setCurrentWindow(window.innerWidth)
  })
 
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: currentWindow > 500?3:2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="content w-full   ">
      <Slider {...settings} className="flex gap-3 w-full ">
      <div className=" w-full">  <InterviewSearchCard/></div>
      <div className=" w-full">  <InterviewSearchCard/></div>
      <div className=" w-full">  <InterviewSearchCard/></div>
    
      
       
      </Slider>
    </div>
  );
}
