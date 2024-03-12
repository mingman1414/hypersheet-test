"use client";
import * as React from "react";
import TitleText from "../folders2/sharedControls/titleText";
import * as Ri from "react-icons/ri";
import * as Tb from "react-icons/tb";
import * as Io from "react-icons/io";
import * as Md from "react-icons/md";
import * as Fi from "react-icons/fi";
import * as Lu from "react-icons/lu";
import * as Ci from "react-icons/ci";
import * as Go from "react-icons/go";
import * as Bs from "react-icons/bs";
import * as Fa from "react-icons/fa";
import * as Hi from "react-icons/hi";
import * as Ti from "react-icons/ti";
import Button_Sm_NoBg from "../folders2/sharedControls/button_Sm_NoBg";
import MenuItem from "./components/menuItem";

export default function Personal() {
  const [expand, setExpand] = React.useState(false);
  const [list, setList] = React.useState([]);
  const left_options = [
    {
      id: 1,
      name: "WorkApps",
      icon: <Tb.TbApps className="w-4 h-4 " />,
      child: [],
    },
    {
      id: 2,
      name: "Sheet",
      child: [
        {
          id: 21,
          name: "child1",
          icon: <Ri.RiArrowDropDownLine className="w-4 h-4 " />,
          onClick: () => {},
        },
        {
          id: 22,
          name: "child1",
          icon: <Ri.RiArrowDropDownLine className="w-4 h-4 " />,
          onClick: () => {},
        },
      ],
      icon: <Io.IoMdFolderOpen className="w-4 h-4 " />,
      onClick: () => {},
    },
    {
      id: 3,
      name: "Workspaces",
      child: [
        {
          id: 31,
          name: "child1",
          icon: <Ri.RiArrowDropDownLine className="w-4 h-4 " />,
          onClick: () => {},
        },
        {
          id: 32,
          name: "child1",
          icon: <Ri.RiArrowDropDownLine className="w-4 h-4 " />,
          onClick: () => {},
        },
      ],
      icon: <Md.MdGroup className="w-4 h-4 " />,
      onClick: () => {},
    },
    {
      id: 4,
      name: "Delete Items",
      icon: <Fi.FiTrash className="w-4 h-4 " />,
      child: [],
      onClick: () => {},
    },
  ];
  const right_options = [
    {
      id: 10,
      name: "Grid",
      icon: <Lu.LuGrid className="w-4 h-4 " />,
      onClick: () => {},
    },
    {
      id: 20,
      name: "Task Lisk",
      icon: <Ci.CiBoxList className="w-4 h-4 " />,
      onClick: () => {},
    },
    {
      id: 30,
      name: "Project",
      icon: <Go.GoProject className="w-4 h-4 " />,
      onClick: () => {},
    },
    {
      id: 40,
      name: "Cards",
      icon: <Tb.TbLayoutGridAdd className="w-4 h-4 " />,
      onClick: () => {},
    },
    {
      id: 50,
      name: "Browse Template",
      icon: <Ci.CiGrid31 className="w-4 h-4 " />,
      onClick: () => {},
    },
    {
      id: 60,
      name: "Import Microsoft Excel",
      icon: <Bs.BsFileEarmarkExcel className="w-4 h-4 " />,
      onClick: () => {},
    },
    {
      id: 70,
      name: "Import Microsoft Project",
      icon: <Fa.FaRegFileAlt className="w-4 h-4 " />,
      onClick: () => {},
    },
    {
      id: 80,
      name: "Report",
      icon: <Hi.HiOutlineDocument className="w-4 h-4 " />,
      onClick: () => {},
    },
    {
      id: 90,
      name: "Dashbord/Portal",
      icon: <Md.MdDashboard className="w-4 h-4 " />,
      onClick: () => {},
    },
  ];

  // const readGoogleSheet = () => {
  //   // Sort results by id in descending order, take two
  //   // and return the age as an integer.
  //   fetch(`${process.env.SHEET_URL}`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  // const updateGoogleSheet = (id) => {
  //   fetch(`${process.env.SHEET_URL}/id/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       data: {
  //         id: "101",
  //       },
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  // const deleteGoogleSheet = (id) => {
  //   fetch(`${process.env.SHEET_URL}/id/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  // const createGoogleSheet = () => {
  //   fetch(`${process.env.SHEET_URL}`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       data: [
  //         {
  //           id: "5",
  //           name: "iphone2",
  //           category: "điện thoại",
  //           price: 123456,
  //         },
  //       ],
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  return (
    <div className=" flex h-[calc(100vh-65px)]">
      <div className="h-full w-3/12 border-r p-2 space-y-2">
        <TitleText title={"Browser"} />
        <ul className="space-y-2">
          {left_options.map((item) => (
            // <li
            //   key={item.id}
            //   className="px-2 text-sm text-gray-800 cursor-pointer hover:bg-blue-200"
            //   onClick={item.onClick}
            // >
            //   <div className="flex items-center">
            //     {item.child.length > 0 ? (
            //       <Ri.RiArrowDropDownLine className="w-4 h-4 " />
            //     ) : (
            //       <div className="w-4 h-4"></div>
            //     )}
            //     {item.icon}
            //     <div className="px-2">{item.name}</div>
            //   </div>
            // </li>
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div className="h-full w-9/12 p-2">
        <div className="flex justify-between items-center mb-2">
          <TitleText title={"Sheet"} />
          <Button_Sm_NoBg
            text={"Create"}
            bg={"bg-gray-300"}
            color={"text-gray-800"}
            size={"text-sm"}
            bgHover={"hover:text-blue-500"}
            border={""}
            rounded={"rounded-sm"}
            padding={"px-3 py-2"}
            onClick={() => setExpand(!expand)}
            rightIcon={<Ri.RiArrowDropDownLine className="w-4 h-4 " />}
          />
        </div>
        {expand && (
          <div className="absolute w-[200px] border border-gray-300 right-1 -translate-y-1 rounded-sm bg-white">
            <ul className=" space-y-1">
              {right_options.map((item) => (
                <li
                  key={item.id}
                  className="px-2 py-1 text-sm hover:bg-blue-100 text-gray-800 cursor-pointer"
                  onClick={() => {
                    item.onClick();
                    setExpand(!expand);
                  }}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <div className="px-2">{item.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="w-full h-full">
          <div className=" overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-300 rounded-lg ">
              <thead className="text-xs text-gray-700 uppercase  bg-gray-300">
                <tr>
                  <th scope="col" className="w-4 py-3"></th>
                  <th scope="col" className="w-4 py-3"></th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Owners
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last Update
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-blue-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <input
                      id="1"
                      type="checkbox"
                      value=""
                      className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <Ti.TiStarOutline className="w-5 h-5 " />
                  </th>
                  <td className="px-6 py-4">EmployeeOfTheMonth</td>
                  <td className="px-6 py-4">Tam Nguyen</td>
                  <td className="px-6 py-4">Last week</td>
                </tr>
                <tr className="bg-white border-b hover:bg-blue-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <input
                      id="2"
                      type="checkbox"
                      value=""
                      className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <Ti.TiStarOutline className="w-5 h-5 " />
                  </th>
                  <td className="px-6 py-4">EmployeeOfTheMonth</td>
                  <td className="px-6 py-4">Tam Nguyen</td>
                  <td className="px-6 py-4">Last week</td>
                </tr>
                <tr className="bg-white border-b hover:bg-blue-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <input
                      id="3"
                      type="checkbox"
                      value=""
                      className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <Ti.TiStarOutline className="w-5 h-5 " />
                  </th>
                  <td className="px-6 py-4">EmployeeOfTheMonth</td>
                  <td className="px-6 py-4">Tam Nguyen</td>
                  <td className="px-6 py-4">Last week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
