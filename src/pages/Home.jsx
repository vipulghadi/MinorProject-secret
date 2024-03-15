import React from "react";
import PastInterviewesList from "../components/home-components/main/PastInterviewesList";
import TrendingInterviews from "../components/home-components/main/TrendingInterview";
import Analytics from "../components/home-components/main/Analytics";
import Main from "../components/home-components/main/Main";
import Sidebar from "../components/home-components/sidebar/Sidebar";
import Navbar from "../components/shared/navbar/Navbar";

function Home() {
  //   <div className="create-interview-btn   sm:w-11/12 w-full flex justify-end mt-5">
  //   <button className="ml-auto px-3 py-2 bg-primary text-white rounded-sm">
  //     Create Interview
  //   </button>
  // </div>
  return (
    <>
      <div className="home w-full flex  justify-center items-start sm:flex-wrap  flex-wrap bg-black mt-[100px]">
        <div className="sidebar-section   sm:w-2/12 md:w-3/12 sm:visible h-screen ">
          {" "}
          <Sidebar />{" "}
        </div>{" "}
        <div className="main-section sm:w-8/12  md:w-6/12 h-auto w-full ">
          <Main />
        </div>{" "}
        <div className="side-section w-full  sm:w-3/12  h-screen md:w-3/12 ">
          {" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Home;
