import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "../components/Homepage";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders Homepage component", () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  expect(screen.getByText("User Articles")).toBeInTheDocument();
});
