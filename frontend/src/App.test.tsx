import React from "react";
import "jest";
import "@testing-library/jest-dom";
import { App } from "./App";
import { render } from "@testing-library/react";

test("hello world", () => {
  const rendered = render(<App />);

  expect(rendered.getByText("Dune (alpha)")).toBeInTheDocument();
});
