import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import bg from "../assets/images/bg.jpg";
import BlurEffect from "../components/authpage/BlurEffect";

function IntroPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center relative ">
    <img src="https://cdn.vectorstock.com/i/preview-1x/54/39/black-dots-texture-vector-4535439.jpg" className="absolute top-0 left-0 w-screen h-screen opacity-15 " alt="" />
      <div className="navb w-full">
        <Navbar />
      </div>
      <div className="hero-section w-11/12 flex flex-col justify-center items-center mt-5 h-screen   relative">
        <div className="auth-btn absolute right-0 top-0 space-x-2">
          <button className="px-3 py-1 rounded-md bg-primary text-white hover:bg-blue-400">
            
            Register
          </button>
          <button className="px-3 py-1 rounded-md border-[1px] text-main">
          
            Login
          </button>
        </div>
        <div className="main-heading   text-[40px] sm:text-[50px]  text-center font-black  text-primary montserrat-bold ">
          Tech interview ? Let AI lead the way.Elevate your
          <span className="text-main"> coding journey </span>
        </div>
        <div className="sub-heading text-center sm:w-8/12 mt-3 text-secondory text-[17px]">
          Empower Yourself : Enhance Confidence and Skills with Omega, Your AI
          Interviewer.Master Tech Interviews with Precision Assessments and
          Elevate Your Career Journey
        </div>
        <div className="tech-demo-btn bg-primary text-primary px-3 py-2 mt-[50px] rounded-sm">
          Take Demo
        </div>
      </div>
      <div className="language-supports w-12/12 flex flex-col  justify-center items-center mt-[50px] bg-secondory ">
        <div className="left ">
          <div className="language-heading text-[25px]  leading-9 p-5 text-secondory text-center">
            We currently support more than 5 languages on our platform, and we
            're continuously expanding our language offerings.{" "}
          </div>{" "}
        </div>{" "}
        <div className="right  p-5 flex  flex-wrap justify-center items-center">
          <div className="w-[70px] h-[70px] bg-yellow-400 flex justify-center items-center text-[30px] font-bold text-white">
            {" "}
            Py{" "}
          </div>{" "}
          <div className="w-[70px] h-[70px] bg-pink-600 flex justify-center items-center text-[30px] font-bold text-white">
            {" "}
            Js{" "}
          </div>{" "}
          <div className="w-[70px] h-[70px] bg-blue-600 flex justify-center items-center text-[30px] font-bold text-white">
            {" "}
            C{" "}
          </div>{" "}
          <div className="w-[70px] h-[70px] bg-green-600 flex justify-center items-center text-[30px] font-bold text-white">
            {" "}
            C++{" "}
          </div>{" "}
          <div className="w-[70px] h-[70px] bg-purple-600 flex justify-center items-center text-[30px] font-bold text-white">
            {" "}
            Java{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default IntroPage;
