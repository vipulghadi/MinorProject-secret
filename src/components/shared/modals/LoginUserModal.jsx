import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
export function LoginUserModal() {
  const [openModal, setOpenModal] = useState(false);

  const modalClass = openModal
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  const overlayClasses = openModal
    ? "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-90 transition-opacity duration-600"
    : "fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-800 bg-opacity-0 transition-opacity duration-600 pointer-events-none";
  const modalClasses = openModal
    ? "relative sm:w-3/12 w-11/12 bg-white rounded-lg shadow-lg transition-opacity duration-600 opacity-100"
    : "relative sm:w-3/12 w-11/12 bg-white rounded-lg shadow-lg transition-opacity duration-600 opacity-0";

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="px-3 py-1 rounded-md border-[1px] text-main"
      >
        Login
      </button>{" "}
      <div className={overlayClasses}>
        <div className={modalClasses}>
          <div className="absolute top-0 right-0 pt-2 pr-4">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>{" "}
            </button>{" "}
          </div>{" "}
          <div className="p-8">
            <h2 className="text-lg font-semibold mb-4"> Register </h2>{" "}
            <Formik>
              <Form>
                <div className="username mb-2">
                  <label htmlFor="username" className="text-[12px]">
                    {" "}
                    Username{" "}
                  </label>{" "}
                  <Field className="w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md text-[14px]" />
                </div>{" "}
                <div className="useremail mb-2">
                  <label htmlFor="useremail" className="text-[12px]">
                    {" "}
                    Email{" "}
                  </label>{" "}
                  <Field className="w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md" />
                </div>{" "}
                <div className="userpassword mb-2">
                  <label htmlFor="userpassword" className="text-[12px]">
                    {" "}
                    Password{" "}
                  </label>{" "}
                  <Field className="w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md" />
                </div>{" "}
                <div className="userOTP mb-2">
                  <label htmlFor="userOTP" className="text-[12px]">
                    {" "}
                    OTP{" "}
                  </label>{" "}
                  <Field className="w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md" />
                </div>{" "}
                <button className="w-full px-3 py-2 bg-primary rounded-md text-white mt-3 hover:bg-blue-500">
                  {" "}
                  Register{" "}
                </button>
                <h3 className="text-[11px] text-gray-500 text-center mt-2 mb-4">
                  {" "}
                  or Login with{" "}
                </h3>
              </Form>
            </Formik>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
