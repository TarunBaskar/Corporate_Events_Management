import AdminSideBar from "../components/AdminSide";
import Footer from "../components/Footer"; 
import "../assets/css/admindb.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function AdminDashboard() {
  const [recentUserBookings, setRecentUserBookings] = useState([]);
  const [recentUserPayments, setRecentUserPayments] = useState([]);


  const bookingCountOfMonth = 35; 
  const totalUsers = 200; 
  const totalEvents = 50; 
  const blockbusterEvent = "Chennai Event"; 

  useEffect(() => {
    const fetchRecentUserBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/bookings?limit=5`);
        setRecentUserBookings(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching recent user bookings:', error);
      }
    };

    const fetchRecentUserPayments = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/v1/paymentdetails?limit=5`);
        setRecentUserPayments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching recent user payments:', error);
      }
    };

    fetchRecentUserBookings();
    fetchRecentUserPayments();
  }, []);

  return (
    <>
      <AdminSideBar />
      <br></br><br></br>
      <h1 style={{color:'#4e5db2',textAlign:'center'}}>Admin Dashboard</h1>
      <div className="widgetadb">
        <div className="widget-box">
          <h3>Booking Count This Month</h3>
          <p>{bookingCountOfMonth}</p>
        </div>

        <div className="widget-box">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>

        <div className="widget-box">
          <h3>Total Events</h3>
          <p>{totalEvents}</p>
        </div>

        <div className="widget-box">
          <h3>Blockbuster Event</h3>
          <p>{blockbusterEvent}</p>
        </div>
      </div>
      <br></br>
      {/* <div className="analyticsreport">Your analytics content</div> */}
      <div className="recent_bookings">
        <h2 style={{ textAlign: 'center' }}>Recent Booking Details</h2><br></br>
        <table>
          <thead>
            <tr>
            <th>Booking ID</th>
            {/* <th>User ID</th> */}
            <th>Username</th>
            <th>Submission Date</th>
            <th>Event Date</th>
            <th>Description</th>
            {/* <th>Booking Status</th> */}
            <th>Event Type</th>
            <th>Headcount</th>
            <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentUserBookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.bookId}</td>
              {/* <td>{booking.userId}</td> */}
              <td>{booking.bemail}</td>
              <td>{booking.bbookingdate}</td>
              <td>{booking.beventDate}</td>
              <td>{booking.bdescription}</td>
              <td>{booking.beventName}</td>
              <td>{booking.bheadCount}</td>
              <td>{booking.btotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div><br></br><br></br>
      <div className="recent_payments">
        <h2>Recent User Payments</h2><br></br>
        <table>
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
            {recentUserPayments.map((payment, index) => (
              <tr key={index}>
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
      </div>

      <Footer className="admin_Footer" />
    </>
  );
}

export default AdminDashboard;
