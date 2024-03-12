import React from "react";
import * as Fi from "react-icons/fi";
import Button_Sm_NoBg from "./button_Sm_NoBg";
import TitleText from "./titleText";
import * as Ri from "react-icons/ri";
import * as Md from "react-icons/md";

const TopModal2 = ({
  pageTranslate,
  bg,
  padding,
  height,
  setVisible,
  saveForm,
  openForm,
}) => {
  return (
    <div
      className={`h-[${height}px] flex items-center justify-between ${
        padding != null && padding
      } border-b rounded-t ${bg != null && "bg-white"}`}
    >
      {/* <Button_Sm_NoBg
        color={"text-gray-800"}
        colorHover={"hover:text-bule-500"}
        bgHover={"hover:bg-blue-100"}
        padding={"px-3 py-2"}
        rounded={"rounded-lg"}
        pageTranslate={pageTranslate}
        leftIcon={<Fi.FiArrowLeft className="w-5 h-5 " />}
        onClick={() => setVisible(false)}
        text={pageTranslate.back}
      /> */}
      <div className="flex items-center">
        {/* <img
          src={
            "https://static.vecteezy.com/system/resources/previews/023/618/272/original/phoenix-icon-clipart-free-free-png.png"
          }
          className="w-8 h-8 mr-2"
          alt="Vietnam free icon"
        /> */}
        <h1 className="text-lg">Contact Us</h1>
        <Ri.RiArrowDropDownLine className="w-5 h-5 " />
      </div>
      <TitleText title={"PHOENIX FORM"} />
      <div className="flex items-center space-x-2">
        <Button_Sm_NoBg
          bg={"bg-white"}
          color={"text-blue-500"}
          size={"text-sm"}
          padding={"px-3 py-2"}
          rounded={"rounded-full"}
          border={"border border-blue-500"}
          pageTranslate={pageTranslate}
          onClick={openForm}
          text={pageTranslate.open_form}
        />

        <Button_Sm_NoBg
          bg={"bg-blue-500"}
          color={"text-white"}
          size={"text-sm"}
          padding={"px-3 py-2"}
          rounded={"rounded-full"}
          pageTranslate={pageTranslate}
          onClick={saveForm}
          text={pageTranslate.save_form}
        />
        <Button_Sm_NoBg
          bg={"bg-white"}
          color={"text-gray-800"}
          size={"text-sm"}
          bgHover={"hover:text-blue-500"}
          border={"border-l-2 "}
          padding={"px-3 py-2"}
          pageTranslate={pageTranslate}
          onClick={() => setVisible(false)}
          leftIcon={<Md.MdOutlineClose className="w-5 h-5 " />}
        />
      </div>
    </div>
  );
};

export default TopModal2;
