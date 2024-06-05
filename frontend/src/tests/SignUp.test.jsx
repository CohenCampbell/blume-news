import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "../components/SignUp";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders SignUp component", () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );

  expect(screen.getByText("Sign up for Blume News!")).toBeInTheDocument();
});

test("SignUp form test", () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );

  const input1 = screen.getByLabelText("First Name:");
  const input2 = screen.getByLabelText("Last Name:");
  const input3 = screen.getByLabelText("Email:");
  const input4 = screen.getByLabelText("Username:");
  const input5 = screen.getByLabelText("Password:");

  expect("").toEqual(input1.value);
  expect("").toEqual(input2.value);
  expect("").toEqual(input3.value);
  expect("").toEqual(input4.value);
  expect("").toEqual(input5.value);

  fireEvent.change(input1, { target: { value: "FN test" } });
  fireEvent.change(input2, { target: { value: "LN test" } });
  fireEvent.change(input3, { target: { value: "Email@Email.test" } });
  fireEvent.change(input4, { target: { value: "Username test" } });
  fireEvent.change(input5, { target: { value: "Password test" } });

  expect(screen.queryByDisplayValue("FN test")).toBeInTheDocument();
  expect(screen.queryByDisplayValue("LN test")).toBeInTheDocument();
  expect(screen.queryByDisplayValue("Email@Email.test")).toBeInTheDocument();
  expect(screen.queryByDisplayValue("Username test")).toBeInTheDocument();
  expect(screen.queryByDisplayValue("Password test")).toBeInTheDocument();
});
