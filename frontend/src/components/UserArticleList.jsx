import React, { useState, useEffect } from "react";
import backendRequest from "../helpers/backendRequest";
import { v4 as uuid } from "uuid";
import MiniTitleCard from "./MiniTitleCard";

function UserArticleList() {
  const [articleArr, setArticleArr] = useState([{ title: "" }]);

  async function getArticles() {
    const resArticles = await backendRequest("articles");
    console.log(resArticles);
    setArticleArr(resArticles);
    console.log(articleArr);
  }

  function createTitleCards() {
    return articleArr.map((article) => {
      return (
        <MiniTitleCard
          title={article.title}
          author={article.author}
          content={article.content}
          key={uuid()}
        />
      );
    });
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div id={"userArticleList"} className="flex flex-col gap-y-5">
      {createTitleCards()}
    </div>
  );
}

export default UserArticleList;
