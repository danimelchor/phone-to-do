import React, { useState } from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { FiTrash2 } from "react-icons/fi";

export default function Item(props) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={() =>
        props.completeTask(props.currentTab, props.id, !props.task.completed)
      }
      className={
        "w-full py-4 flex items-center justify-between cursor-pointer transform transition-transform hover:scale-103 bg-white border-t border-gray-200" +
        (hover ? " border-b" : " ")
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p
        className={
          "text-lg" +
          (props.task.completed ? " line-through text-gray-700" : "")
        }
      >
        {props.task.name}
      </p>
      <div className="flex items-center justify-center text-2xl gap-3">
        <FiTrash2
          className="text-gray-700 hover:text-black transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            props.deleteTask(props.currentTab, props.id);
          }}
        />
        <div className="text-blue-900">
          {!props.task.completed ? (
            <ImCheckboxUnchecked />
          ) : (
            <ImCheckboxChecked />
          )}
        </div>
      </div>
    </div>
  );
}
