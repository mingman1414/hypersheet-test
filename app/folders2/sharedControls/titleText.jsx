import * as React from "react";

export default function TitleText({ title, padding, bg }) {
  return (
    <div
      className={`text-lg font-bold ${padding != null && padding} ${
        bg != null && bg
      }`}
    >
      {title}
    </div>
  );
}
