// PaymentTable.jsx

import React, { useState } from 'react';

const PaymentTable = ({ payments }) => {
  const itemsPerPage = 9; // Number of items to display per page
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
            <th>Payment ID</th>
            <th>User email</th>
            <th>Total Amount</th>
            <th>Payment Date</th>
            <th>Event Name</th>
            <th>Payment Mode</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentPayments.map((payment) => (
            <tr key={payment.pid}>
              <td>{payment.pid}</td>
              <td>{payment.pemail}</td>
              <td>{payment.ptotal}</td>
              <td>{payment.ppayDate}</td>
              <td>{payment.peventName}</td>
              <td>{payment.pmode}</td>
              <td>{payment.pstatus ? 'Paid' : 'Not Paid'}</td>
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
