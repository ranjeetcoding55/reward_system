import React from "react";

const UserMonthlyRewardsTable = ({ monthlyData }) => {
  return (
    <div className="table-container">
      {monthlyData.map((monthData) => (
        <div key={`${monthData.month}-${monthData.year}`}>
          <h3>{`${monthData.month} ${monthData.year}`}</h3>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Transaction ID</th>
                <th>Amount Spent</th>
                <th>Transaction Date</th>
                <th>Transaction Year</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {monthData.transactions.map((transaction) => {
                // Convert price to number and handle errors
                const price = parseFloat(transaction.price);
                const formattedPrice = isNaN(price)
                  ? "Invalid Price"
                  : `$${price.toFixed(2)}`;

                return (
                  <tr key={transaction.transactionId}>
                    <td>{transaction.customerId}</td>
                    <td>{transaction.customerName}</td>
                    <td>{transaction.transactionId}</td>
                    <td>{formattedPrice}</td>
                    <td>
                      {new Date(transaction.purchaseDate).toLocaleDateString()}
                    </td>
                    <td>{transaction.year}</td>
                    <td>{transaction.rewardPoints}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default React.memo(UserMonthlyRewardsTable);
