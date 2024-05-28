import React, { useEffect, useState } from "react";

function MiniTitleCard({ title, author, content }) {
  return (
    <div className="shadow-md rounded overflow-hidden w-full bg-sky-500 text-white flex flex-col">
      <div className="p-3 pt-2">
        <span className="text-xl">{title}</span>
        <hr className="mt-1 mb-4" />
        <span>{content}</span>
      </div>
      <div className="flex justify-end">
        <footer className="mr-2 mb-2">by: {author}</footer>
      </div>
    </div>
  );
}

export default MiniTitleCard;
