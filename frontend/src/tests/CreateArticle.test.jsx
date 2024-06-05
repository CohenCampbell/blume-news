import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CreateArticle from "../components/CreateArticle";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders CreateArticle component", () => {
  window.sessionStorage.setItem("username", "testUser");

  render(
    <BrowserRouter>
      <CreateArticle />
    </BrowserRouter>
  );

  expect(screen.getByText("Create an Article!")).toBeInTheDocument();
});

test("renders CreateArticle component", () => {
  window.sessionStorage.setItem("username", "testUser");

  const CreateArticleRender = render(
    <BrowserRouter>
      <CreateArticle />
    </BrowserRouter>
  );

  const input1 = screen.getByLabelText("Author:");
  const input2 = screen.getByLabelText("Title:");
  const input3 = CreateArticleRender.container.querySelector("#content");
  expect(window.sessionStorage.getItem("username")).toEqual(input1.value);
  expect("").toEqual(input2.value);
  expect(
    "Start writing here! Please keep the content under 1000 characters."
  ).toEqual(input3.value);

  fireEvent.change(input1, { target: { value: "Author2" } });
  fireEvent.change(input2, { target: { value: "Test Title" } });
  fireEvent.change(input3, { target: { value: "Test Content" } });
  //Input one should be read only
  expect(window.sessionStorage.getItem("username")).toEqual(input1.value);
  expect(screen.queryByDisplayValue("Test Title")).toBeInTheDocument();
  expect(screen.queryByDisplayValue("Test Content")).toBeInTheDocument();
});
