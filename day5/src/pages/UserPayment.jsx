import React from 'react';
import { Table } from 'reactstrap';
import "../assets/css/payment.css";
import SideBar from '../components/SideBar';
import FooterUser from '../components/FooterUser';

const PaymentList = ({ paymentHistory }) => {
  // Check if paymentHistory is undefined or empty
  if (!paymentHistory || paymentHistory.length === 0) {
    // Default payment details array
    const defaultPaymentDetails = [
      {
        date: '2024-06-11',
        totalAmount: 100,
        paidAmount: 50,
        balanceAmount: 50,
        paymentMode: 'CARD',
        status: 'Paid',
      },
      {
        date: '2023-01-01',
        totalAmount: 100,
        paidAmount: 50,
        balanceAmount: 50,
        paymentMode: 'CARD',
        status: 'Paid',
      },
      {
        date: '2022-01-01',
        totalAmount: 100,
        paidAmount: 50,
        balanceAmount: 50,
        paymentMode: 'CARD',
        status: 'Paid',
      },
      // Add more default payment details as needed
    ];

    // Display default payment details in the table
    return (
        <>
        <SideBar />
      <div className="payment-list">
        
        <h1>Payment History</h1>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Paid Amount</th>
              <th>Balance Amount</th>
              <th>Payment Mode</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {defaultPaymentDetails.map((payment, index) => (
              <tr key={index}>
                <td>{payment.date}</td>
                <td>{payment.totalAmount}</td>
                <td>{payment.paidAmount}</td>
                <td>{payment.balanceAmount}</td>
                <td>{payment.paymentMode}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      </>
    );
  }

  // Display paymentHistory in the table
  return (
    <div className="payment-list">
      {/* <SideBar /> */}
      <h1>Payment History</h1>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Paid Amount</th>
            <th>Balance Amount</th>
            <th>Payment Mode</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment, index) => (
            <tr key={index}>
              <td>{payment.date}</td>
              <td>{payment.totalAmount}</td>
              <td>{payment.paidAmount}</td>
              <td>{payment.balanceAmount}</td>
              <td>{payment.paymentMode}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <FooterUser/> */}
    </div>
  );
};

export default PaymentList;
