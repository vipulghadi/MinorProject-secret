import { useState } from "react";
import CircularImage from "../../cards/CircularImage";
import { Form, Field, ErrorMessage, Formik } from "formik";
import plus from "../../../assets/icons/plus.png";
export function CreateInterviewModal() {
  const [openModal, setOpenModal] = useState(false);
  const [shiftScreen,setShiftScreen] = useState(false);

  const initailValues = {
    testName: "",
    programmingLanguage: "",
    testLevel: "",
    totalQuestion: "",
  };
  
  const shiftStyling='transform translate-x-[-100%] transition-all duration-700 '
  const modalClass = openModal
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  const overlayClasses = openModal
    ? "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-90 transition-opacity duration-300"
    : "fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-800 bg-opacity-0 transition-opacity duration-300 pointer-events-none";
  const modalClasses = openModal
    ? "sm:w-7/12 w-11/12 bg-white rounded-lg shadow-lg transition-opacity duration-300 opacity-100"
    : " sm:w-7/12 w-11/12 bg-white rounded-lg shadow-lg transition-opacity duration-300 opacity-0";

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className=" px-3 py-2 rounded-md bg-primary"
      >
        Create Interview
      </button>

      <div className={overlayClasses}>
        <div className={modalClasses}>
        <div className="relative w-full sm:h-[550px]  h-[900px] overflow-hidden bg-gray-50 rounded-md ">
          <div className={`absolute h-full form-details   w-full  ${shiftScreen && shiftStyling }`}>
          <div className="w-full p-2 flex justify-end"> <span className="ml-auto " onClick={()=>{
            setOpenModal(false)
          }}>Cancel</span></div>
            <div className="p-5 w-full ">
              <h2 className="text-lg font-semibold mb-2">Create A Room</h2>
             <Formik>
          <Form className=" flex flex-wrap">
            <div className="left sm:w-1/2 h-full w-full sm:p-5 text-black ">
              <div className="form-test-name mb-4">
                <label htmlFor="test-name" className="text-secondory">
                  Test Name
                </label>
                <Field className="w-full p-2 rounded-md  border-blue-500 focus:border-blue-700 border-2 outline-none  " />
              </div>
              <div className="form-language mb-4">
                <label htmlFor="color" className="text-secondory">
                  Programming Language
                </label>
                <Field
                  as="select"
                  name="color"
                  className="w-full p-3 rounded-md  border-blue-500 focus:border-blue-700 border-2 outline-none "
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
                  className="w-full p-3 rounded-md  border-blue-500 focus:border-blue-700 border-2 outline-none "
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
                <Field className="w-full p-2 rounded-md  border-blue-500 focus:border-blue-700 border-2 outline-none  " />
              </div>
            </div>
            <div className="right-side sm:w-1/2  h-full w-full sm:p-5">
            <div>
              <div className="relative">
              <img src={plus} alt="" className="w-[25px] absolute right-3 top-[22%] cursor-pointer" />
                <input
                  type="text"
                  className="w-full p-2 rounded-2xl   outline-none   text-[16px]"
                  placeholder="add topics from here"
                />
               
              </div>
              </div>
              <div className="selected-topics bg-green-200 w-full h-[270px] mt-2 flex">

               
                
              
              </div>
            </div>
            <button
            onClick={() => {
             setShiftScreen(true)
            }}
            className="w-full bg-primary mt-3 hover:bg-blue-500 text-primary font-semibold py-2 px-4 rounded"
          >
            Next
          </button>
          </Form>
        </Formik>

            </div>
          </div>
          <div className={`choose-interviewer absolute right-[-100%] flex justify-center items-center h-full w-full ${shiftScreen && shiftStyling} gap-3 flex-col`}>
       <h2 className="text-[20px] font-semibold">Choose your Interviewer</h2>
     <div className="interviewers w-full flex justify-center  gap-5">
     <div className="interviers-small- desc flex justify-center flex-col items-center"><img src="https://static.spotboye.com/uploads/ritikatnail_2020-9-4-13-8-11_thumbnail.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover" />
     <div className="name text-[10px] font-semibold ">Ritika Shrotri</div>
     </div>
     <div className="interviers-small- desc flex justify-center flex-col items-center"><img src="https://static.spotboye.com/uploads/ritikatnail_2020-9-4-13-8-11_thumbnail.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover" />
     <div className="name text-[10px] font-semibold ">Ritika Shrotri</div>
     </div>
     <div className="interviers-small- desc flex justify-center flex-col items-center"><img src="https://static.spotboye.com/uploads/ritikatnail_2020-9-4-13-8-11_thumbnail.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover" />
     <div className="name text-[10px] font-semibold ">Ritika Shrotri</div>
     </div>
     
     </div>
     <div className="create-room-btn bg-primary px-3 py-2 rounded-md text-primary mt-5">Create Room</div>
       
        </div>
          </div>
        </div>
      </div>
    </>
  );
}
