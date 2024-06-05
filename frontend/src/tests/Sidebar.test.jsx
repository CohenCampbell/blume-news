import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders Sidebar component", () => {
  window.sessionStorage.setItem("username", "test1");
  window.sessionStorage.setItem("email", "test@email.com");

  const sideBar = render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
  const menuBtn = sideBar.container.querySelector("#menuBtn");
  fireEvent.click(menuBtn);

  expect(screen.getByText("test1")).toBeInTheDocument();
  expect(screen.getByText("test@email.com")).toBeInTheDocument();
});
