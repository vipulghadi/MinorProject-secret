import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function CodeEditor_() {
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
    <div className=" w-11/12 sm:w-10/12 bg-tertiary mb-2">
    <div className="code-language w-full flex justify-end p-1">
    <h4 className="px-1 text-[12px] text-white ml-auto ">python</h4>
    </div>
     <CodeEditor 
    value={code}
    language="python"
    placeholder="Please enter JS code."
    onChange={(evn) => setCode(evn.target.value)}
    padding={20}

    
    style={{
      backgroundColor: "#252728",
   
      fontSize:'14px'
    }}
    
  /></div>
   
  );
}


