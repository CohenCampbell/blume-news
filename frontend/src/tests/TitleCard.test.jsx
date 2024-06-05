import React from "react";
import { render, screen } from "@testing-library/react";
import TitleCard from "../components/TitleCard";
import "@testing-library/jest-dom";

test("renders TitleCard component", () => {
  render(
    <TitleCard
      title={"Test Title"}
      description={"Test description"}
      author={"Test author"}
      url={"Test Url"}
      urlToImage={"https://picsum.photos/536/354"}
    />
  );

  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test description")).toBeInTheDocument();
});
