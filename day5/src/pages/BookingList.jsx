// import AdminSideBar from "../components/AdminSide";

// function AdminBookingList() {
//     return ( 
//         <>
//         <AdminSideBar/>
//         <h1>Booking List</h1>
//         </>
//      );
// }

// export default AdminBookingList;


// MainBookingPage.jsx

import React from 'react';
import AdminSideBar from '../components/AdminSide';
import BookingTable from '../components/AdbookingTable';

const bookingsData = [
  {
    id: 1,
    bookingId: 'B001',
    userId: 'U001',
    username: 'Tarun',
    submissionDate: '2022-03-01',
    eventDate: '2022-04-15',
    description: 'Company Event',
    bookingStatus: 'Pending',
    eventType: 'Conference',
    headcount: 50,
    amount: '$5000',
  },
  {
    id: 2,
    bookingId: 'B002',
    userId: 'U002',
    username: 'James Cameron',
    submissionDate: '2022-03-05',
    eventDate: '2022-05-20',
    description: 'Team Building',
    bookingStatus: 'Verified',
    eventType: 'Workshop',
    headcount: 30,
    amount: '$3000',
  },
  {
    id: 3,
    bookingId: 'B002',
    userId: 'U002',
    username: 'Shinchan',
    submissionDate: '2022-03-05',
    eventDate: '2022-05-20',
    description: 'Wellness Meeting',
    bookingStatus: 'Confirmed',
    eventType: 'Workshop',
    headcount: 30,
    amount: '$3000',
  },
  // Add more booking entries as needed
];

const AdminBookingList = () => {
  return (
    <div>
        <AdminSideBar/>
      <h1 style={{textAlign:'center',paddingTop:'30px'}}>User Booking List</h1><br></br>
      <BookingTable bookings={bookingsData} />
    </div>
  );
};

export default AdminBookingList;
