import React from "react";
import { render, screen } from "@testing-library/react";
import Logout from "../components/Login";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders Logout component", () => {
  window.sessionStorage.setItem("token", "1");
  render(
    <BrowserRouter>
      <Logout />
    </BrowserRouter>
  );
  //expect redirect to /login
  expect(screen.getByText("Login to Blume News!")).toBeInTheDocument();
});
