"use client";
import * as React from "react";
import * as Fi from "react-icons/fi";

export default function FormSubmitModal({
  fields,
  visibleSubmitFormModal,
  setVisibleSubmitFormModal,
}) {
  const [reqest, setRequest] = React.useState({});
  return (
    <div
      id="extralarge-modal"
      tabIndex="-1"
      className={`fixed top-0 left-0 right-0 z-50 ${
        visibleSubmitFormModal ? "" : "hidden"
      } w-full  overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full`}
    >
      <div className="relative w-full max-h-full">
        <div className="relative bg-indigo-900">
          <div className="h-[50px] flex items-center justify-between px-5 py-2 ">
            <div>
              <button
                className="hover:bg-blue-100 hover:text-blue-500 flex items-center p-2 rounded-lg text-white"
                onClick={() => setVisibleSubmitFormModal(false)}
              >
                <Fi.FiArrowLeft className="w-5 h-5 " />
                <h1 className="pl-2 text-sm">Back</h1>
              </button>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <div className="w-5/12 bg-white h-[calc(100vh-50px)] overflow-x-auto shadow-md has-scrollbar">
                <div className="p-12">
                  <h1 className="text-3xl font-bold text-black text-center pb-4">
                    Phoenix
                  </h1>
                  <h1 className="text-2xl font-bold text-black  py-4">
                    New Survey
                  </h1>
                  {fields["fieldSelectedList"].map((field) => {
                    if (field.type != "file") {
                      if (field.type == "heading") {
                        return (
                          <div
                            className="mb-4  rounded-lg "
                            key={Math.random()}
                          >
                            <h1 className="text-center text-black text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                              {field.label}
                            </h1>
                          </div>
                        );
                      } else if (field.type == "divider") {
                        return (
                          <div
                            className="py-4  rounded-lg "
                            key={Math.random()}
                          >
                            <hr className="border-2 bg-gray-400"></hr>
                          </div>
                        );
                      } else
                        return (
                          <div
                            className="mb-4  rounded-lg "
                            key={Math.random()}
                          >
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              {field.label}
                            </label>
                            <input
                              type={field.type}
                              // id={field.id}
                              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              onChange={() => setRequest({ ...reqest })}
                            />
                          </div>
                        );
                    } else {
                      return (
                        <div
                          className="flex items-center justify-center w-full"
                          key={Math.random()}
                        >
                          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 mb-4">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                className="w-8 h-8 mb-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                              </svg>
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input type="file" className="hidden" />
                          </label>
                        </div>
                      );
                    }
                  })}
                  <button
                    className="px-4 py-2 rounded-sm bg-gray-400 text-white"
                    onClick={() => alert("Result saved")}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
