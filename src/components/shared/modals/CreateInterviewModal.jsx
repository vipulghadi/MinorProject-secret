import { useState } from "react";
import CircularImage from "../../cards/CircularImage";

export function CreateInterviewModal() {
  const [openModal, setOpenModal] = useState(false);
  const [shiftScreen,setShiftScreen] = useState(false);
  
  const shiftStyling='transform translate-x-[-100%] transition-all duration-700 '
  const modalClass = openModal
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  const overlayClasses = openModal
    ? "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-90 transition-opacity duration-300"
    : "fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-800 bg-opacity-0 transition-opacity duration-300 pointer-events-none";
  const modalClasses = openModal
    ? "sm:w-6/12 w-11/12 bg-white rounded-lg shadow-lg transition-opacity duration-300 opacity-100"
    : " sm:w-6/12 w-11/12 bg-white rounded-lg shadow-lg transition-opacity duration-300 opacity-0";

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
        <div className="relative w-full h-[200px]  overflow-hidden bg-gray-50 rounded-md ">
          <div className={`absolute h-full   w-full  ${shiftScreen && shiftStyling }`}>
            <div className="p-8 w-full ">
              <h2 className="text-lg font-semibold mb-4">Register</h2>
              {/* Add your registration form here */}
              <button
                onClick={() => {
                 setShiftScreen(true)
                }}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                Close
              </button>
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
     <div className="create-room-btn bg-primary px-3 py-1 rounded-sm text-primary mt-5">Create Room</div>
       
        </div>
          </div>
        </div>
      </div>
    </>
  );
}
