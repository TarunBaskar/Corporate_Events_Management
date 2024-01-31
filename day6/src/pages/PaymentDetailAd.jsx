
import React from 'react';
import PaymentTable from '../components/adminpaymentTable';
import AdminSideBar from '../components/AdminSide';
import "../assets/css/adminpayment.css";

const paymentsData = [
  {
    userId: 'U001',
    username: 'Tarun',
    totalBookings: 10,
    totalPayment: '$5000',
    pendingBookings: 3,
    verifiedBookings: 7,
  },
  {
    userId: 'U002',
    username: 'James Cameron',
    totalBookings: 15,
    totalPayment: '$8000',
    pendingBookings: 5,
    verifiedBookings: 10,
  },
  {
    userId: 'U003',
    username: 'Kumar',
    totalBookings: 15,
    totalPayment: '$9000',
    pendingBookings: 8,
    verifiedBookings: 7,
  },
];

const AdminPaymentList = () => {
  return (
    <div>
        <AdminSideBar/>
      <h1 style={{textAlign:'center',paddingTop:'30px',color:'#4e5db2'}}>Admin Payment List</h1>
      <PaymentTable payments={paymentsData} />
    </div>
  );
};

export default AdminPaymentList;
