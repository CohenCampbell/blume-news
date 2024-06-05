import React from "react";
import { render, screen } from "@testing-library/react";
import Searchbar from "../components/Searchbar";
import "@testing-library/jest-dom";

test("renders Searchbar component", () => {
  render(<Searchbar />);
  expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
});
