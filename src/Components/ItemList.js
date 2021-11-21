import React from "react";
import Item from "./Item";

export default function ItemList(props) {
  if (
    props.tabs === undefined ||
    props.currentTab === undefined ||
    props.tabs.length <= props.currentTab
  )
    return <p>No tasks for this tab</p>;

  const currentList = props.tabs[props.currentTab];

  if (currentList === undefined) {
    return (
      <p className="w-full text-center">
        Begin by creating a tab inside the menu
      </p>
    );
  }

  return (
    <div className="flex flex-col mx-10 border-b border-gray-200 pt-16">
      {currentList.tasks.map((item, id) => {
        if (!props.hidden || !item.completed)
          return (
            <Item
              task={item}
              key={id}
              id={id}
              completeTask={props.completeTask}
              currentTab={props.currentTab}
              deleteTask={props.deleteTask}
            />
          );
        return <div style={{ display: "none" }} key={id}></div>;
      })}
    </div>
  );
}
