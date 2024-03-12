import * as React from "react";
import * as Pi from "react-icons/pi";
import * as Fi from "react-icons/fi";
export default function RightPanel({
  setVisibleModalNewField,
  currentField,
  setDataEdit,
  setIsEdit,
  pageTranslate,
  setCurrentField,
  headingForm,
  setHeadingForm,
  fields,
  setFields,
}) {
  const validations = [
    {
      label: "Number Only",
      key: "number_only",
    },
    {
      label: "Percentage",
      key: "percentage",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Phone",
      key: "phone",
    },
    {
      label: "No Validation",
      key: "no_validation",
    },
  ];
  const displayAs = [
    {
      label: "Sigle-line text box",
      key: "sigle_line_text_box",
    },
    {
      label: "Multi-line text box",
      key: "multi_line_text_box",
    },
  ];
  const handleChangeHeadingField = (data) => {
    const tempFields = { ...fields };
    const oldFields = tempFields["fieldSelectedList"];
    oldFields[data.index] = data;
    setFields({ ...fields, fieldSelectedList: oldFields });
  };
  return (
    <div className="w-4/12 bg-gray-100 h-[calc(100vh-50px)]  overflow-x-auto shadow-md has-scrollbar">
      <div className="p-4">
        {currentField?.id == headingForm?.id ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-bold ">
                {pageTranslate?.form_title}
              </div>
            </div>
            <div className="mb-4">
              <div className="block text-sm font-bold mb-2">
                {pageTranslate?.title}
              </div>
              <input
                type="text"
                className=" bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={headingForm?.name || ""}
                onChange={(e) => {
                  setHeadingForm({
                    ...headingForm,
                    name: e.target.value,
                  });
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                {pageTranslate?.discription}
              </label>
              <input
                value={headingForm?.discription || ""}
                onChange={(e) => {
                  setHeadingForm({
                    ...headingForm,
                    discription: e.target.value,
                  });
                }}
                type="text"
                className=" bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-bold ">
                {pageTranslate?.field_settings}
              </div>
            </div>
            <div className="flex-1 px-3 py-1 border-solid border border-light-blue-500 mb-2 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex justify-center items-center">
                    <div className="text-2xl font-bold">
                      <Pi.PiTextTLight className="w-8 h-8 " />
                    </div>
                  </div>
                  <div className="pl-3">
                    <h1 className="text-base ">{currentField?.label}</h1>
                    <h2 className="text-base text-gray-400">
                      {currentField?.type} ({pageTranslate?.primary_field})
                    </h2>
                  </div>
                </div>
                {currentField != null &&
                  !["heading", "file", "divider"].includes(
                    currentField?.type
                  ) && (
                    <button
                      onClick={() => {
                        setVisibleModalNewField(true);
                        setIsEdit(true);
                        setDataEdit(currentField);
                      }}
                    >
                      <Fi.FiEdit3 className="w-4 h-4 " />
                    </button>
                  )}
              </div>
            </div>

            <div className="border-b border-gray-300 flex justify-center mb-8">
              <div className="px-4 font-bold">Field</div>
              <div className="px-4">Logic</div>
            </div>
            <div className="mb-4">
              <div className="block text-sm font-bold mb-2">
                {pageTranslate?.label}
              </div>
              <input
                type="text"
                className=" bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-gray-500 focus:outline-none focus:border-gray-500 block w-full p-2.5"
                value={currentField?.title || ""}
                onChange={(e) => {
                  if (currentField?.type == "heading") {
                    setCurrentField({
                      ...currentField,
                      title: e.target.value,
                    });
                    handleChangeHeadingField({
                      ...currentField,
                      title: e.target.value,
                    });
                  }
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                {pageTranslate?.discription}
              </label>
              <input
                value={currentField?.discription || ""}
                onChange={(e) => {
                  if (currentField?.type == "heading") {
                    setCurrentField({
                      ...currentField,
                      discription: e.target.value,
                    });
                    handleChangeHeadingField({
                      ...currentField,
                      discription: e.target.value,
                    });
                  }
                }}
                type="text"
                className=" bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-2">
              <label className="relative inline-flex items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={() => {}}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-300"></div>
                <span className="ml-3 text-sm font-medium ">
                  {pageTranslate?.required}
                </span>
              </label>
            </div>
            <div className="mb-2">
              <label className="relative inline-flex items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={() => {}}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-300"></div>
                <span className="ml-3 text-sm font-medium ">
                  {pageTranslate?.hidden}
                </span>
              </label>
            </div>
            <div className="mb-4">
              <h1 className="font-bold">{pageTranslate?.validation}</h1>
              {validations.map((validation) => {
                return (
                  <div className="flex items-center pl-3" key={Math.random()}>
                    <input
                      type="radio"
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                      onChange={() => {}}
                    />
                    <label className="w-full py-1 ml-2 text-sm font-medium ">
                      {pageTranslate[validation?.key]}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="mb-4">
              <h1 className="font-bold">{pageTranslate?.display_as}</h1>
              {displayAs.map((item) => {
                return (
                  <div className="flex items-center pl-3" key={Math.random()}>
                    <input
                      type="radio"
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                    />
                    <label className="w-full py-1 ml-2 text-sm font-medium ">
                      {pageTranslate[item?.key]}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="mb-4">
              <h1 className="font-bold">{pageTranslate?.default_value}</h1>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 focus:outline-none"
                required
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
