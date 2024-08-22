import React from 'react';
import PropTypes from 'prop-types';
const TotalRewardsTable = ({ totalRewardsData = [] }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Total Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {totalRewardsData.map((data, index) => (
            <tr key={index}>
              <td>{data.customerName}</td>
              <td>{data.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TotalRewardsTable.propTypes = {
  totalRewardsData: PropTypes.arrayOf(
    PropTypes.shape({
      customerName: PropTypes.string.isRequired,
      totalPoints: PropTypes.number.isRequired
    })
  )
};

export default React.memo(TotalRewardsTable);
