import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backendRequest from "../helpers/backendRequest";

function SignUp() {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const [userInfo, setUserInfo] = useState(INITIAL_STATE);
  const [errorArr, setErrorArr] = useState([]);

  function handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    setUserInfo((info) => ({ ...info, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await backendRequest("users/signUp", userInfo, "post");
      sessionStorage.setItem("token", res.token);
      sessionStorage.setItem("username", res.username);
      sessionStorage.setItem("email", res.email);
      navigate("/");
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
        className="bg-sky-600 w-[32rem] h-[37rem] mt-32 rounded shadow gap-4 flex-col flex justify-center items-center"
      >
        <span className="text-4xl text-stone-900 bg-sky-400 p-4 rounded shadow mb-10">
          Sign up for Blume News!
        </span>
        <div className="bg-sky-400 p-2 w-8/12 rounded shadow flex">
          <label
            className="mr-2 text-stone-800 font-semibold"
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            required
            className="h-7 rounded bg-sky-300 shadow w-[14rem] p-1 outline outline-transparent outline-2 focus:outline-sky-700"
            id="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="bg-sky-400 p-2 rounded shadow flex w-8/12">
          <label
            className="mr-2 text-stone-800 font-semibold"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            required
            className="h-7 rounded bg-sky-300 shadow w-[14rem] p-1 outline outline-transparent outline-2 focus:outline-sky-700"
            id="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="bg-sky-400 p-2 w-8/12 rounded shadow flex">
          <label className="mr-2 text-stone-800 font-semibold" htmlFor="email">
            Email:
          </label>
          <input
            required
            type="email"
            className="h-7 ml-8 rounded bg-sky-300 shadow w-[14rem] p-1 outline outline-transparent outline-2 focus:outline-sky-700"
            id="email"
            value={userInfo.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="bg-sky-400 p-2 w-8/12 rounded shadow flex">
          <label
            className="mr-2 text-stone-800 font-semibold"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            required
            className="h-7 rounded bg-sky-300 shadow w-[14rem] p-1 outline outline-transparent outline-2 focus:outline-sky-700"
            id="username"
            value={userInfo.username}
            onChange={handleChange}
          ></input>
        </div>
        <div className="bg-sky-400 p-2 w-8/12 rounded shadow flex">
          <label
            className="mr-2 text-stone-800 font-semibold"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            required
            id="password"
            value={userInfo.password}
            onChange={handleChange}
            type="password"
            className="h-7 rounded bg-sky-300 shadow w-[14rem] p-1 outline outline-transparent outline-2 focus:outline-sky-700"
          ></input>
        </div>
        <div className="bg-sky-400 p-3 rounded shadow flex justify-center items-center">
          <button
            type="submit"
            className="px-6 py-2 text-stone-800 shadow inline-flex items-center bg-sky-300 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl text-center"
          >
            Sign Up
          </button>
        </div>
        {renderErrorHtml()}
        <footer className="text-stone-700">
          Already have an accont?{" "}
          <a href="/login" className="text-gray-900 underline">
            Login!
          </a>
        </footer>
      </form>
    </div>
  );
}

export default SignUp;
