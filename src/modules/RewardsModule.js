
import React, { useEffect, useState } from 'react';
import UserMonthlyRewardsTable from '../components/UserMonthlyRewardsTable';
import TotalRewardsTable from '../components/TotalRewardsTable';
import TransactionsTable from '../components/TransactionsTable';
import { calculateRewardPoints } from '../utils/RewardPointsCalculator';
import { fetchTransactions } from '../service/TransactionService';
import { logger } from "../logger";

const RewardsModule = () => {
  const [transactions, setTransactions] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [totalRewardsData, setTotalRewardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const processTransactions = async () => {
      try {
        // Fetch transactions from the service
        const data = await fetchTransactions();
        logger.log("Fetched transactions:", data);

        // Get the most recent transaction date to determine the current range
        const mostRecentDate = new Date(Math.max(...data.map(transaction => new Date(transaction.purchaseDate))));

        // Calculate the date three months prior to the most recent transaction
        const threeMonthsAgo = new Date(mostRecentDate);
        threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 2); // Adjust to include the current month

        // Filter transactions that fall within the last three months
        const filteredData = data.filter(transaction => {
          const transactionDate = new Date(transaction.purchaseDate);
          return transactionDate >= threeMonthsAgo && transactionDate <= mostRecentDate;
        });

        logger.log("Filtered transactions (last 3 months):", filteredData);

        // Calculate reward points and add month/year information
        const rewardPointsData = filteredData.map(transaction => {
          // Ensure the price is valid
          const price = parseFloat(transaction.price);
          const rewardPoints = isNaN(price) ? 0 : calculateRewardPoints(price);
          return {
            ...transaction,
            rewardPoints,
            month: new Date(transaction.purchaseDate).toLocaleString('default', { month: 'long' }),
            year: new Date(transaction.purchaseDate).getFullYear(),
          };
        });

        logger.log("Reward points data:", rewardPointsData);

        // Group transactions by month and year
        const monthlyData = rewardPointsData.reduce((acc, transaction) => {
          const { month, year } = transaction;
          const monthYearKey = `${month}-${year}`;
          if (!acc[monthYearKey]) {
            acc[monthYearKey] = { month, year, transactions: [] };
          }
          acc[monthYearKey].transactions.push(transaction);
          return acc;
        }, {});

        logger.log("Monthly data:", monthlyData);

        // Calculate total reward points for each customer
        const totalRewardsData = Object.values(
          rewardPointsData.reduce((acc, { customerName, rewardPoints }) => {
            if (!acc[customerName]) {
              acc[customerName] = { customerName, totalPoints: 0 };
            }
            acc[customerName].totalPoints += rewardPoints;
            return acc;
          }, {})
        );

        logger.log("Total rewards data:", totalRewardsData);

        // Update state with processed data
        setTransactions(rewardPointsData);
        setMonthlyData(Object.values(monthlyData));
        setTotalRewardsData(totalRewardsData);
      } catch (err) {
        logger.error("Error fetching transactions:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    processTransactions();
  }, []);

  if (loading) {
    return <div className='loading'><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div className='error'>something went wrong</div>;
  }

  return (
    <div className="container">
      <h2>User Monthly Rewards</h2>
      <UserMonthlyRewardsTable monthlyData={monthlyData} />
      <h2>Total Rewards</h2>
      <TotalRewardsTable totalRewardsData={totalRewardsData} />
      <h2>All Transactions</h2>
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default React.memo(RewardsModule);
