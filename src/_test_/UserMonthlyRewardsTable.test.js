// src/_test_/UserMonthlyRewardsTable.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserMonthlyRewardsTable from '../components/UserMonthlyRewardsTable';

/**
 * Sample data to use for testing the UserMonthlyRewardsTable component.
 */
const mockData = [
  {
    month: 'January',
    year: '2024',
    transactions: [
      {
        transactionId: '1',
        customerId: 'C001',
        customerName: 'John Doe',
        price: '120.4', // valid price as string
        purchaseDate: '2024-01-05',
        year: '2024',
        rewardPoints: 61,
      },
      {
        transactionId: '2',
        customerId: 'C002',
        customerName: 'Jane Smith',
        price: 'Invalid Price', // invalid price
        purchaseDate: '2024-01-10',
        year: '2024',
        rewardPoints: 30,
      },
    ],
  },
  {
    month: 'December',
    year: '2023',
    transactions: [
      {
        transactionId: '3',
        customerId: 'C003',
        customerName: 'Alice Johnson',
        price: '80.2', // valid price as string
        purchaseDate: '2023-12-15',
        year: '2023',
        rewardPoints: 30,
      },
      {
        transactionId: '4',
        customerId: 'C001',
        customerName: 'John Doe',
        price: '0.00', // valid price as string
        purchaseDate: '2023-12-20',
        year: '2023',
        rewardPoints: 5,
      },
    ],
  },
];

test('renders UserMonthlyRewardsTable with provided data', () => {
  // Render the UserMonthlyRewardsTable component with mock data
  render(<UserMonthlyRewardsTable monthlyData={mockData} />);

  // Check if the month headers are rendered
  expect(screen.getByText('January 2024')).toBeInTheDocument();
  expect(screen.getByText('December 2023')).toBeInTheDocument();

  // Check if the table headers are rendered
  const headerCells = screen.getAllByText('Customer ID');
  expect(headerCells).toHaveLength(2); // There should be 2 table headers with 'Customer ID'

  expect(screen.getAllByText('Customer Name')).toHaveLength(2);
  expect(screen.getAllByText('Transaction ID')).toHaveLength(2);
  expect(screen.getAllByText('Amount Spent')).toHaveLength(2);
  expect(screen.getAllByText('Transaction Date')).toHaveLength(2);
  expect(screen.getAllByText('Transaction Year')).toHaveLength(2);
  expect(screen.getAllByText('Points')).toHaveLength(2);

  // Check if the customer names appear the correct number of times
  const johnDoeCells = screen.getAllByText('John Doe');
  expect(johnDoeCells).toHaveLength(2); // John Doe should appear in two rows
  
  expect(screen.getAllByText('Jane Smith')).toHaveLength(1); // Jane Smith should appear in one row
  expect(screen.getAllByText('Alice Johnson')).toHaveLength(1); // Alice Johnson should appear in one row

  // Check if the formatted price values are rendered correctly
  expect(screen.getByText('$120.40')).toBeInTheDocument(); // Valid price
  expect(screen.getByText('Invalid Price')).toBeInTheDocument(); // Invalid price
  expect(screen.getByText('$80.20')).toBeInTheDocument(); // Valid price
  expect(screen.getByText('$0.00')).toBeInTheDocument(); // Valid price
});
