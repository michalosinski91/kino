import React from "react";
import TicketPurchaseForm from "./TicketPurchaseForm";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const mockHandleSubmit = jest.fn((e) => {
  e.preventDefault();
});

test("should render the correct component", () => {
  const { getByTestId, container } = render(
    <TicketPurchaseForm handleSubmit={mockHandleSubmit} />
  );
  expect(container.firstChild).toBe(getByTestId("ticket-purchase"));
});

test("should handle submit action when submit button clicked", () => {
  const { getByTestId } = render(
    <TicketPurchaseForm handleSubmit={mockHandleSubmit} />
  );
  const submitButton = getByTestId("form-submit");
  expect(mockHandleSubmit).toHaveBeenCalledTimes(0);
  fireEvent.click(submitButton);
  expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
});
