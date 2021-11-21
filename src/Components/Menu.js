import React from "react";
import { FiMenu, FiEdit2, FiTrash2 } from "react-icons/fi";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export default function Menu(props) {
  var currentList;

  if (
    props.tabs !== undefined &&
    props.currentTab !== undefined &&
    props.tabs.length > props.currentTab
  )
    currentList = props.tabs[props.currentTab];
  else currentList = { title: "No tabs yet", tasks: [] };

  return (
    <>
      <div className="fixed top-0 left-0 p-5 flex items-center justify-between bg-white w-full">
        <FiMenu
          onClick={() => props.setShowMenu(true)}
          className="text-2xl cursor-pointer hover:rotate-180 transition-transform transform duration-300"
        />
        <p className="text-blue-900 font-black text-xl">{currentList.title}</p>
        <div
          onClick={() => props.setHidden(!props.hidden)}
          className="text-2xl cursor-pointer hover:text-gray-700 transition-colors duration-200"
        >
          {!props.hidden ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
        </div>
      </div>
      <div
        className={
          "fixed top-0 left-0 flex flex-col bg-blue-50 w-full h-full transform transition-transform" +
          (props.showMenu ? " translate-x-0" : " -translate-x-full")
        }
      >
        <div className="flex items-center justify-between w-full border-b-2 border-blue-900 p-4">
          <p className="text-blue-900 font-black text-xl">My ToDo</p>
          <AiOutlinePlus
            className="text-3xl border-2 text-blue-900 border-blue-900 rounded-full cursor-pointer h-12 w-12"
            onClick={props.createTabPopup}
          />
        </div>

        <div className="w-full flex flex-col">
          {props.tabs &&
            props.tabs.map((item, id) => {
              return (
                <MenuItem
                  shown={id === props.currentTab}
                  item={item}
                  key={id}
                  click={() => {
                    props.changeTab(id);
                    props.setShowMenu(false);
                  }}
                  id={id}
                  editTabPopup={props.editTabPopup}
                  deleteTab={() => props.deleteTab(id)}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

function MenuItem(props) {
  return (
    <div
      onClick={props.click}
      className={
        "w-full flex items-center justify-between px-4 cursor-pointer transform transition-colors transition-transform hover:scale-101" +
        (props.shown ? " bg-blue-300" : " hover:bg-blue-200")
      }
    >
      <p className={"text-lg " + (props.shown ? " text-white" : " text-black")}>
        {props.item.title}
      </p>
      <div className="flex items-center justify-between">
        <FiEdit2
          className={
            "cursor-pointer h-12 w-8 p-1 transform hover:scale-105 transition-transform transition-colors duration-200" +
            (props.shown
              ? " text-white hover:text-gray-300"
              : " text-gray-700 hover:text-gray-900")
          }
          onClick={() => props.editTabPopup(props.id)}
        />
        <FiTrash2
          className={
            "cursor-pointer h-12 w-8 p-1 transform hover:scale-105 transition-transform transition-colors duration-200" +
            (props.shown
              ? " text-white hover:text-gray-300"
              : " text-gray-700 hover:text-gray-900")
          }
          onClick={props.deleteTab}
        />
      </div>
    </div>
  );
}
