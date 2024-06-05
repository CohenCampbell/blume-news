import React from "react";
import { render, screen } from "@testing-library/react";
import Settings from "../components/Settings";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders Settings component", () => {
  render(
    <BrowserRouter>
      <Settings />
    </BrowserRouter>
  );

  expect(screen.getByText("Settings!")).toBeInTheDocument();
});
