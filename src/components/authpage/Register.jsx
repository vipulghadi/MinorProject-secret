import React from "react";
import {Formik,Form,Field,ErrorMessage} from 'formik'
function Register() {
  return <div className="w-full p-3 bg-white flex flex-col rounded-md"> 

  <Formik>
  
  <Form>
  <h3>Welcome User</h3>
  <div className="username mb-2">
  <label htmlFor="username" className="text-[12px]"> Username</label>
  <Field className='w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md text-[14px]'  />
  </div>
  <div className="useremail mb-2">
  <label htmlFor="useremail" className="text-[12px]"> Email</label>
  <Field className='w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md'/>
  </div>
  <div className="userpassword mb-2">
  <label htmlFor="userpassword" className="text-[12px]"> Password</label>
  <Field className='w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md'/>
  </div>
  <div className="userOTP mb-2">
  <label htmlFor="userOTP" className="text-[12px]"> OTP</label>
  <Field className='w-full p-1 outline-none focus:border-blue-600 border-2 rounded-md'/>
  </div>
  <button className="w-full px-3 py-2 bg-primary rounded-md text-white mt-3 hover:bg-blue-500">Register</button>

  <h3 className="text-[11px] text-gray-500 text-center mt-2 mb-4">or Login with</h3>
  
  
  
  </Form>
  
  
  </Formik>
  
  
  
  
  </div>;
}

export default Register;
