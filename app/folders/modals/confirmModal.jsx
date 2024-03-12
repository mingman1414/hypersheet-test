import * as React from "react";

export default function ConfirmModal({
  visible,
  setVisible,
  message,
  callback,
}) {
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 ${
        visible ? " bg-gray-100 bg-opacity-70" : "hidden"
      } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full h-[100vh] flex justify-center items-center`}
    >
      <div className="w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            data-modal-hide="authentication-modal"
            onClick={() => {
              setVisible(false);
            }}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 ">Confirm</h3>
            <div className="space-y-6">
              {message}
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  className="w-[20%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={(e) => {
                    setVisible(false);
                  }}
                >
                  No
                </button>
                <button
                  type="button"
                  className="w-[20%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => {
                    callback();
                    setVisible(false);
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
