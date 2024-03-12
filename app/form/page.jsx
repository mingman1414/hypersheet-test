"use client";
import { Translate } from "@/app/api/translate";
import CameraPhoto from "@/app/controls/CameraPhoto/Camera/CameraPhoto";
import * as React from "react";
import * as Ai from "react-icons/ai";
import "../folders/style.css";
export default function Form() {
  const [fields, setFields] = React.useState([]);
  const [headingForm, setHeadingForm] = React.useState([]);
  const [dataTranslate, setDataTranslate] = React.useState({});
  const [identityImage, setIdentityImage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [istakePhoto, setIsTakePhoto] = React.useState(false);
  const [dataForm, setDataForm] = React.useState({});
  const [targetLang, setTargetLang] = React.useState("");
  const requestTranlate = {
    source_lang: "en",
    target_lang: targetLang,
    click_to_upload: "Click to upload",
    or_drag_and_drop: "or drag and drop",
    take_a_photo: "Take A Photo",
    get_file_from_your_device: "Get File From Your Device",
    click_to_take_a_photo: "Click to take a photo",
    take_a_photo_again: "Take a photo again",
    submit: "Submit",
    result_saved: "Result saved",
    form_data_not_found: "Form data not found!",
  };
  async function getDataTranslate(translateMore) {
    const _requestTranlate = {
      ...requestTranlate,
      ...translateMore,
    };
    const formDatab = new FormData();

    for (const key in _requestTranlate) {
      formDatab.append(key, _requestTranlate[key]);
    }
    const response = await Translate(formDatab);
    if (response.success) {
      setDataTranslate({ ...response.data });
    }
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setIdentityImage(e.target.result);
        localStorage.setItem(
          "base64Img",
          e.target.result.replace("data:image/png;base64,", "")
        );
      };
      reader.readAsDataURL(file);
    }
  };
  const autoGenCode = (jsonData) => {
    const prefix = (jsonData?.prefix || 0) + "";
    const defaultValue = (jsonData?.defaultValue || 0) + "";
    const length = parseInt(jsonData?.length || 2);

    const zerosCount = Math.max(
      length - prefix.length - defaultValue.length,
      0
    );
    let generatedString = prefix + "0".repeat(zerosCount) + defaultValue;

    return generatedString;
  };
  React.useEffect(() => {
    setFields(JSON.parse(localStorage.getItem("formItem"))?.fields || []);
    setHeadingForm(
      JSON.parse(localStorage.getItem("formItem"))?.headingForm || {}
    );

    // const transformedArray =
    //   JSON.parse(localStorage?.getItem("formItem")).fields == null
    //     ? {}
    //     : JSON.parse(localStorage.getItem("formItem")).fields.reduce(
    //         (result, item) => {
    //           result[item.key] = item.label;
    //           return result;
    //         },
    //         {}
    //       );
    // const result = {};
    // var fields = JSON.parse(localStorage.getItem("formItem"))?.fields;
    // if (fields.length > 0) {
    //   fields.forEach((item) => {
    //     result[item.id] = item.value;
    //   });
    // }
    // setDataForm(result);
    getDataTranslate(requestTranlate);
  }, [targetLang]);
  React.useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("prefered_local") || "vi";
    setTargetLang(value);
  }, []);
  return (
    <div className="relative w-full max-h-full">
      <div className="relative">
        <div className="">
          <div className="flex justify-center">
            <div className="md:w-5/12 w-full  bg-white h-[100vh] overflow-x-auto shadow-md has-scrollbar relative">
              {/* <div className="absolute w-[20rem] h-[20rem] rounded-full bg-indigo-600  translate-y-[-10rem] translate-x-[-5rem]"></div> */}
              <div className=" lg:p-12 p-8">
                <div className="py-8">
                  <h1 className="text-3xl font-bold text-black text-center pb-4">
                    {headingForm.title}
                  </h1>
                  <h1 className="text-xl font-bold text-black  pb-4">
                    {headingForm.discription}
                  </h1>
                </div>
                {fields?.map((field) => {
                  if (field.type != "file") {
                    if (field.type == "heading") {
                      return (
                        <div className="mb-4  rounded-lg " key={Math.random()}>
                          <h1 className="text-center text-black text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            {field.title}
                          </h1>
                          <h1 className=" text-black text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            {field.discription}
                          </h1>
                        </div>
                      );
                    } else if (field.type == "divider") {
                      return (
                        <div className="my-8  rounded-lg " key={Math.random()}>
                          <hr className="border-2 bg-gray-400"></hr>
                        </div>
                      );
                    } else if (
                      field.type == "radio" ||
                      field.type == "checkbox"
                    ) {
                      return (
                        <div className="my-8  rounded-lg " key={Math.random()}>
                          <div className="flex items-center pl-3">
                            <input
                              id={field.id}
                              defaultChecked={dataForm[field.id]}
                              onBlur={(e) => {
                                setDataForm({
                                  ...dataForm,
                                  [field?.id]: e.target.checked,
                                });
                              }}
                              type={field.type}
                              name="list-radio"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                            />
                            <label
                              className="w-full py-3 ml-2 text-md text-gray-500"
                              htmlFor={field.id}
                            >
                              {`${field.label}`}
                            </label>
                          </div>
                        </div>
                      );
                    } else if (
                      field.type == "dropdown" ||
                      field.type == "contactList"
                    ) {
                      return (
                        <div className=" w-full my-6 group" key={Math.random()}>
                          <h1 className="w-full py-3  text-sm text-gray-500">
                            {`${field.label} ${
                              field?.required == true ? "(*)" : ""
                            }`}
                          </h1>
                          <select
                            id={field.id}
                            className={`border border-gray-300
               bg-gray-50  text-gray-900 text-lg rounded-lg  block w-full p-2.5`}
                            value={dataForm[field?.id]?.value}
                            onChange={(e) => {
                              setDataForm({
                                ...dataForm,
                                [field?.id]: { value: e.target.value },
                              });
                            }}
                          >
                            {field.values?.map((item) => (
                              <option
                                key={Math.random()}
                                value={item}
                                className="text-md"
                              >
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      );
                    } else
                      return (
                        // <div className="mb-4  rounded-lg " key={Math.random()}  >
                        //   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        //     {field.label}
                        //   </label>
                        //   <input type={field.type} id="password" className="  border-b border-gray-300 text-black text-sm   block w-full p-2.5" placeholder={field.placeholder}/>
                        // </div>
                        <div
                          className="relative z-0 w-full mb-6 group"
                          key={Math.random()}
                        >
                          <input
                            type={
                              field.type === "autoNumber" ? "text" : field.type
                            }
                            name="floating_email"
                            className="px-2 block py-3 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            readOnly={field.type === "autoNumber"}
                            defaultValue={
                              field.type === "autoNumber"
                                ? autoGenCode(field?.config)
                                : dataForm[field?.id]
                            }
                            onBlur={(e) => {
                              setDataForm({
                                ...dataForm,
                                [field?.id]: e.target.value,
                              });
                            }}
                          />
                          <h1 className="peer-focus:text-lg absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            {`${field.type == "date" ? "" : field.label} ${
                              field.required == true ? "(*)" : ""
                            }`}
                          </h1>
                        </div>
                      );
                  } else {
                    return (
                      <div key={Math.random()}>
                        {!istakePhoto && (
                          <div key={Math.random()}>
                            <div
                              className="mb-4 flex items-center justify-center w-full"
                              key={Math.random()}
                            >
                              {identityImage.length > 0 && !istakePhoto ? (
                                <img
                                  src={identityImage}
                                  alt="Uploaded"
                                  style={{
                                    maxWidth: "100%",
                                    maxHeight: "400px",
                                  }}
                                />
                              ) : (
                                <div key={Math.random()} className="w-full">
                                  <label
                                    htmlFor={field.id}
                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
                                  >
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
                                          {dataTranslate.click_to_upload}
                                        </span>
                                        {dataTranslate.or_drag_and_drop}{" "}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                                      </p>
                                    </div>
                                    <input
                                      id={field.id}
                                      type="file"
                                      className="hidden"
                                      onChange={(e) => handleImageUpload(e)}
                                    />
                                  </label>
                                </div>
                              )}
                            </div>
                            {identityImage.length > 0 && (
                              <div className="flex justify-center">
                                <button
                                  className="w-1/2 bg-slate-400 text-white font-normal text-lg py-2 px-0.5 rounded-xl flex justify-center mt-3"
                                  onClick={() => {
                                    setOpen(!open);
                                    setIdentityImage("");
                                  }}
                                >
                                  <span className="mr-2">
                                    {dataTranslate.take_a_photo_again}
                                  </span>
                                  <Ai.AiOutlineReload
                                    style={{ marginTop: "5px" }}
                                    color="white"
                                  />
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                        <div>
                          {fields?.some((item) => item.type == "file") && (
                            <div className="mb-4" key={Math.random()}>
                              {open && istakePhoto ? (
                                <div className="flex flex-col">
                                  <CameraPhoto
                                    dataTranslate={dataTranslate}
                                    ContactImageURL={identityImage}
                                    cameraCallback={(byte64) => {
                                      setIdentityImage(
                                        byte64.replace(
                                          "data:image/png;base64,",
                                          ""
                                        )
                                      );
                                      localStorage.setItem(
                                        "base64Img",
                                        byte64.replace(
                                          "data:image/png;base64,",
                                          ""
                                        )
                                      );
                                    }}
                                  />
                                  {identityImage.length > 0 && (
                                    <div className="flex justify-center">
                                      <button
                                        className="w-1/2 bg-slate-400 text-white font-normal text-lg py-2 px-0.5 rounded-xl flex justify-center mt-3"
                                        onClick={() => {
                                          setOpen(!open);
                                          setIdentityImage("");
                                        }}
                                      >
                                        <span className="mr-2">
                                          {dataTranslate.take_a_photo_again}
                                        </span>
                                        <Ai.AiOutlineReload
                                          style={{ marginTop: "5px" }}
                                          color="white"
                                        />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              ) : !open && istakePhoto ? (
                                <div
                                  className="flex items-center justify-center w-full"
                                  onClick={() => setOpen(!open)}
                                >
                                  <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="currentColor"
                                        className="bi bi-camera"
                                        viewBox="0 0 16 16"
                                        style={{ color: "#6b7280" }}
                                      >
                                        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />{" "}
                                        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />{" "}
                                      </svg>
                                      <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">
                                          {dataTranslate.click_to_take_a_photo}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          )}
                          {fields?.some((item) => item.type == "file") && (
                            <div
                              className="pb-4 flex justify-end"
                              key={Math.random()}
                            >
                              <button
                                className="px-4 py-2 bg-indigo-400 text-white rounded-lg"
                                onClick={() => setIsTakePhoto(!istakePhoto)}
                              >
                                {istakePhoto
                                  ? dataTranslate.get_file_from_your_device
                                  : dataTranslate.take_a_photo}
                              </button>
                            </div>
                          )}
                        </div>
                        {/* Take a photo */}

                        {/*  */}
                      </div>
                    );
                  }
                })}
                {fields?.length > 0 ? (
                  <button
                    className="px-4 py-2 bg-indigo-400 text-white rounded-lg"
                    onClick={() => {
                      alert(dataTranslate.result_saved);
                    }}
                  >
                    {dataTranslate.submit}
                  </button>
                ) : (
                  <h1 className="text-center">
                    {dataTranslate?.form_data_not_found}
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
