import React, { useState } from 'react';

const BookingTable = ({ bookings }) => {
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBookings = bookings.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>User ID</th>
            <th>Username</th>
            <th>Submission Date</th>
            <th>Event Date</th>
            <th>Description</th>
            <th>Booking Status</th>
            <th>Event Type</th>
            <th>Headcount</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.bookingId}</td>
              <td>{booking.userId}</td>
              <td>{booking.username}</td>
              <td>{booking.submissionDate}</td>
              <td>{booking.eventDate}</td>
              <td>{booking.description}</td>
              <td>
                <select value={booking.bookingStatus} onChange={(e) => handleStatusChange(booking.id, e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Verified">Verified</option>
                  <option value="Confirmed">Confirmed</option>
                </select>
              </td>
              <td>{booking.eventType}</td>
              <td>{booking.headcount}</td>
              <td>{booking.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: Math.ceil(bookings.length / itemsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingTable;
