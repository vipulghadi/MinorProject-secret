import React from "react";
import PastInterviewesList from "../components/home-components/main/PastInterviewesList";
import TrendingInterviews from "../components/home-components/main/TrendingInterview";
import Analytics from "../components/home-components/main/Analytics";
import Main from "../components/home-components/main/Main";
import Sidebar from "../components/home-components/sidebar/Sidebar";
import Navbar from "../components/shared/navbar/Navbar";
import Btn from "../components/home-components/rightbar/btn";

function Home() {
  //   <div className="create-interview-btn   sm:w-11/12 w-full flex justify-end mt-5">
  //   <button className="ml-auto px-3 py-2 bg-primary text-white rounded-sm">
  //     Create Interview
  //   </button>
  // </div>
  return (
    <>
      <div className="home w-full flex  justify-center items-start sm:flex-nowrap  flex-wrap bg-black mt-[100px]">
        <div className="sidebar-section  sm:w-2/12 md:w-3/12 sm:block hidden  h-screen ">
  
          <Sidebar />
        </div>
        <div className="main-section sm:w-7/12  md:w-7/12 h-auto w-full ">
          <Main />
        </div>
        <div className="right-side-section w-full  sm:w-2/12  h-screen md:w-3/12 bg-red-400 ">
     <Btn/>
        </div>
      </div>
    </>
  );
}

export default Home;
