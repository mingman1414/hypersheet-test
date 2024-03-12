import * as React from "react";
import * as Pi from "react-icons/pi";
import * as Bs from "react-icons/bs";
import * as Go from "react-icons/go";
import * as Cg from "react-icons/cg";
import * as Rx from "react-icons/rx";
import * as Ri from "react-icons/ri";
import * as Im from "react-icons/im";
import * as Io5 from "react-icons/io5";
import * as Md from "react-icons/md";

export default function FieldItem({
  field,
  id,
  index,
  addFieldForm,
  pageTranslate,
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`flex-1 p-3 border-solid border border-light-blue-500 mb-2 bg-white hover:border-gray-400 rounded-lg`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-bold">
            {field.type == "text" && <Pi.PiTextTLight className="w-5 h-5 " />}
            {field.type == "date" && <Bs.BsCalendar className="w-4 h-4 " />}
            {field.type == "number" && <Go.GoNumber className="w-4 h-4 " />}
            {field.type == "file" && <Cg.CgAttachment className="w-4 h-4 " />}
            {field.type == "heading" && <Rx.RxHeading className="w-5 h-5 " />}
            {field.type == "divider" && <Ri.RiSeparator className="w-5 h-5 " />}
            {field.type == "radio" && (
              <Im.ImRadioChecked className="w-5 h-5 " />
            )}
            {field.type == "checkbox" && (
              <Io5.IoCheckboxOutline className="w-5 h-5 " />
            )}
            {field.type == "dropdown" && (
              <Rx.RxDropdownMenu className="w-5 h-5 " />
            )}
            {field.type == "autoNumber" && (
              <Md.MdOutlineAutorenew className="w-5 h-5 " />
            )}
          </div>
          <div className="px-4 text-sm font-medium">{field.label}</div>
        </div>
        <button
          className={`icon ${isHovered ? "visible" : ""}`}
          onClick={() => addFieldForm(id, index, field)}
        >
          <Bs.BsPlus size={20} />
        </button>
      </div>
    </div>
  );
}
