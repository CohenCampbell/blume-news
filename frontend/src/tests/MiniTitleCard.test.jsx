import React from "react";
import { render, screen } from "@testing-library/react";
import MiniTitleCard from "../components/MiniTitleCard";
import "@testing-library/jest-dom";

test("renders MiniTitleCard component", () => {
  window.sessionStorage.setItem("token", "1");

  render(
    <MiniTitleCard
      title={"Test Title"}
      author={"Test Author"}
      content={"Test Content"}
    />
  );

  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(
    screen.getByText("Test Content", { exact: false })
  ).toBeInTheDocument();
  expect(screen.getByText("Test Content")).toBeInTheDocument();
});
