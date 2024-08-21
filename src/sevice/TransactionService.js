import { logger } from "../logger";
export const fetchTransactions = async () => {
    try {
      const response = await fetch('/data-source/Transactions.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      logger.error('Error fetching transactions:', error);
      throw error; 
    }
  };
  