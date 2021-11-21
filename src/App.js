import React from "react";
import { useEffect, useState } from "react";

import Menu from "./Components/Menu";
import ItemList from "./Components/ItemList";
import AddNewItem from "./Components/AddNewItem";
import Login from "./Components/Popups/Login";

// States
import { LOGGED_IN, LOGGED_OUT } from "./States/index";

// Requests
import {
  sendCheckLoggedIn,
  sendGrabTasks,
  sendSaveTask,
  sendCompleteTask,
  sendDeleteTab,
  sendDeleteTask,
} from "./Requests";
import CreateTab from "./Components/Popups/CreateTab";

// Storage

const storageSaveData = (key, value) => {
  localStorage.setItem(key, value);
};
const storageGetData = (key) => {
  return localStorage.getItem(key);
};

function App() {
  // General
  const [state, setState] = useState(LOGGED_IN);
  const [tabList, setTabList] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Popups
  const [createTabPopup, setCreateTabPopup] = useState(false);
  const [editId, setEditId] = useState(-1);

  const initialProcedure = async () => {
    // First, check if logged in
    const loggedIn = await sendCheckLoggedIn();
    if (!loggedIn) {
      setState(LOGGED_OUT);
      return;
    }

    // Logged in
    setState(LOGGED_IN);

    // Then, download tabs and tasks
    const loadedTabs = await sendGrabTasks();
    setTabList(loadedTabs);

    // Get current tab
    var current = Number(storageGetData("currentTab"));
    if (current != null && current >= loadedTabs.length) current = 0;
    changeTab(current, loadedTabs.length);

    // Get if hidden
    const loadedHidden = storageGetData("currentTab");
    setHidden(loadedHidden === "true" || false);
  };

  useEffect(() => {
    initialProcedure();
  }, []);

  const changeTab = (id, listLength) => {
    listLength = listLength ? listLength : tabList.length;
    if (id >= listLength) id = 0;

    storageSaveData("currentTab", id);
    setCurrentTab(id);
  };

  const saveTask = async (tabId, taskName) => {
    const tabRealId = tabList[tabId]._id;
    const loadedTabs = await sendSaveTask(tabRealId, taskName);
    setTabList(loadedTabs);
  };

  const completeTask = async (tabId, taskId, value) => {
    const tabRealId = tabList[tabId]._id;
    const taskRealId = tabList[tabId].tasks[taskId]._id;
    const loadedTabs = await sendCompleteTask(tabRealId, taskRealId, value);
    setTabList(loadedTabs);
  };

  const deleteTab = async (tabId) => {
    const res = window.confirm("Are you sure you want to delete this tab?");
    if (res) {
      const tabRealId = tabList[tabId]._id;
      const loadedTabs = await sendDeleteTab(tabRealId);
      setTabList(loadedTabs);
      if (tabId === currentTab) changeTab(0);
    }
  };

  const deleteTask = async (tabId, taskId) => {
    const res = window.confirm("Are you sure you want to delete this task?");
    if (res) {
      const tabRealId = tabList[tabId]._id;
      const taskRealId = tabList[tabId].tasks[taskId]._id;
      const loadedTabs = await sendDeleteTask(tabRealId, taskRealId);
      setTabList(loadedTabs);
    }
  };

  return (
    <div>
      <div>
        <ItemList
          tabs={tabList}
          currentTab={currentTab}
          completeTask={completeTask}
          hidden={hidden}
          deleteTask={deleteTask}
        />
        <AddNewItem
          saveTask={saveTask}
          currentTab={currentTab}
          tabs={tabList}
        />
        <Menu
          tabs={tabList}
          currentTab={currentTab}
          changeTab={changeTab}
          setHidden={setHidden}
          hidden={hidden}
          createTabPopup={() => setCreateTabPopup(true)}
          editTabPopup={(id) => {
            setEditId(id);
            setCreateTabPopup(true);
          }}
          deleteTab={deleteTab}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          reloadTabs={async () => {
            const loadedTabs = await sendGrabTasks();
            setTabList(loadedTabs);
          }}
        />

        {/* POPUPS */}
        {state !== LOGGED_IN && (
          <Login
            state={state}
            initialProcedure={initialProcedure}
            setState={setState}
          />
        )}
        {createTabPopup && (
          <CreateTab
            setTabList={setTabList}
            closePopup={() => {
              setEditId(-1);
              setCreateTabPopup(false);
            }}
            setCurrentTab={setCurrentTab}
            setShowMenu={setShowMenu}
            tabList={tabList}
            editId={editId}
          />
        )}
      </div>
    </div>
  );
}

export default App;
