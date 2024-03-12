import * as React from "react";

export default function NewFieldModal({
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
}) {
  const [error, setError] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState({
    value: data?.type,
    label: data?.typeName,
  });
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
      });
    }
  }, []);
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 ${
        visibleModalNewField ? " bg-gray-100 bg-opacity-70" : "hidden"
      } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full h-[100vh] flex justify-center items-center`}
    >
      <div className="w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
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
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 ">
              {!isEdit ? pageTranslate?.new_field : pageTranslate?.edit_field}
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  {pageTranslate?.field_name}
                </label>
                <input
                  type="text"
                  name="label"
                  className={`${
                    error ? "border border-red-500" : "border border-gray-300"
                  } bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
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
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  {pageTranslate?.field_type}
                </label>
                <div className="h-[200px] overflow-y-scroll overflow-hidden">
                  <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                    {/* <li className="w-full border-b border-gray-200 rounded-t-lg">
                      <div className="flex items-center pl-3">
                        <input
                          id="text"
                          checked={data?.type == "text"}
                          onChange={(e) =>
                            setDataEdit({ ...data, type: e.target.value })
                          }
                          type="radio"
                          value="text"
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                          htmlFor="text"
                        >
                          Text
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg">
                      <div className="flex items-center pl-3">
                        <input
                          id="number"
                          checked={data?.type == "number"}
                          onChange={(e) =>
                            setDataEdit({ ...data, type: e.target.value })
                          }
                          type="radio"
                          value="number"
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                          htmlFor="number"
                        >
                          Number
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg">
                      <div className="flex items-center pl-3">
                        <input
                          id="date"
                          checked={data?.type == "date"}
                          onChange={(e) =>
                            setDataEdit({ ...data, type: e.target.value })
                          }
                          type="radio"
                          value="date"
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                          htmlFor="date"
                        >
                          DateTime
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg">
                      <div className="flex items-center pl-3">
                        <input
                          id="dropdown"
                          checked={data?.type == "dropdown"}
                          onChange={(e) =>
                            setDataEdit({ ...data, type: e.target.value })
                          }
                          type="radio"
                          value="dropdown"
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                          htmlFor="dropdown"
                        >
                          Dropdown
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg">
                      <div className="flex items-center pl-3">
                        <input
                          id="radio"
                          checked={data?.type == "radio"}
                          onChange={(e) =>
                            setDataEdit({ ...data, type: e.target.value })
                          }
                          type="radio"
                          value="radio"
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                          htmlFor="radio"
                        >
                          Radio
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg">
                      <div className="flex items-center pl-3">
                        <input
                          id="checkbox"
                          checked={data?.type == "checkbox"}
                          onChange={(e) =>
                            setDataEdit({ ...data, type: e.target.value })
                          }
                          type="radio"
                          value="checkbox"
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                          htmlFor="checkbox"
                        >
                          Checkbox
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg">
                      <div className="flex items-center pl-3">
                        <input
                          id="autoNumber"
                          checked={data?.type == "autoNumber"}
                          onChange={(e) =>
                            setDataEdit({ ...data, type: e.target.value })
                          }
                          type="radio"
                          value="autoNumber"
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <label
                          className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                          htmlFor="autoNumber"
                        >
                          Auto number
                        </label>
                      </div>
                    </li> */}
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
                              setDataEdit({ ...data, type: e.target.value })
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
              </div>
              {/* <select
                className={`border border-gray-300
               bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5`}
                value={data?.type}
                onChange={(e) => {
                  setDataEdit({
                    ...data,
                    type: e.target.value,
                  });
                }}
              >
                {options.map((item) => (
                  <option key={Math.random()} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select> */}
              {(data?.type == "dropdown" || data?.type == "contactList") && (
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    {pageTranslate?.values}
                  </label>
                  {/* <input
                  type="text"
                  name="label"
                  className={`${
                    error ? "border border-red-500" : "border border-gray-300"
                  } bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
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
                /> */}
                  <textarea
                    type="text"
                    name="label"
                    className={`border border-gray-300 bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
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
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Prefix
                      </label>
                      <input
                        type="text"
                        name="label"
                        className={`border border-gray-300 bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
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
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Sufix
                      </label>
                      <input
                        type="text"
                        name="label"
                        className={`border border-gray-300 bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
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
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Length
                      </label>
                      <select
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
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Default value
                      </label>
                      <input
                        type="text"
                        name="label"
                        className={`border border-gray-300 bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
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

              <button
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
                    if (data.label != "") {
                      const tempFields = { ...fields };
                      const oldFields = tempFields["fieldSelectedList"];
                      oldFields[copyData.index] = copyData;
                      setFields({ ...fields, fieldSelectedList: oldFields });
                      setVisibleModalNewField(false);
                      setDataEdit({ label: "" });
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
                {isEdit ? "EDIT" : "ADD"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
