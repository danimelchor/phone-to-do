import React, { useState } from "react";
import axios from "axios";
import { LOGGED_ERROR } from "../../States";
import { SERVER_URL, TYPE } from "../../vars.config";

export default function Login(props) {
  const [password, setPassword] = useState("");

  const login = (e) => {
    if (TYPE === "react") {
    } else {
      e.preventDefault();
      const url = SERVER_URL + "/api/v1/auth/login";
      axios
        .post(url, { password, type: TYPE }, { withCredentials: true })
        .then((res) => {
          props.initialProcedure();
        })
        .catch((error) => {
          props.setState(LOGGED_ERROR);
        });
    }
  };

  return (
    <div className="w-full h-full bg-black bg-opacity-50 fixed left-0 top-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded-sm flex items-center justify-center flex-col w-2/3">
        {props.state === LOGGED_ERROR && (
          <p className="text-red-700 mb-4">Wrong password!</p>
        )}
        <p>
          Whoops! This page is password protected. Please type the password.
        </p>
        <form
          onSubmit={login}
          className="w-full"
          action={SERVER_URL + "/api/v1/auth/login"}
          method="POST"
        >
          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-200 rounded-sm w-full py-3 px-5 my-4 focus:outline-none focus:border-blue-200"
          />
          <input type="hidden" name="type" value={TYPE} />
          <button
            type="submit"
            onClick={login}
            className="bg-blue-200 rounded-sm w-full px-5 py-3 hover:bg-blue-300 transition-colors"
          >
            Access
          </button>
        </form>
      </div>
    </div>
  );
}
