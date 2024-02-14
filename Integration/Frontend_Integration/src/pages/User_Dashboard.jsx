//     import Sidebar from "../components/SideBar";
//     // import PaymentList from "./UserPayment";
//     import "../assets/css/Userdb.css";       
// import FooterUser from "../components/FooterUser";
// import { selectUser, logout } from '../assets/others/userSlice';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';


   

// function UserDashboard() {

  
//   const user = useSelector(selectUser);
//   const [recentBookings, setRecentBookings] = useState([]);

//   useEffect(() => {
//     if (!userEmail) {
//       // Handle the case where user email is not available
//       return;
//     }

//     const fetchRecentBookings = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8081/api/bookings/byEmail/${user.email}?limit=5`);
//         setRecentBookings(response.data);
//       } catch (error) {
//         console.error('Error fetching recent bookings:', error);
//       }
//     };

//     fetchRecentBookings();
//   }, [userEmail]);

//           const paymentHistory = [
//             {
//               date: '2024-06-11',
//               totalAmount: 100,
//               paidAmount: 50,
//               balanceAmount: 50,
//               paymentMode: 'CARD',
//               status: 'Paid',
//             },
//             {
//               date: '2023-01-01',
//               totalAmount: 100,
//               paidAmount: 50,
//               balanceAmount: 50,
//               paymentMode: 'CARD',
//               status: 'Paid',
//             },
//             {
//               date: '2022-01-01',
//               totalAmount: 100,
//               paidAmount: 50,
//               balanceAmount: 50,
//               paymentMode: 'CARD',
//               status: 'Paid',
//             },
            
//           ];
         
        
        
//           return (
//             <>
//               <Sidebar />
          
//               <div className="udb_part1">
//                 <div className="titleudb" style={{ textAlign: 'center', color: '#4e5db2' }}>
//                   <br></br>
//                   <h1>User DashBoard Details</h1>
//                 </div>
//                 <div className="widgetudb">
                    
//                     <div className="widget-box">
//                     <h2>Total Payment</h2>
//                     <p>$2,500</p>
//                     </div>

                    
//                     <div className="widget-box">
//                     <h2>Total Events Attended</h2>
//                     <p>5</p>
//                     </div>

                    
//                     {/* <div className="widget-box">
//                     <h2>Total Events Pending</h2>
//                     <p>3</p>
//                     </div> */}

                    
//                     <div className="widget-box">
//                     <h2>Score</h2>
//                     <p>80</p>
//                     </div>
//       {/* </div>         */}
//                 </div>
//               </div><br></br><br></br>
              // <div className="upcommingudp">
              //   <h2 style={{ textAlign: 'center' }}>Upcoming Events</h2>
              //   <div className="event-cards-container">
                  
              //     <div className="event-card">
              //       <img
              //      src="https://i.pinimg.com/736x/60/c2/7b/60c27b8530ed24d26c7d7338e4b2f8ac.jpg"
              //      alt="Event"
              //         className="event-image"
              //       />
              //       <div className="event-details">
              //         <h3>Conference Meeting</h3>
              //         <p>Collaboration is the key to innovation. Together, we can achieve more than we ever could alone. Let's inspire, learn, and create a future that exceeds our imagination</p>
              //         <p>Date: January 1, 2023</p>
              //         <p>Price: $500</p>
              //       </div>
              //     </div>
          
                  
              //     <div className="event-card">
              //       <img
              //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZ30k0CAAw2bPiIRHTKHviXsBTEnBX4SoR_OP4uMQlZ3BJmwbePKkvemBRJ4djGB-hsY&usqp=CAU" // Replace with your event image URL
              //         alt="Event"
              //         className="event-image"
              //       />
              //       <div className="event-details">
              //         <h3>Team-building events</h3>
              //         <p>Team-building events may take place on their own or as part of larger events, like conferences and corporate retreats</p>
              //         <p>Date: February 15, 2023</p>
              //         <p>Price: $300</p>
              //       </div>
              //     </div>
                  
              //     <div className="event-card">
              //       <img
              //         src="https://blog.ipleaders.in/wp-content/uploads/2016/09/Shareholder-Meeting.jpg" 
              //         alt="Event"
              //         className="event-image"
              //       />
              //       <div className="event-details">
              //         <h3>Shareholder meetings</h3>
              //         <p>Annual shareholder meetings are regulatory requirements for private and public companies.</p>
              //         <p>Date: February 15, 2023</p>
              //         <p>Price: $300</p>
              //       </div>
              //     </div>
                  
              //     <div className="event-card">
              //       <img
              //         src="https://www.tmwproductions.biz/wp-content/uploads/2021/01/health-events-388x259.jpeg" 
              //         alt="Event"
              //         className="event-image"
              //       />
              //       <div className="event-details">
              //         <h3>Wellness events</h3>
              //         <p>company wellness events aim to improve employees’ overall health by enhancing their sense of personal well-being and satisfaction</p>
              //         <p>Date: February 15, 2023</p>
              //         <p>Price: $300</p>
              //       </div>
              //     </div>
          
              //   </div>
              // </div>
