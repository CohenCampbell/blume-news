import React, { useEffect } from "react";
import ArticleList from "./ArticleList";

function Homepage() {
  return (
    <div className="flex justify-center">
      <div className="2xl:w-1/3 w-1/2">
        <ArticleList/>
      </div> 
    </div>
  );
}

export default Homepage;
