

// import React from 'react';
// import AdminSideBar from '../components/AdminSide';
// import BookingTable from '../components/AdbookingTable';

// const bookingsData = [
//   {
//     id: 1,
//     bookingId: 'B001',
//     userId: 'U001',
//     username: 'Tarun',
//     submissionDate: '2022-03-01',
//     eventDate: '2022-04-15',
//     description: 'Company Event',
//     bookingStatus: 'Pending',
//     eventType: 'Conference',
//     headcount: 50,
//     amount: '$5000',
//   },
//   {
//     id: 2,
//     bookingId: 'B002',
//     userId: 'U002',
//     username: 'James Cameron',
//     submissionDate: '2022-03-05',
//     eventDate: '2022-05-20',
//     description: 'Team Building',
//     bookingStatus: 'Verified',
//     eventType: 'Workshop',
//     headcount: 30,
//     amount: '$3000',
//   },
//   {
//     id: 3,
//     bookingId: 'B002',
//     userId: 'U002',
//     username: 'Shinchan',
//     submissionDate: '2022-03-05',
//     eventDate: '2022-05-20',
//     description: 'Wellness Meeting',
//     bookingStatus: 'Confirmed',
//     eventType: 'Workshop',
//     headcount: 30,
//     amount: '$3000',
//   },
// ];

// const AdminBookingList = () => {
//   return (
//     <div>
//         <AdminSideBar/>
//       <h1 style={{textAlign:'center',paddingTop:'30px',color:'#4e5db2'}}>User Booking List</h1><br></br>
//       <BookingTable bookings={bookingsData} />
//     </div>
//   );
// };

// export default AdminBookingList;


import React, { useEffect, useState } from 'react';
import AdminSideBar from '../components/AdminSide';
import BookingTable from '../components/AdbookingTable';
import axios from 'axios';
import FooterUser from '../components/Footer';


const AdminBookingList = () => {
  const [userBookings, setUserBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/bookings`); // Replace {user_email} with the actual user's email
        setUserBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user bookings:', error);
      }
    };

    fetchUserBookings();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <>
    <div>
      <AdminSideBar />
      <h1 style={{ textAlign: 'center', paddingTop: '30px', color: '#4e5db2' }}>User Booking List</h1><br></br>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BookingTable bookings={userBookings} />
      )}
    </div>
    <FooterUser/>
    </>
  );
};

export default AdminBookingList;
