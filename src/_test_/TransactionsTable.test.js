import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionsTable from '../components/TransactionsTable'; // Update the path as needed

describe('TransactionTable', () => {
  it('renders TransactionTable with provided data', () => {
    const testData = [
      {
        transactionId: 'T001',
        customerId: 'C001',
        customerName: 'John Doe',
        purchaseDate: '2024-08-10',
        productPurchased: 'Laptop',
        price: 1000,
        rewardPoints: 950,
      },
      {
        transactionId: 'T002',
        customerId: 'C002',
        customerName: 'Jane Smith',
        purchaseDate: '2024-08-11',
        productPurchased: 'Phone',
        price: 600,
        rewardPoints: 450,
      },
    ];

    render(<TransactionsTable transactions={testData} />);

    // Check if the transaction data is rendered correctly
    expect(screen.getByText('T001')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('$1000.00')).toBeInTheDocument(); // Updated to match formatted price
    expect(screen.getByText('950')).toBeInTheDocument();

    expect(screen.getByText('T002')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('$600.00')).toBeInTheDocument(); // Updated to match formatted price
    expect(screen.getByText('450')).toBeInTheDocument();
  });
});
