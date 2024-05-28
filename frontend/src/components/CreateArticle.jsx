import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backendRequest from "../helpers/backendRequest";

function CreateArticle() {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    title: "",
    author: sessionStorage.getItem("username"),
    content:
      "Start writing here! Please keep the content under 1000 characters.",
  };

  const [articleInfo, setArticleInfo] = useState(INITIAL_STATE);
  const [errorArr, setErrorArr] = useState([]);

  function handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    setArticleInfo((info) => ({ ...info, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await backendRequest(
        `articles/${sessionStorage.getItem("username")}`,
        articleInfo,
        "post"
      );
      navigate("/user-articles");
    } catch (error) {
      setErrorArr([error]);
    }
  }

  function renderErrorHtml() {
    return errorArr.map((err, index) => (
      <div key={index} className="text-red-600">
        {err}
      </div>
    ));
  }

  return (
    <div className="flex justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-sky-600 w-[32rem] h-[36rem] mt-32 rounded shadow gap-4 flex-col flex justify-center items-center"
      >
        <span className="text-5xl text-stone-900 bg-sky-400 p-4 rounded shadow mb-8">
          Create an Article!
        </span>
        <div className="bg-sky-400 p-2 w-8/12 rounded shadow flex">
          <label htmlFor="author" className="mr-2 text-stone-800 font-semibold">
            Author:
          </label>
          <input
            readOnly
            required
            id="author"
            value={articleInfo.author}
            className="h-7 rounded bg-sky-300 shadow w-full p-1 outline outline-transparent outline-2 focus:outline-sky-700"
          ></input>
        </div>
        <div className="bg-sky-400 p-2 rounded shadow flex w-8/12">
          <label htmlFor="title" className="mr-2 text-stone-800 font-semibold">
            Title:
          </label>
          <input
            required
            id="title"
            value={articleInfo.title}
            onChange={handleChange}
            className="h-7 rounded bg-sky-300 shadow w-full p-1 outline outline-transparent outline-2 focus:outline-sky-700"
          ></input>
        </div>
        <div className="bg-sky-400 p-2 rounded shadow flex w-8/12">
          <textarea
            className="rounded bg-sky-300 shadow h-36 w-full p-1 outline outline-transparent outline-2 focus:outline-sky-700"
            required
            value={articleInfo.content}
            id="content"
            onChange={handleChange}
          />
        </div>

        <div className="bg-sky-400 p-3 rounded shadow flex justify-center items-center">
          <button
            type="submit"
            className="px-6 py-2 text-stone-800 shadow inline-flex items-center bg-sky-300 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl text-center"
          >
            Create
          </button>
        </div>
        {renderErrorHtml()}
      </form>
    </div>
  );
}

export default CreateArticle;
