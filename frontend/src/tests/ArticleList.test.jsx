import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";
import "@testing-library/jest-dom";

test("renders ArticleList component", () => {
  render(<ArticleList />);
  expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
});
