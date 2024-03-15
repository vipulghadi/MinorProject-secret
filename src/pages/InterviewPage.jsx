import React from "react";
import IScreen from "../components/interview-page/IScreen";
import AskModal from "../components/shared/modals/AskModel";
import CodeEditor from "../components/shared/code-editor/CodeEditor";


// <img src="https://cdn.pixabay.com/photo/2023/08/08/13/51/ai-generated-8177420_1280.png" alt="" className="bg-cover w-full h-screen opacity-25" />
function InterviewPage() {
  return <div className="w-full flex justify-center items-center h-screen   mt-[100px] flex-wrap-reverse">
 <div className="left sm:w-1/2 w-full h-screen text-white relative flex flex-col justify-start items-center overflow-y-scroll">
 <CodeEditor/>
 
 <h2 className="text-secondory text-left">What is for loop</h2>
 <div className="horizantal w-[2px] h-[444px] bg-primary absolute right-0"></div>
</div>
 <div className="right sm:w-1/2 w-full h-[444px] bg-red-950">
 
 <AskModal/>

 </div>

  
  
  </div>;
}

export default InterviewPage;
