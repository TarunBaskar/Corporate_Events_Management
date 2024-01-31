// PaymentTable.jsx

import React, { useState } from 'react';

const PaymentTable = ({ payments }) => {
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPayments = payments.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table className="payment-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Total Bookings</th>
            <th>Total Payment</th>
            <th>Pending Bookings</th>
            <th>Verified Bookings</th>
          </tr>
        </thead>
        <tbody>
          {currentPayments.map((payment) => (
            <tr key={payment.userId}>
              <td>{payment.userId}</td>
              <td>{payment.username}</td>
              <td>{payment.totalBookings}</td>
              <td>{payment.totalPayment}</td>
              <td>{payment.pendingBookings}</td>
              <td>{payment.verifiedBookings}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(payments.length / itemsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentTable;
