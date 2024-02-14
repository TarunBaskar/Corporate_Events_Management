// import React from 'react';
// import { Table } from 'reactstrap';
// import "../assets/css/payment.css";
// import SideBar from '../components/SideBar';
// import FooterUser from '../components/FooterUser';

// const PaymentList = ({ paymentHistory }) => {
//   if (!paymentHistory || paymentHistory.length === 0) {
//     const defaultPaymentDetails = [
//       {
//         date: '2024-06-11',
//         eventname: 'Event-8',
//         totalAmount: 100,
//         paidAmount: 50,
//         balanceAmount: 50,
//         paymentMode: 'CARD',
//         status: 'Paid',
//       },
//       {
//         date: '2023-01-01',
//         eventname: 'Event-16',
//         totalAmount: 100,
//         paidAmount: 50,
//         balanceAmount: 50,
//         paymentMode: 'CARD',
//         status: 'Paid',
//       },
//       {
//         date: '2022-01-01',
//         eventname: 'Event-32',
//         totalAmount: 100,
//         paidAmount: 50,
//         balanceAmount: 50,
//         paymentMode: 'CARD',
//         status: 'Paid',
//       },
//     ];

    
//     return (
//         <>
//         <SideBar />
//       <div className="payment-list">
        
//         <h1 style={{color:'#4e5db2'}}>Payment History</h1>
//         <Table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Event Name</th>
//               <th>Total Amount</th>
//               <th>Paid Amount</th>
//               <th>Balance Amount</th>
//               <th>Payment Mode</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {defaultPaymentDetails.map((payment, index) => (
//               <tr key={index}>
//                 <td>{payment.date}</td>
//                 <td>{payment.eventname}</td>
//                 <td>{payment.totalAmount}</td>
//                 <td>{payment.paidAmount}</td>
//                 <td>{payment.balanceAmount}</td>
//                 <td>{payment.paymentMode}</td>
//                 <td>{payment.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <FooterUser/>
//       </>
//     );
//   }

//   return (
//     <div className="payment-list">
//       {/* <SideBar /> */}
//       <h1 style={{color:'#4e5db2'}}>Payment History</h1>
//       <Table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Total Amount</th>
//             <th>Paid Amount</th>
//             <th>Balance Amount</th>
//             <th>Payment Mode</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paymentHistory.map((payment, index) => (
//             <tr key={index}>
//               <td>{payment.date}</td>
//               <td>{payment.totalAmount}</td>
//               <td>{payment.paidAmount}</td>
//               <td>{payment.balanceAmount}</td>
//               <td>{payment.paymentMode}</td>
//               <td>{payment.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default PaymentList;

import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../assets/others/userSlice';
import "../assets/css/payment.css";
import SideBar from '../components/SideBar';
import FooterUser from '../components/FooterUser';

const PaymentList = () => {
  const user = useSelector(selectUser);
  const [userPayments, setUserPayments] = useState([]);

  useEffect(() => {
    const fetchUserPayments = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/v1/paymentdetails/byEmail/${user.email}`);
        setUserPayments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user payments:', error);
      }
    };

    if (user.email) {
      fetchUserPayments();
    }
  }, [user.email]);

  if (!userPayments || userPayments.length === 0) {
    // alert('There is no payment data for the user');
  }

  return (
    <>
      <SideBar />
      <div className="payment-list">
        <h1 style={{ color: '#4e5db2' }}>Payment History</h1>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Paid Amount</th>
              <th>Email</th>
              <th>Payment Mode</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userPayments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.ppayDate}</td>
                <td>{payment.ptotal}</td>
                <td>{payment.ptotal}</td>
                <td>{payment.pemail}</td>
                <td>{payment.pmode}</td>
                <td>{payment.pstatus ? 'Paid' : 'Unpaid'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <FooterUser />
    </>
  );
};

export default PaymentList;
