import React from "react";
import EmptyInterviewList from "./EmptyInterviewList";

function PastInterviewesList() {
  return (
    <div className="w-full bg-tertiary h-[400px]  rounded-md">
      <div>
     
        <EmptyInterviewList />
      </div>
    </div>
  );
}

export default PastInterviewesList;
