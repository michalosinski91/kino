import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BoxOffice from "./BoxOffice";

afterEach(cleanup);

test("should not display Modal when showTicketPurchaseForm is false", async () => {
  const { getByTestId } = render(<BoxOffice showTicketPurchaseForm={false} />);
  expect(getByTestId("boxoffice").children.length).toEqual(3);
});

test("should display Modal when showTicketPurchaseForm is true", async () => {
  const { getByTestId } = render(<BoxOffice showTicketPurchaseForm={true} />);
  expect(getByTestId("boxoffice").children.length).toEqual(4);
});
