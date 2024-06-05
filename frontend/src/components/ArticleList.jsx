import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import TitleCard from "./TitleCard";
import Searchbar from "./Searchbar";
import { v4 as uuid } from "uuid";

function ArticleList() {
  const headers = { "x-Api-key": "aa267afd8cb14334b67cf2670eeab6a6" };
  const [articleArr, setArticleArr] = useState([{ title: "" }]);
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=aa267afd8cb14334b67cf2670eeab6a6&page=1`
  );

  async function getArticles() {
    let res = await axios({ method: "get", url: url, headers: headers });
    setArticleArr(res.data.articles);
  }

  function createTitleCards() {
    return articleArr.map((article) => {
      if (
        article.description &&
        article.title !== "[Removed]" &&
        article.urlToImage
      ) {
        return (
          <TitleCard
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            key={uuid()}
          />
        );
      }
    });
  }

  useEffect(() => {
    getArticles();
  }, [url]);

  return (
    <div className="flex flex-col gap-y-5">
      <Searchbar setUrl={setUrl} />
      {createTitleCards()}
    </div>
  );
}

export default ArticleList;
