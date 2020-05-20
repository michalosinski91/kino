import React from "react";
import ComingSoon from "./ComingSoon";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test("should load a Loading element when film list has not been loaded", async () => {
  const { getByTestId } = render(<ComingSoon />);
  expect(getByTestId("coming-soon-loader").firstChild).toBe(
    getByTestId("loading")
  );
});
