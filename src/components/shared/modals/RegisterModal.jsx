import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
export function RegisterUserModal() {
  const [openModal, setOpenModal] = useState(false);
  const [shiftScreen,setShiftScreen] = useState(false);
  const shiftStyling='transform translate-x-[-100%] transition-all duration-700 '
  const modalClass = openModal
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  const overlayClasses = openModal
    ? "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-90 transition-opacity duration-600"
    : "fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-800 bg-opacity-0 transition-opacity duration-600 pointer-events-none";
  const modalClasses = openModal
    ? " sm:w-3/12 w-11/12 bg-white rounded-lg shadow-lg transition-opacity duration-600 opacity-100  sm:h-[450px]"
    : " sm:w-3/12 w-11/12 bg-white rounded-lg shadow-lg transition-opacity duration-600 opacity-0";

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="px-3 py-1 rounded-md bg-primary text-white hover:bg-blue-400"
      >
        Register
      </button>
      <div className={overlayClasses}>
        <div className={modalClasses}>
          <div className="main-container w-full h-full relative flex overflow-hidden">
            <div className={`absolute h-full   p-5 w-full  ${shiftScreen && shiftStyling }`}>
              <h2 className="text-lg font-semibold mb-4"> Register </h2>{" "}
              <Formik>
                <Form>
                  <div className="username mb-2">
                    <label htmlFor="username" className="text-[12px]">
           
                      Username
                    </label>
                    <Field className="w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md text-[14px]" />
                  </div>
                  <div className="useremail mb-2">
                    <label htmlFor="useremail" className="text-[12px]">
                      {" "}
                      Email
                    </label>
                    <Field className="w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md" />
                  </div>
                  <div className="userpassword mb-2">
                    <label htmlFor="userpassword" className="text-[12px]">
                      {" "}
                      Password
                    </label>
                    <Field className="w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md" />
                  </div>

                  <button className="w-full px-3 py-2 bg-primary rounded-md text-white mt-3 hover:bg-blue-500" onClick={()=>{
                    setShiftScreen(true)
                  }}>
                    Register
                  </button>

                  <h3 className="text-[11px] text-gray-500 text-center mt-2 mb-4">
                    or Login with
                  </h3>
                </Form>
              </Formik>
            </div>
            <div className={`otp-verification absolute right-[-100%] h-full w-full flex flex-col justify-center items-center ${shiftScreen && shiftStyling}`}>
            
            <h2>Enter Your Otp</h2>
            <input type="text" />
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
