import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders About component", () => {
  window.sessionStorage.setItem("token", "1");

  render(<About />);
  expect(screen.getByText("What is Blume News?")).toBeInTheDocument();
});
