import React from "react";
import { useState } from "react";
import logo from "../assets/noText.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [extended, setExtended] = useState(false);

  function handleNavigation(route) {
    navigate(`/${route}`);
  }

  return (
    <aside className="fixed h-screen flex flex-col">
      <nav className="max:h-full m-2 bg-sky-500 shadow-lg rounded flex-col">
        <div
          className={
            extended ? "nav-top-container " : "nav-top-container flex-col"
          }
        >
          <div className="flex">
            <img src={logo} className="size-16 inline-block mb-2"></img>
            {extended ? (
              <p className="self-end mb-4 ml-2 text-2xl text-white inline-block font-bold">
                Blume News
              </p>
            ) : undefined}
          </div>
          <button
            id="menuBtn"
            onClick={() => setExtended(!extended)}
            className={
              extended
                ? "nav-button bx bx-sm bx-arrow-to-left ml-3"
                : "nav-button bx bx-sm bx-menu"
            }
          />
        </div>
        <ul
          className={
            extended
              ? "flex flex-col items-start"
              : "flex flex-col items-center"
          }
        >
          <li>
            <button
              className={
                extended
                  ? "flex bg-sky-400 ml-4 px-2 rounded shadow-lg mb-2 hover:bg-sky-300 items-center text-left"
                  : undefined
              }
              onClick={() => {
                handleNavigation("");
              }}
            >
              <button
                className={
                  extended
                    ? "nav-button bx bx-sm bxs-home mb-2"
                    : "nav-button bx bx-sm bxs-home mb-2"
                }
                onClick={() => {
                  handleNavigation("");
                }}
              />
              {extended ? (
                <span className="self-center font-semibold ml-2 text-stone-800 w-40">
                  Home
                </span>
              ) : undefined}
            </button>
          </li>
          <li>
            <button
              className={
                extended
                  ? "flex bg-sky-400 ml-4 px-2 rounded shadow-lg mb-2 hover:bg-sky-300 items-center text-left"
                  : undefined
              }
              onClick={() => {
                handleNavigation("create-article");
              }}
            >
              <button
                className={
                  extended
                    ? "nav-button bx bx-sm bx-news mb-2"
                    : "nav-button bx bx-sm bx-news mb-2"
                }
                onClick={() => {
                  handleNavigation("create-article");
                }}
              />
              {extended ? (
                <span className="font-semibold ml-2 text-stone-800 w-40">
                  Create Article
                </span>
              ) : undefined}
            </button>
          </li>
          <li>
            <button
              className={
                extended
                  ? "flex bg-sky-400 ml-4 px-2 rounded shadow-lg mb-2 hover:bg-sky-300 items-center text-left"
                  : undefined
              }
              onClick={() => {
                handleNavigation("about");
              }}
            >
              <button
                className={
                  extended
                    ? "nav-button bx bx-sm bx-question-mark mb-2"
                    : "nav-button bx bx-sm bx-question-mark mb-2"
                }
                onClick={() => {
                  handleNavigation("about");
                }}
              />
              {extended ? (
                <span className="self-center font-semibold ml-2 text-stone-800 w-40">
                  About
                </span>
              ) : undefined}
            </button>
          </li>
          <li>
            <button
              className={
                extended
                  ? "flex bg-sky-400 ml-4 px-2 rounded shadow-lg mb-2 hover:bg-sky-300 items-center text-left"
                  : undefined
              }
              onClick={() => {
                handleNavigation("settings");
              }}
            >
              <button
                className={
                  extended
                    ? "nav-button bx bx-sm bxs-cog mb-2"
                    : "nav-button bx bx-sm bxs-cog mb-2"
                }
                onClick={() => {
                  handleNavigation("settings");
                }}
              />
              {extended && (
                <span className="self-center font-semibold ml-2 text-stone-800 w-40">
                  Settings
                </span>
              )}
            </button>
          </li>
        </ul>
        <div
          className={
            extended
              ? "flex p-3 bg-sky-400 m-5 ml-4 rounded shadow-lg "
              : "flex p-3 items-center flex-col"
          }
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/512/280/large_2x/user-icon-people-icon-on-white-background-flat-design-style-free-vector.jpg"
            className="w-10 h-10 rounded-md"
          />
          <div className={extended ? "flex justify-between ml-3" : "flex"}>
            {extended && (
              <div className="leading-4 mr-4">
                <h4 className="font-semibold">
                  {sessionStorage.getItem("username")}
                </h4>
                <span className="text-xs text-gray-600">
                  {sessionStorage.getItem("email")}
                </span>
              </div>
            )}
            <button
              className="nav-button bx bx-log-out bx-sm mb-1"
              onClick={() => {
                handleNavigation("logout");
              }}
            ></button>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
