
// import React from 'react';
// import PaymentTable from '../components/adminpaymentTable';
// import AdminSideBar from '../components/AdminSide';
// import "../assets/css/adminpayment.css";
// import FooterUser from '../components/Footer';


// const paymentsData = [
//   {
//     userId: 'U001',
//     username: 'Tarun',
//     totalBookings: 10,
//     totalPayment: '$5000',
//     pendingBookings: 3,
//     verifiedBookings: 7,
//   },
//   {
//     userId: 'U002',
//     username: 'James Cameron',
//     totalBookings: 15,
//     totalPayment: '$8000',
//     pendingBookings: 5,
//     verifiedBookings: 10,
//   },
//   {
//     userId: 'U003',
//     username: 'Kumar',
//     totalBookings: 15,
//     totalPayment: '$9000',
//     pendingBookings: 8,
//     verifiedBookings: 7,
//   },
// ];

// const AdminPaymentList = () => {
//   return (
//     <>
//     <div>
//         <AdminSideBar/>
//       <h1 style={{textAlign:'center',paddingTop:'30px',color:'#4e5db2'}}>Admin Payment List</h1>
//       <PaymentTable payments={paymentsData} />
//     </div>
//     <FooterUser/>
//     </>
//   );
// };

// export default AdminPaymentList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentTable from '../components/adminpaymentTable';
import AdminSideBar from '../components/AdminSide';
import FooterUser from '../components/Footer';
import "../assets/css/adminpayment.css";

const AdminPaymentList = () => {
  const [userPayments, setUserPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPayments = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/v1/paymentdetails'); // Adjust the URL to your actual endpoint
        setUserPayments(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user payments:', error);
      }
    };

    fetchUserPayments();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <>
      <div>
        <AdminSideBar />
        <h1 style={{ textAlign: 'center', paddingTop: '30px', color: '#4e5db2' }}>Admin Payment List</h1>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <PaymentTable payments={userPayments} />
        )}
      </div>
      <FooterUser />
    </>
  );
};

export default AdminPaymentList;

