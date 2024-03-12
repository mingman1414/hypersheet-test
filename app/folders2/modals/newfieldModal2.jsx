import * as React from "react";

export default function NewFieldModal2({
  pageTranslate,
  addField,
  visibleModalNewField,
  setVisibleModalNewField,
  fields,
  setFields,
  isEdit,
  data,
  setDataEdit,
  setCurrentField,
  headingForm,
  setHeadingForm,
}) {
  const [error, setError] = React.useState(false);
  var options = [
    { disable: false, value: "text", label: "Text" },
    { disable: false, value: "number", label: "Number" },
    { disable: false, value: "date", label: "Datetime" },
    { disable: false, value: "checkbox", label: "Checkbox" },
    { disable: false, value: "radio", label: "Radio" },
    { disable: false, value: "dropdown", label: "Dropdown" },
    { disable: false, value: "autoNumber", label: "AutoNumber" },
    { disable: false, value: "contactList", label: "Contact list" },
    { disable: false, value: "createdDate", label: "Created date" },
    { disable: false, value: "createdBy", label: "Created by" },
    { disable: false, value: "updatedDate", label: "Updated date" },
    { disable: false, value: "updatedBy", label: "Updated by" },
  ];
  const lengthOptions = [
    { value: "1", label: "0" },
    { value: "2", label: "00" },
    { value: "3", label: "000" },
    { value: "4", label: "0000" },
    { value: "5", label: "00000" },
    { value: "6", label: "000000" },
  ];
  const hideFieldList = [
    "createdDate",
    "createdBy",
    "updatedDate",
    "updatedBy",
    "duration",
  ];
  const checkExistHideField = (typeInput) => {
    const result =
      fields["fieldSelectedList"].length > 0
        ? fields["fieldSelectedList"].find((item) => item.type == typeInput) &&
          hideFieldList.includes(typeInput)
        : false;
    return result;
  };
  React.useEffect(() => {
    if (!isEdit) {
      setDataEdit({
        ...data,
        type: "text",
        typeName: "Text",
        required: false,
      });
    }
  }, []);
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 ${
        visibleModalNewField ? " bg-gray-100 bg-opacity-70" : "hidden"
      } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full  flex justify-center items-center`}
    >
      <div className="w-full max-w-4xl max-h-full">
        <div className="relative bg-indigo-400 rounded-t-lg shadow ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            data-modal-hide="authentication-modal"
            onClick={() => {
              setVisibleModalNewField(false);
              setDataEdit({ label: "", type: "text" });
              setError(false);
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
          <div className="p-4 lg:px-8">
            <h3 className=" text-xl font-medium text-white ">
              {!isEdit ? pageTranslate?.new_field : pageTranslate?.edit_field}
            </h3>
          </div>
        </div>
        <div className="bg-white rounded-b-lg">
          <div className="flex  w-full ">
            {/* LEFT */}
            <div className="w-[50%]  p-4">
              <div className="space-y-6">
                <div>
                  <h1 className="block mb-2 text-md font-medium text-gray-900">
                    {pageTranslate?.field_name}
                  </h1>
                  <input
                    type="text"
                    name="label"
                    className={`${
                      error ? "border border-red-500" : "border border-gray-300"
                    } bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-transparent`}
                    placeholder={pageTranslate.enter_a_field_name}
                    required
                    onChange={(e) => {
                      setDataEdit({
                        ...data,
                        id: Math.random() + "",
                        [e.target.name]: e.target.value,
                        key: e.target.value,
                        placeholder: e.target.value,
                      });
                    }}
                    value={data?.label || ""}
                  />
                </div>
                {data?.type != "headingForm" && (
                  <div>
                    <div className="block mb-2 text-md font-medium text-gray-900 flex">
                      {`${pageTranslate?.field_type} `}
                      <div className="text-red-500 px-2">
                        {isEdit == true ? data.type : ""}
                      </div>
                    </div>
                    {!isEdit && (
                      <div className="h-[400px] overflow-y-scroll overflow-hidden has-scrollbar">
                        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                          {options.map((item) => (
                            <li
                              className="w-full border-b border-gray-200 rounded-t-lg"
                              key={Math.random() + ""}
                            >
                              <div className="flex items-center pl-3">
                                <input
                                  disabled={checkExistHideField(item.value)}
                                  id={item.value}
                                  checked={data?.type == item.value}
                                  onChange={(e) =>
                                    setDataEdit({
                                      ...data,
                                      type: e.target.value,
                                    })
                                  }
                                  type="radio"
                                  value={item.value}
                                  name="list-radio"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                />
                                <label
                                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                                  htmlFor={item.value}
                                >
                                  {item.label}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-[50%]  p-4">
              {(data?.type === "heading" || data?.type === "headingForm") && (
                <div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-md font-medium text-gray-900"
                      htmlFor="title"
                    >
                      {pageTranslate?.title}
                    </label>
                    <textarea
                      id="title"
                      type="text"
                      name="label"
                      className={`border border-gray-300 bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-transparent`}
                      placeholder={pageTranslate?.title}
                      required
                      onBlur={(e) => {
                        setDataEdit({
                          ...data,
                          title: e.target.value,
                        });
                      }}
                      defaultValue={data?.title || ""}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-md font-medium text-gray-900"
                      htmlFor="discription"
                    >
                      {pageTranslate?.discription}
                    </label>
                    <textarea
                      id="discription"
                      type="text"
                      name="label"
                      className={`border border-gray-300 bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-transparent`}
                      placeholder={pageTranslate?.discription}
                      required
                      onBlur={(e) => {
                        setDataEdit({
                          ...data,
                          discription: e.target.value,
                        });
                      }}
                      defaultValue={data?.discription || ""}
                    />
                  </div>
                </div>
              )}
              {(data?.type == "dropdown" || data?.type == "contactList") && (
                <div>
                  <div className="block mb-2 text-md font-medium text-gray-900 flex">
                    {`${pageTranslate?.values}`}
                    <div className="text-red-500 px-2">(,)</div>
                  </div>
                  <textarea
                    id="values_contact"
                    type="text"
                    name="label"
                    className={`border border-gray-300 bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-transparent`}
                    placeholder={pageTranslate?.values}
                    required
                    onBlur={(e) => {
                      var options = e.target.value?.split(",");
                      setDataEdit({
                        ...data,
                        values: options,
                      });
                    }}
                    defaultValue={
                      data?.values?.length > 0 ? data?.values?.join(",") : ""
                    }
                  />
                </div>
              )}
              {data?.type == "autoNumber" && (
                <div>
                  <div className="flex space-x-4 justify-between">
                    <div className="item">
                      <label
                        className="block mb-2 text-md font-medium text-gray-900"
                        htmlFor="prefix"
                      >
                        {pageTranslate?.prefix}
                      </label>
                      <input
                        id="prefix"
                        type="text"
                        name="label"
                        className={`border border-gray-300 bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-transparent text-right`}
                        placeholder=""
                        required
                        onChange={(e) => {
                          setDataEdit({
                            ...data,
                            config: {
                              ...data.config,
                              prefix: e.target.value,
                            },
                          });
                        }}
                        value={data?.config?.prefix || ""}
                      />
                    </div>
                    <div className="item">
                      <label
                        className="block mb-2 text-md font-medium text-gray-900"
                        htmlFor="sufix"
                      >
                        {pageTranslate?.suffix}
                      </label>
                      <input
                        id="sufix"
                        type="text"
                        name="label"
                        className={`border border-gray-300 bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-transparent text-right`}
                        placeholder=""
                        required
                        onChange={(e) => {
                          setDataEdit({
                            ...data,
                            config: {
                              ...data.config,
                              suffix: e.target.value,
                            },
                          });
                        }}
                        value={data?.config?.suffix || ""}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4 pt-4 justify-between">
                    <div className="item">
                      <h1 className="block mb-2 text-md font-medium text-gray-900">
                        {pageTranslate?.length}
                      </h1>
                      <select
                        id={"select_length"}
                        className={`border border-gray-300
               bg-gray-50  text-gray-900 text-sm rounded-lg  block  p-2.5`}
                        onChange={(e) => {
                          setDataEdit({
                            ...data,
                            config: {
                              ...data.config,
                              length: e.target.value,
                            },
                          });
                        }}
                        value={data?.config?.length || 1}
                      >
                        {lengthOptions.map((item) => (
                          <option key={Math.random()} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="item">
                      <h1 className="block mb-2 text-md font-medium text-gray-900">
                        {pageTranslate?.defaultValue}
                      </h1>
                      <input
                        type="text"
                        name="label"
                        className={`border border-gray-300 bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-transparent text-right`}
                        placeholder=""
                        required
                        onChange={(e) => {
                          setDataEdit({
                            ...data,
                            config: {
                              ...data.config,
                              defaultValue: e.target.value,
                            },
                          });
                        }}
                        value={data?.config?.defaultValue || ""}
                      />
                    </div>
                  </div>
                </div>
              )}
              {/*  */}
              <div className="my-4">
                <label
                  className="relative inline-flex items-center mr-5 cursor-pointer"
                  htmlFor="required_checkbox"
                >
                  <input
                    id="required_checkbox"
                    type="checkbox"
                    className="sr-only peer"
                    checked={data?.required || false}
                    onChange={(e) =>
                      setDataEdit({ ...data, required: e.target.checked })
                    }
                    value={data?.required || false}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-300"></div>
                  <span className="ml-3 text-md font-medium ">
                    {pageTranslate?.required}
                  </span>
                </label>
              </div>
              {/*  */}
            </div>
          </div>
          <div className="flex justify-end space-x-4 p-4">
            <button
              type="button"
              className="w-[100px] text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={(e) => {
                setVisibleModalNewField(false);
                setDataEdit({ label: "", type: "text" });
                setError(false);
              }}
            >
              {pageTranslate.cancel}
            </button>
            <button
              type="button"
              className="w-[100px] text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={(e) => {
                e.preventDefault();
                var copyData = {
                  ...data,
                  isShow: hideFieldList.includes(data.type) ? false : true,
                };
                if (!isEdit) {
                  if (data.label != "") {
                    const tempFields = { ...fields };
                    const oldFields = tempFields[addField];
                    const newFields = [...oldFields, copyData];
                    tempFields[addField] = newFields;
                    setFields({ ...tempFields });
                    setVisibleModalNewField(false);
                    setDataEdit({ label: "" });
                    //setNewField({ label: "" });
                    setError(false);
                  } else {
                    setError(true);
                  }
                } else {
                  if (data.type === "headingForm") {
                    setHeadingForm(data);
                    setVisibleModalNewField(false);
                    setDataEdit({ label: "", title: "", discription: "" });
                    setCurrentField(
                      !hideFieldList.includes(copyData.type) ? copyData : {}
                    );
                    setError(false);
                    return;
                  }
                  if (data.label != "") {
                    const tempFields = { ...fields };
                    const oldFields = tempFields["fieldSelectedList"];
                    oldFields[copyData.index] = copyData;
                    setFields({ ...fields, fieldSelectedList: oldFields });
                    setVisibleModalNewField(false);
                    setDataEdit({ label: "", title: "", discription: "" });
                    setCurrentField(
                      !hideFieldList.includes(copyData.type) ? copyData : {}
                    );
                    setError(false);
                  } else {
                    setError(true);
                  }
                }
              }}
            >
              {isEdit ? pageTranslate.edit : pageTranslate.add}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
