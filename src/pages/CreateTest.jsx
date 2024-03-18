import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import plus from "../assets/icons/plus.png";
import interviewIcon from '../assets/icons/interview.png'

function CreateTest() {
  const initailValues = {
    testName: "",
    programmingLanguage: "",
    testLevel: "",
    totalQuestion: "",
  };
  return (
    <div className="w-full justify-center items-center flex flex-col h-screen mb-[100px] mt-[100px] ">
      <div className="main-box sm:w-9/12 h-auto rounded-md w-11/12  p-3">
        <h2 className="font-bold  text-primary text-[30px] p-3 text-center  mb-4flex space-x-2 justify-center items-center">
          Create An   <span className="text-main"> Interview</span> Room
        </h2>
        <Formik>
          <Form className=" flex flex-wrap">
            <div className="left sm:w-1/2 h-full w-full sm:p-5 ">
              <div className="form-test-name mb-4">
                <label htmlFor="test-name" className="text-secondory">
                  Test Name
                </label>
                <Field className="w-full p-2 rounded-md  border-blue-500 focus:border-blue-700 border-2 outline-none bg-black text-white" />
              </div>
              <div className="form-language mb-4">
                <label htmlFor="color" className="text-secondory">
                  Programming Language
                </label>
                <Field
                  as="select"
                  name="color"
                  className="w-full p-3 rounded-md  border-blue-500 focus:border-blue-700 border-2 outline-none bg-black text-white"
                >
              
                  <option value="red">python</option>
                  <option value="green">javascript</option>
                  <option value="blue">cpp</option>
                  <option value="yellow">java</option>
                </Field>
              </div>
              <div className="form-test-level mb-4">
                <label htmlFor="color" className="text-secondory">
                  Test Level
                </label>
                <Field
                  as="select"
                  name="color"
                  className="w-full p-3 rounded-md  border-blue-500 focus:border-blue-700 border-2 outline-none bg-black text-white"
                >
                  <option value="red">Easy</option>
                  <option value="green">Medium</option>
                  <option value="blue">Hard</option>
                </Field>
              </div>
              <div className="form-total-question mb-4">
                <label htmlFor="test-name" className="text-secondory">
                  Total Question
                </label>
                <Field className="w-full p-2 rounded-md  border-blue-500 focus:border-blue-700 border-2 outline-none bg-black text-white" />
              </div>
            </div>
            <div className="right sm:w-1/2  h-full w-full sm:p-5">
            <div>
              <div className="relative">
              <img src={plus} alt="" className="w-[25px] absolute right-3 top-[22%] cursor-pointer" />
                <input
                  type="text"
                  className="w-full p-2 rounded-2xl  text-white outline-none  bg-tertiary text-[16px]"
                  placeholder="add topics from here"
                />
               
              </div>
              </div>
              <div className="selected-topics bg-green-200 w-full h-[270px] mt-2 flex">

               
                
              
              </div>
            </div>
            <div className="submit-btn w-full p-3 bg-primary rounded-md text-white text-center font-semibold mb-4">
              Create 
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CreateTest;
