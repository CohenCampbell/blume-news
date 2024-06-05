import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders App component with token", () => {
  window.sessionStorage.setItem("token", "1");

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test("renders App component without token", () => {
  window.sessionStorage.removeItem("token");

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByText(/Login to Blume News!/i)).toBeInTheDocument();
});
