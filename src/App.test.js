import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

// Mock the sub-components used in App
jest.mock("./components/TotalRewardsTable", () => () => (
  <div>Mock TotalRewardsTable</div>
));
jest.mock("./components/TransactionsTable", () => () => (
  <div>Mock TransactionTable</div>
));
jest.mock("./components/UserMonthlyRewardsTable", () => () => (
  <div>Mock UserMonthlyRewardsTable</div>
));

// Mock global fetch function to simulate successful response or error
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]), // Provide mock data here
  })
);

test("renders App with sub-components", async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    render(<App />);
  });

  // Check if the mocked components are rendered
  expect(screen.getByText("Mock TotalRewardsTable")).toBeInTheDocument();
  expect(screen.getByText("Mock TransactionTable")).toBeInTheDocument();
  expect(screen.getByText("Mock UserMonthlyRewardsTable")).toBeInTheDocument();
});

test("renders App with error handling", async () => {
  // Mock fetch to simulate an error response
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: false,
      statusText: "Error fetching data",
    })
  );

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    render(<App />);
  });

  // Check if error message is rendered
  expect(screen.getByText("something went wrong")).toBeInTheDocument();
});
