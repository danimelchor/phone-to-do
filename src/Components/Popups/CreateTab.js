import React, { useState } from "react";

import { sendSaveTab, sendEditTab } from "../../Requests";

export default function CreateTab(props) {
  const create = async (e) => {
    e.preventDefault();
    var loadedTabs;

    if (props.editId !== -1) {
      loadedTabs = await sendEditTab(props.tabList[props.editId]._id, tabName);
    } else {
      loadedTabs = await sendSaveTab(tabName);
      props.setCurrentTab(loadedTabs.length - 1);
    }
    props.setTabList(loadedTabs);
    props.setShowMenu(false);
    props.closePopup();
  };

  var name = "";
  if (props.editId !== -1) name = props.tabList[props.editId].title;

  const [tabName, setTabName] = useState(name);

  return (
    <div
      className="w-full h-full fixed left-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        e.stopPropagation();
        props.closePopup();
      }}
    >
      <form
        onSubmit={create}
        className="bg-white p-5 rounded-sm flex flex-col justify-center items-center w-2/3"
      >
        <input
          type="text"
          name="name"
          placeholder="Tab name..."
          onChange={(e) => setTabName(e.target.value)}
          value={tabName}
          autoFocus
          className="rounded-sm border border-gray-200 w-full px-5 py-3 focus:outline-none focus:border-blue-500 mb-4"
        />
        <button
          onClick={create}
          className="rounded-sm w-full px-5 py-3 bg-blue-200 text-center"
        >
          {props.editId !== -1 ? "Save" : "Create tab"}
        </button>
      </form>
    </div>
  );
}
