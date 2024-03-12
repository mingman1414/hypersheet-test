import * as React from "react";
import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import { Draggable } from "@hello-pangea/dnd";
import { StrictModeDroppable } from "./components/strictmode";

export default function CenterPanel({
  type,
  setAddField,
  fields,
  setFields,
  setVisibleModalNewField,
  currentField,
  setCurrentField,
  setIsDragging,
  setIsEdit,
  setDataEdit,
  pageTranslate,
  headingForm,
}) {
  const typeFormElements = ["heading", "divider", "file"];
  const appendAt = (list, index, data) => {
    const result = [...list];
    result.splice(index, 0, data);
    return result;
  };
  const remove = (list, index) => {
    const result = [...list];
    result.splice(index, 1);
    return result;
  };
  const removeField = (id, index) => {
    const isFormElement = ["heading", "divider", "file"].includes(
      fields[type][index].type
    );
    const srcItems = remove(fields[type], index);
    const destItems = isFormElement
      ? fields[
          typeFormElements.indexOf(fields[type][index].type) != -1
            ? "formElements"
            : "fields"
        ]
      : appendAt(
          fields[
            typeFormElements.indexOf(fields[type][index].type) != -1
              ? "formElements"
              : "fields"
          ],
          0,
          fields[type][index]
        );

    const tempFields = { ...fields };
    tempFields[type] = srcItems;
    tempFields[
      typeFormElements.indexOf(fields[type][index].type) != -1
        ? "formElements"
        : "fields"
    ] = destItems;
    setFields({ ...tempFields });
  };
  return (
    <div className="w-8/12 bg-indigo-900 h-[calc(100vh-50px)] overflow-x-auto shadow-md has-scrollbar">
      <div className="p-8 space-2">
        <div className="mt-8" onClick={() => setCurrentField(headingForm)}>
          <h1 className="text-3xl font-bold text-white text-center">
            {headingForm.name}
          </h1>
          <h3 className="text-xl font-bold text-white py-8 truncate">
            {headingForm.discription}
          </h3>
        </div>
        <StrictModeDroppable droppableId={type}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div className="bg-gray-100 rounded-lg p-8 min-h-[60vh]">
                {fields[type]?.map((field, index) => {
                  if (field.isShow)
                    return (
                      <Draggable
                        key={field?.id}
                        draggableId={field?.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {field?.type == "file" ? (
                              <div
                                className="mb-4 border-gray-200 border-dashed border border-light-blue-500  px-4  py-4 rounded-lg bg-white bg-gray-50"
                                key={Math.random()}
                                onClick={() =>
                                  setCurrentField({ ...field, index: index })
                                }
                              >
                                <div className="relative flex-1 translate-y-[-0.5rem] translate-x-[0.5rem]">
                                  <button
                                    className="absolute right-0 pb-2 pl-2"
                                    onClick={() =>
                                      removeField(field?.id, index)
                                    }
                                  >
                                    <Ai.AiOutlineDelete className="w-5 h-5 text-black" />
                                  </button>
                                </div>
                                <div
                                  className="flex items-center justify-center w-full"
                                  key={Math.random()}
                                >
                                  <label className="flex flex-col items-center justify-center w-full h-64 cursor-pointer   ">
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
                                      <p className="mb-2 text-sm text-gray-500 ">
                                        <span className="font-semibold">
                                          {pageTranslate.click_to_upload}
                                        </span>{" "}
                                        {pageTranslate.or_drag_and_drop}
                                      </p>
                                      <p className="text-xs text-gray-500 ">
                                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                                      </p>
                                    </div>
                                    <input
                                      readOnly
                                      type="file"
                                      className="hidden"
                                    />
                                  </label>
                                </div>
                              </div>
                            ) : field?.type == "heading" ? (
                              <div
                                className="mb-4 border-gray-200 border p-4  rounded-lg bg-white"
                                key={Math.random()}
                                onClick={() =>
                                  setCurrentField({ ...field, index: index })
                                }
                              >
                                <div className="relative flex-1  translate-y-[-0.5rem] translate-x-[0.5rem]">
                                  <button
                                    className="absolute right-0 pb-2 pl-2"
                                    onClick={() =>
                                      removeField(field?.id, index)
                                    }
                                  >
                                    <Ai.AiOutlineDelete className="w-5 h-5 text-black" />
                                  </button>
                                </div>

                                <h1
                                  id="password"
                                  className="text-center  text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 truncate"
                                  placeholder={field.placeholder}
                                >
                                  {/* {pageTranslate.heading} */}
                                  {field.title}
                                </h1>
                                <h3
                                  id="password"
                                  className="text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 truncate"
                                  placeholder={field.placeholder}
                                >
                                  {/* {pageTranslate.heading} */}
                                  {field.discription}
                                </h3>
                              </div>
                            ) : field?.type == "divider" ? (
                              <div
                                className="mb-4 border-gray-200 border p-4  rounded-lg bg-white"
                                key={Math.random()}
                                onClick={() =>
                                  setCurrentField({ ...field, index: index })
                                }
                              >
                                <div className="relative flex-1  translate-y-[-0.5rem] translate-x-[0.5rem]">
                                  <button
                                    className="absolute right-0 pb-2 pl-2"
                                    onClick={() =>
                                      removeField(field?.id, index)
                                    }
                                  >
                                    <Ai.AiOutlineDelete className="w-5 h-5 text-black" />
                                  </button>
                                </div>
                                <hr className="border-2 px-4 w-[90%] m-[auto]"></hr>
                              </div>
                            ) : field?.type == "radio" ||
                              field?.type == "checkbox" ? (
                              <div
                                className="mb-4 border-gray-200 border p-4  rounded-lg bg-white"
                                key={Math.random()}
                                onClick={() =>
                                  setCurrentField({ ...field, index: index })
                                }
                              >
                                <div className="relative flex-1 translate-y-[-0.5rem] translate-x-[0.5rem]">
                                  <button
                                    className="absolute right-0 pb-2 pl-2"
                                    onClick={() =>
                                      removeField(field?.id, index)
                                    }
                                  >
                                    <Ai.AiOutlineDelete className="w-5 h-5 text-black" />
                                  </button>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                  <div className="flex items-center pl-3">
                                    <input
                                      readOnly
                                      checked={
                                        field?.type == "radio" ||
                                        field?.type == "checkbox"
                                      }
                                      onChange={(e) =>
                                        setCurrentField({
                                          ...field,
                                          index: index,
                                        })
                                      }
                                      type={field.type}
                                      value={field.type}
                                      name="list-radio"
                                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 mr-4"
                                    />
                                    <label className="w-full py-3 ml-2 text-md font-medium text-gray-900">
                                      {field.label}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            ) : field?.type == "dropdown" ? (
                              <div
                                className="mb-4 border-gray-200 border p-4  rounded-lg bg-white"
                                key={Math.random()}
                                onClick={() =>
                                  setCurrentField({ ...field, index: index })
                                }
                              >
                                <div className="relative flex-1 translate-y-[-0.5rem] translate-x-[0.5rem]">
                                  <button
                                    className="absolute right-0 pb-2 pl-2"
                                    onClick={() =>
                                      removeField(field?.id, index)
                                    }
                                  >
                                    <Ai.AiOutlineDelete className="w-5 h-5 text-black" />
                                  </button>
                                </div>
                                <div className="z-0 w-full mb-6 group">
                                  <label className="text-lg text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 scale-75 -translate-y-6">
                                    {field.type == "date" ? "" : field.label}
                                  </label>
                                  <select
                                    disabled
                                    className={`border border-gray-300
               bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5`}
                                  ></select>
                                </div>
                              </div>
                            ) : (
                              <div
                                className="mb-4 border-gray-200 border p-4  rounded-lg bg-white"
                                key={Math.random()}
                                onClick={() =>
                                  setCurrentField({ ...field, index: index })
                                }
                              >
                                <div className="relative flex-1 translate-y-[-0.5rem] translate-x-[0.5rem]">
                                  <button
                                    className="absolute right-0 pb-2 pl-2"
                                    onClick={() =>
                                      removeField(field?.id, index)
                                    }
                                  >
                                    <Ai.AiOutlineDelete className="w-5 h-5 text-black" />
                                  </button>
                                </div>
                                <div className="z-0 w-full mb-6 group">
                                  <label className="text-lg text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 scale-75 -translate-y-6">
                                    {field.type == "date" ? "" : field.label}
                                  </label>
                                  <input
                                    readOnly
                                    type={field.type}
                                    name="floating_email"
                                    className={`px-2 block w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer ${
                                      field.type == "date" ? "py-3" : ""
                                    }`}
                                    placeholder=" "
                                    required
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </Draggable>
                    );
                })}
                {provided.placeholder}
                {fields[type].length > 0 ? (
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        setIsEdit(false);
                        setDataEdit({ label: "", type: "text" });
                        setVisibleModalNewField(true);
                        setAddField(type);
                      }}
                    >
                      <Bs.BsPlusSquare className="w-5 h-5 text-black" />
                    </button>
                  </div>
                ) : (
                  <div className="flex-1 p-6  border-dashed border border-gray-500 rounded-lg">
                    <h1 className="text-center text-gray-400 text-sm font-medium">
                      {pageTranslate?.drop_fields_here}
                    </h1>
                  </div>
                )}
              </div>
            </div>
          )}
        </StrictModeDroppable>
      </div>
    </div>
  );
}
