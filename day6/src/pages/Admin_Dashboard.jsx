import AdminSideBar from "../components/AdminSide";
import Footer from "../components/Footer"; 
import "../assets/css/admindb.css";

function AdminDashboard() {

  const bookingCountOfMonth = 35; 
  const totalUsers = 200; 
  const totalEvents = 50; 
  const blockbusterEvent = "Chennai Event"; 

    const recentBookings = [
        {
          bookingId: "B001",
          userId: "U001",
          userName: "Tarun",
          eventDate: "2024-04-01",
          amount: 7500,
          status: "Confirmed",
          profileImage: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          bookingId: "B002",
          userId: "U002",
          userName: "Kumaran",
          eventDate: "2024-04-05",
          amount: 5500,
          status: "Pending",
          profileImage: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        },
        // Add more recent booking entries as needed
      ];
  // Sample hardcoded payment history data
  const paymentHistory = [
    {
      eventName: "Event A",
      eventId: "001",
      user: "Tarun",
      transactionAmount: 100000,
      status: "Completed",
    },
    {
      eventName: "Event B",
      eventId: "002",
      user: "Ram Kumar",
      transactionAmount: 15100,
      status: "Pending",
    },
    {
      eventName: "Event c",
      eventId: "008",
      user: "Ganesha",
      transactionAmount: 15000,
      status: "Completed",
    },
    {
      eventName: "Event k",
      eventId: "0090",
      user: "James Cameron",
      transactionAmount: 19950,
      status: "Pending",
    },
  ];

  return (
    <>
      <AdminSideBar />
      <br></br>
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
        <h2 style={{textAlign:'center'}}>Recent Booking Details</h2>
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Event Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Profile Image</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.bookingId}</td>
                <td>{booking.userId}</td>
                <td>{booking.userName}</td>
                <td>{booking.eventDate}</td>
                <td>{booking.amount}</td>
                <td>{booking.status}</td>
                <td>
                  <img src={booking.profileImage} alt={`Profile of ${booking.userName}`} className="profile-image" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div><br></br>
      <div className="payment_history">
        <h2>Payment History</h2>
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event ID</th>
              <th>User</th>
              <th>Transaction Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment, index) => (
              <tr key={index}>
                <td>{payment.eventName}</td>
                <td>{payment.eventId}</td>
                <td>{payment.user}</td>
                <td>{payment.transactionAmount}</td>
                <td>{payment.status}</td>
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
