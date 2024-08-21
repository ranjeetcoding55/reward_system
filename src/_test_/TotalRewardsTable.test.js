import React from 'react';
import { render, screen } from '@testing-library/react';
import TotalRewardsTable from '../components/TotalRewardsTable'; // Adjust the import path if necessary

test('renders TotalRewardsTable with provided data', () => {
  const testData = [
    { customerName: 'John Doe', totalPoints: 100 },
    { customerName: 'Jane Smith', totalPoints: 150 },
    { customerName: 'Alice Johnson', totalPoints: 120.40 }
  ];

  render(<TotalRewardsTable totalRewardsData={testData} />);

  // Check if the customer names and reward points are rendered
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('100')).toBeInTheDocument();
  expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  expect(screen.getByText('150')).toBeInTheDocument();
  expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
  expect(screen.getByText('120.4')).toBeInTheDocument(); 
});
