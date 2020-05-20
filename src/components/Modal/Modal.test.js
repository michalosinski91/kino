import React from "react";
import Modal from "./Modal";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

let mockShowTicketPurchaseForm = false;
const mockToggleTicketPurchaseForm = jest.fn(() => {
  mockShowTicketPurchaseForm = !mockShowTicketPurchaseForm;
});

test("should render Modal component", () => {
  const { container, getByTestId } = render(
    <Modal toggleTicketPurchaseForm={mockToggleTicketPurchaseForm} />
  );

  expect(container.firstChild).toBe(getByTestId("modal"));
});
