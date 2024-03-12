import React from "react";
import * as Ri from "react-icons/ri";

const MenuItem = ({ item }) => {
  const [expand, setExpand] = React.useState(false);
  return (
    <>
      <li
        key={item.id}
        className="px-2 py-1 text-sm text-gray-800 cursor-pointer hover:bg-blue-200"
        onClick={
          item.child.length > 0
            ? () => setExpand(!expand)
            : () => item.onClick()
        }
      >
        <div className="flex items-center">
          {item.child.length > 0 ? (
            <Ri.RiArrowDropDownLine className="w-4 h-4 " />
          ) : (
            <div className="w-4 h-4"></div>
          )}
          {item.icon}
          <div className="px-2">{item.name}</div>
        </div>
      </li>
      {item.child.length > 0 &&
        expand &&
        item.child.map((child) => (
          <li
            key={Math.random()}
            className="px-2 py-1 text-sm text-gray-800 cursor-pointer hover:bg-blue-200"
            onClick={() => child.onClick()}
          >
            <div className="flex items-center">
              {/* {child.icon} */}
              <div className="w-6 h-4"></div>
              <div className="px-2">{child.name}</div>
            </div>
          </li>
        ))}
    </>
  );
};

export default MenuItem;
