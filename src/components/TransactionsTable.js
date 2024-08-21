// components/TransactionTable.js
import React from 'react';
//import '../styles/styles.css'

/**
 * Renders a table of all transactions.
 * 
 * @param {Array} transactions - Array of transaction objects.
 * @returns {JSX.Element} - The rendered table of transactions.
 */
const TransactionTable = ({ transactions }) => {
  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Customer ID</th> 
          <th>Customer Name</th>
          <th>Purchase Date</th>
          <th>Product Purchased</th>
          <th>Price</th>
          <th>Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.transactionId}>
            <td>{transaction.transactionId}</td>
            <td>{transaction.customerId}</td> 
            <td>{transaction.customerName}</td>
            <td>{new Date(transaction.purchaseDate).toLocaleDateString()}</td>
            <td>{transaction.productPurchased}</td>
            <td>${parseFloat(transaction.price).toFixed(2)}</td> 
            <td>{transaction.rewardPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default React.memo(TransactionTable);
