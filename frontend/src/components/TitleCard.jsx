import React from "react";

function TitleCard({ title, description, url, urlToImage }) {
  return (
    <div className="shadow-md rounded overflow-hidden w-full bg-sky-500 text-white flex flex-col">
      <div className="p-3 pt-2">
        <span className="text-xl">{title}</span>
        <hr className="mt-1 mb-4" />
        <span>{description}</span>
      </div>
      <div className="flex justify-end">
        <button
          className="absolute m-2 bg-sky-700 text-xs font-semibold me-2 px-2.5 py-0.5 rounded"
          onClick={() => window.open(url)}
        >
          Read More +
        </button>
        <img src={urlToImage} className="full"></img>
      </div>
    </div>
  );
}

export default TitleCard;
