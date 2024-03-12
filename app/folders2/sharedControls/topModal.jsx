import React from "react";
import * as Fi from "react-icons/fi";
import Button_Sm_NoBg from "./button_Sm_NoBg";
import TitleText from "./titleText";

const TopModal = ({
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
      className={`h-[${height}px] flex items-center justify-between p-${padding} border-b rounded-t ${
        bg != null && bg
      }`}
    >
      <Button_Sm_NoBg
        color={"text-gray-800"}
        colorHover={"hover:text-bule-500"}
        bgHover={"hover:bg-blue-100"}
        padding={"px-3 py-2"}
        rounded={"rounded-lg"}
        pageTranslate={pageTranslate}
        leftIcon={<Fi.FiArrowLeft className="w-5 h-5 " />}
        onClick={() => setVisible(false)}
        text={pageTranslate.back}
      />
      <TitleText title={"PHOENIX FORM"} />
      <div className="flex items-center">
        <Button_Sm_NoBg
          color={"text-blue-800"}
          padding={"px-3 py-2"}
          pageTranslate={pageTranslate}
          onClick={openForm}
          text={pageTranslate.open_form}
        />

        <Button_Sm_NoBg
          bg={"bg-blue-500"}
          color={"text-white"}
          size={"text-sm"}
          padding={"px-3 py-2"}
          rounded={"rounded-lg"}
          pageTranslate={pageTranslate}
          onClick={saveForm}
          text={pageTranslate.save_form}
        />
      </div>
    </div>
  );
};

export default TopModal;
