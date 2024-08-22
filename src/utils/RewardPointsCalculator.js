/**
 * Calculates reward points based on the purchase amount.
 * - 1 point per dollar spent between $50 and $100
 * - 2 points per dollar spent over $100
 *
 * @param {number|string} price - The purchase amount, can be a number or a string.
 * @returns {number} - The calculated reward points.
 */
export const calculateRewardPoints = (price) => {
  // Ensure price is a number
  const amount = parseFloat(price);

  if (isNaN(amount)) {
    console.error("Invalid price value:", price);
    return 0; // Return 0 points if the price is invalid
  }

  // Round the amount to avoid floating-point issues
  const roundedAmount = Math.round(amount * 100) / 100;

  if (roundedAmount <= 50) return 0;
  if (roundedAmount <= 100) return Math.round(roundedAmount - 50); // Points for the $50-$100 range
  return Math.round((roundedAmount - 100) * 2 + 50); // Points for the over $100 range
};
