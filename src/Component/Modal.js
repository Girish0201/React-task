//

import React from "react";
import NegotitationDetails from "./NegotitationDetails";
import Services from "./Services";
import Surcharge from "./Surcharge";
import Tax from "./Tax";
import Activity from "./Activity";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-slate-200 p-4 rounded-lg z-10 w-70vw h-full overflow-y-auto">
            <button
              className="absolute top-5 right-8 text-gray-600 z-[100]"
              onClick={onClose}
            >
              <svg
                class="w-[26px] h-[26px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.8"
                  d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <div className="w-full  flex flex-col items-center justify-center px-4">
              <NegotitationDetails />

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
