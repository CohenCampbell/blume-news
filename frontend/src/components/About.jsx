import React from "react";

function About() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex items-center m-48 mb-96 flex-col bg-sky-500 w-1/2 shadow rounded">
        <h1 className=" text-3xl p-3 font-bold" id="what-is-blume-news">
          What is Blume News?
        </h1>
        <p className=" text-center">
          Blume News is a simple website that&#39;s similar to any common socail
          media website, but instead of posts about others lives, the website
          requests news articles from news API and displays it as content. Users
          can also write and view their own articles. The app was built using
          React, Vite, and Tailwind in the frontend, as well as NodeJS and
          MongoDB in the backend.
        </p>
        <h2 className="text-xl p-2 font-bold" id="how-to-use">
          How To Use
        </h2>
        <p className=" text-center">
          The app is very similar to other socail websites, just create an
          account, and use the sidebar to navigate between pages. If you&#39;d
          like to delete your account you can do so in settings.
        </p>
        <h2 className="text-xl p-2 font-semibold" id="environment-variables">
          Environment Variables
        </h2>
        <p className=" text-center">
          To run this project locally, you will need to add the following
          environment variables to your .env file
        </p>
        <h4 className="text-lg p-2 font-semibold" id="for-the-frontend-">
          For the frontend:
        </h4>
        <p className=" text-center">
          <code>REACT_APP_BASE_URL</code>
        </p>
        <h4 className="text-lg p-2 font-semibold" id="for-the-backend-">
          For the backend:
        </h4>
        <p>
          <code>NODE_ENV</code>
        </p>
        <p>
          <code>SECRET_KEY</code>
        </p>
        <p>
          <code>MONGO_URI</code>
        </p>
        <p>
          <code>PORT</code>
        </p>
        <h4 id="for-testing-optional-">For testing (optional):</h4>
        <p className="pb-3">
          <code>MONGO_TEST_URI</code>
        </p>
      </div>
    </div>
  );
}

export default About;
