import React from "react";
import { render } from "@testing-library/react";
import UserArticleList from "../components/UserArticleList";
import "@testing-library/jest-dom";

test("renders UserArticleList component", () => {
  const userArticleList = render(<UserArticleList />);

  expect(
    userArticleList.container.querySelector("#userArticleList")
  ).toBeInTheDocument();
});
