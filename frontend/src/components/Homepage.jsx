import React, { useEffect } from "react";
import ArticleList from "./ArticleList";
import { useLocation, useNavigate } from "react-router-dom";
import UserArticleList from "./UserArticleList";

function Homepage() {
  const navigate = useNavigate();
  const location = useLocation();
  function handleUserArticleClick() {
    location.pathname == "/" ? navigate("/user-articles") : navigate("/");
  }

  return (
    <div className="flex">
      <div className="2xl:w-1/3 w-1/4"></div>
      <div className="2xl:w-1/3 w-1/2 mt-2">
        {location.pathname == "/" ? <ArticleList /> : <UserArticleList />}
      </div>
      <div className="flex 2xl:w-1/3 w-1/4 justify-start">
        <div className="bg-sky-500 items-center justify-center rounded shadow flex h-24 w-32 ml-28 mt-20">
          <button
            className="px-6 py-2 w-28 h-20 text-stone-800 shadow inline-flex items-center bg-sky-300 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl text-center"
            onClick={handleUserArticleClick}
          >
            {location.pathname == "/" ? "User Articles" : "General Articles"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
