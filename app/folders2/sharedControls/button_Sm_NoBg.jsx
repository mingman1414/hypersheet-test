import React from "react";

const Button_Sm_NoBg = ({
  bg,
  color,
  colorHover,
  bgHover,
  size,
  padding,
  rounded,
  border,
  fontWeight,
  onClick,
  leftIcon,
  rightIcon,
  text,
  height,
}) => {
  return (
    <div>
      <button
        className={`${bg != null && bg} 
        ${color != null && color} ${colorHover != null && colorHover}
        ${bgHover != null && bgHover} 
        ${padding != null && padding}
        ${rounded != null && rounded} ${size != null && size} ${
          border != null && border
        } ${size != null && size} flex items-center`}
        onClick={onClick}
      >
        <div>{leftIcon}</div>
        <div className="pl-2 text-sm">{text}</div>
        <div>{rightIcon}</div>
      </button>
    </div>
  );
};

export default Button_Sm_NoBg;
