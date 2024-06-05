import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders Login component", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  expect(screen.getByText("Login to Blume News!")).toBeInTheDocument();
});

test("Login form test", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const input1 = screen.getByLabelText("Username:");
  const input2 = screen.getByLabelText("Password:");

  expect(input1.value).toEqual("");
  expect(input2.value).toEqual("");

  fireEvent.change(input1, { target: { value: "TestUsername" } });
  fireEvent.change(input2, { target: { value: "TestPassword" } });

  expect(screen.queryByDisplayValue("TestUsername")).toBeInTheDocument();
  expect(screen.queryByDisplayValue("TestPassword")).toBeInTheDocument();
});