//               <div className="mybookudb">
//         <h2 style={{ textAlign: 'center' }}>My Recent Bookings</h2>
//         <table className="booking-table">
//           <thead>
//             <tr>
//               <th>Event Name</th>
//               <th>Event ID</th>
//               <th>Location</th>
//               <th>Company</th>
//               <th>Amount</th>
//               <th>Status</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recentBookings.map((booking, index) => (
//               <tr key={index}>
//                 <td>{booking.beventName}</td>
//                 <td>{booking.bEventId}</td>
//                 <td>{booking.bLocation}</td>
//                 <td>{booking.bCompany}</td>
//                 <td>{booking.bAmount}</td>
//                 <td>{booking.bStatus}</td>
//                 <td>{booking.bDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
// <br></br>
//        {/* <div>
//         <h2 style={{ textAlign: 'center' }}>Step-by-Step Progress</h2>
//         <canvas ref={chartRef} width="400" height="200"></canvas>
//       </div> */}
//               <div className="paymentudb">
//                 <h2 style={{ textAlign: 'center',color:'#4e5db2' }}>Payment History</h2>
//                 <table className="payment-table">
//                   <thead>
//                     <tr>
//                       <th>Date</th>
//                       <th>Total Amount</th>
//                       <th>Paid Amount</th>
//                       <th>Balance Amount</th>
//                       <th>Payment Mode</th>
//                       <th>Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {paymentHistory.map((payment, index) => (
//                       <tr key={index}>
//                         <td>{payment.date}</td>
//                         <td>{payment.totalAmount}</td>
//                         <td>{payment.paidAmount}</td>
//                         <td>{payment.balanceAmount}</td>
//                         <td>{payment.paymentMode}</td>
//                         <td>{payment.status}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <FooterUser/>
//             </>
//           );
//           }
          
//           export default UserDashboard;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Sidebar from "../components/SideBar";
import FooterUser from "../components/FooterUser";
import { selectUser } from '../assets/others/userSlice';

import "../assets/css/Userdb.css";

function UserDashboard() {
  const user = useSelector(selectUser);
  const [recentBookings, setRecentBookings] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);


  useEffect(() => {
    const fetchRecentBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/bookings/byEmail/${user.email}?limit=5`);
        setRecentBookings(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching recent bookings:', error);
      }
    };

    fetchRecentBookings();
  }, [user.email]);
  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/v1/paymentdetails/byEmail/${user.email}?limit=5`);
        setPaymentDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching payment details:', error);
      }
    };

    fetchPaymentDetails();
  }, [user.email]);

  return (
    <>
      <Sidebar />

      <div className="udb_part1">
        <div className="titleudb" style={{ textAlign: 'center', color: '#4e5db2' }}>
          <br></br>
          <h1>User DashBoard Details</h1>
        </div>

      </div>

    
                    <div className="upcommingudp">
                <h2 style={{ textAlign: 'center' }}>Our Best Events</h2>
                <div className="event-cards-container">
                  
                  <div className="event-card">
                    <img
                   src="https://i.pinimg.com/736x/60/c2/7b/60c27b8530ed24d26c7d7338e4b2f8ac.jpg"
                   alt="Event"
                      className="event-image"
                    />
                    <div className="event-details">
                      <h3>Conference Meeting</h3>
                      <p>Collaboration is the key to innovation. Together, we can achieve more than we ever could alone. Let's inspire, learn, and create a future that exceeds our imagination</p>
                      <p>Price: 500</p>
                    </div>
                  </div>
          
                  
                  <div className="event-card">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZ30k0CAAw2bPiIRHTKHviXsBTEnBX4SoR_OP4uMQlZ3BJmwbePKkvemBRJ4djGB-hsY&usqp=CAU" // Replace with your event image URL
                      alt="Event"
                      className="event-image"
                    />
                    <div className="event-details">
                      <h3>Team-building events</h3>
                      <p>Team-building events may take place on their own or as part of larger events, like conferences and corporate retreats</p>
                      <p>Price: 300</p>
                    </div>
                  </div>
                  
                  <div className="event-card">
                    <img
                      src="https://blog.ipleaders.in/wp-content/uploads/2016/09/Shareholder-Meeting.jpg" 
                      alt="Event"
                      className="event-image"
                    />
                    <div className="event-details">
                      <h3>Shareholder meetings</h3>
                      <p>Annual shareholder meetings are regulatory requirements for private and public companies.</p>
                      <p>Price: 300</p>
                    </div>
                  </div>
                  
                  <div className="event-card">
                    <img
                      src="https://www.tmwproductions.biz/wp-content/uploads/2021/01/health-events-388x259.jpeg" 
                      alt="Event"
                      className="event-image"
                    />
                    <div className="event-details">
                      <h3>Wellness events</h3>
                      <p>company wellness events aim to improve employees’ overall health by enhancing their sense of personal well-being and satisfaction</p>
                      <p>Price: 300</p>
                    </div>
                  </div>
          
                </div>
              </div>

      <div className="mybookudb">
        <h2 style={{ textAlign: 'center' }}>My Recent Bookings</h2>
        <table className="booking-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event ID</th>
              <th>Location</th>
              <th>User Name</th>
              <th>Description</th>
              <th>HeadCount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.beventName}</td>
                <td>{booking.bEventId}</td>
                <td>{booking.blocation}</td>
                <td>{booking.buserName}</td>
                <td>{booking.bdescription}</td>
                <td>{booking.bheadCount}</td>
                <td>{booking.btotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br></br>
      {/* <div>
        <h2 style={{ textAlign: 'center' }}>Step-by-Step Progress</h2>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div> */}
       <div className="paymentudb">
        <h2 style={{ textAlign: 'center', color: '#4e5db2' }}>Payment History</h2>
        <table className="payment-table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Paid Amount</th>
              <th>Email</th>
              <th>Payment Mode</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentDetails.map((payment, index) => (
              <tr key={index}>
                <td>{payment.pid}</td>
                <td>{payment.ppayDate}</td>
                <td>{payment.ptotal}</td>
                <td>{payment.ptotal}</td>
                <td>{payment.pemail}</td>
                <td>{payment.pmode}</td>
                <td>{payment.pstatus ? 'Paid' : 'Unpaid'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FooterUser/>
    </>
  );
}

export default UserDashboard;
