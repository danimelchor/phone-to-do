import React, { useState } from "react";

export default function AddNewItem(props) {
  const [itemName, setItemName] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    props.saveTask(props.currentTab, itemName);
    setItemName("");
  };

  if (
    props.tabs !== undefined &&
    props.currentTab !== undefined &&
    props.tabs.length > props.currentTab
  )
    return (
      <form onSubmit={saveTask} className="w-full fixed bottom-0 left-0 p-4">
        <input
          type="text"
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
          placeholder="Add a new task..."
          className="rounded-sm border border-gray-200 w-full px-5 py-3 focus:outline-none focus:border-blue-500"
        />
      </form>
    );
  return <></>;
}
