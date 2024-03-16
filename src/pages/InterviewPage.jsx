import React from "react";
import IScreen from "../components/interview-page/IScreen";
import AskModal from "../components/shared/modals/AskModel";
import CodeEditor from "../components/shared/code-editor/CodeEditor";
import UserScreen from "../components/interview-page/UserScreen";
import InterviewerScreen from "../components/interview-page/InterviewerScreen";


// <img src="https://cdn.pixabay.com/photo/2023/08/08/13/51/ai-generated-8177420_1280.png" alt="" className="bg-cover w-full h-screen opacity-25" />
function InterviewPage() {
  return <div className="w-full flex justify-center items-center  mt-[100px] flex-wrap h-screen " >

 <div className="interviewer-screen  sm:w-1/2 w-full   h-screen ">
 <InterviewerScreen/>
 </div>
 <div className="user-screen sm:w-1/2 w-full sm:h-full h-screen ">
 <UserScreen/>
</div>

  
  
  </div>;
}

export default InterviewPage;
