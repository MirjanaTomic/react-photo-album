import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Table from "./Table";

test("renders header text", () => {
  render(<App />);
  const linkElement = screen.getByText(/photo album app/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders table without crashing", () => {
  render(<Table />);
  const tableElement = screen.getByRole("table");
  expect(tableElement).toBeInTheDocument();
});
