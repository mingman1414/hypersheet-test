import React from "react";

const Button_Sm = ({
  bg,
  color,
  colorHover,
  bgHover,
  size,
  padding,
  rounded,
  fontWeight,
  onClick,
  leftIcon,
  rightIcon,
  text,
}) => {
  return (
    <div>
      <button
        className={`${bg != null && bg} 
        ${color != null && color} ${colorHover != null && colorHover}
        ${bgHover != null && bgHover} 
        ${padding != null && padding}
        ${rounded != null && rounded} ${
          size != null && size
        } flex items-center`}
        onClick={onClick}
      >
        <div>{leftIcon}</div>
        <h1 className="pl-2 text-sm">{text}</h1>
      </button>
    </div>
  );
};

export default Button_Sm;
