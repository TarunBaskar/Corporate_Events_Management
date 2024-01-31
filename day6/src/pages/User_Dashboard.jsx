    import Sidebar from "../components/SideBar";
    // import PaymentList from "./UserPayment";
    import "../assets/css/Userdb.css";       
import FooterUser from "../components/FooterUser";
   
   

function UserDashboard() {

  

        const bookings = [
            {
              eventName: 'Conference Meeting',
              eventId: 'E123456',
              location: 'Coimbatore',
              amount: '$500',
              status: 'Confirmed',
              date: '21.10.2022'
            },
            {
              eventName: 'Conference Meeting',
              eventId: 'E789012',
              location: 'Conference Center',
              amount: '$300',
              status: 'Pending',
              date: '01.01.2023'
            },
            {
              eventName: 'Conference Meeting',
              eventId: 'E789012',
              location: 'Conference Center',
              amount: '$300',
              status: 'Pending',
              date: '16.12.2023'
            },
            {
              eventName: 'Conference Meeting',
              eventId: 'E789012',
              location: 'Conference Center',
              amount: '$300',
              status: 'Pending',
              date: '21.11.2024'
            },
            {
              eventName: 'Conference Meeting',
              eventId: 'E789012',
              location: 'Conference Center',
              amount: '$300',
              status: 'Pending',
              date: '29.03.2024'
            },
            {
              eventName: 'Conference Meeting',
              eventId: 'E789012',
              location: 'Conference Center',
              amount: '$300',
              status: 'Pending',
              date: '12.10.2024'
            },
            
          ];

          const paymentHistory = [
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
            
          ];
         
        
        
          return (
            <>
              <Sidebar />
          
              <div className="udb_part1">
                <div className="titleudb" style={{ textAlign: 'center', color: '#4e5db2' }}>
                  <br></br>
                  <h1>User DashBoard Details</h1>
                </div>
                <div className="widgetudb">
                    
                    <div className="widget-box">
                    <h2>Total Payment</h2>
                    <p>$2,500</p>
                    </div>

                    
                    <div className="widget-box">
                    <h2>Total Events Attended</h2>
                    <p>5</p>
                    </div>

                    
                    <div className="widget-box">
                    <h2>Total Events Pending</h2>
                    <p>3</p>
                    </div>

                    
                    <div className="widget-box">
                    <h2>Score</h2>
                    <p>80</p>
                    </div>
      {/* </div>         */}
                </div>
              </div><br></br><br></br>
              <div className="upcommingudp">
                <h2 style={{ textAlign: 'center' }}>Upcoming Events</h2>
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
                      <p>Date: January 1, 2023</p>
                      <p>Price: $500</p>
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
                      <p>Date: February 15, 2023</p>
                      <p>Price: $300</p>
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
                      <p>Date: February 15, 2023</p>
                      <p>Price: $300</p>
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
                      <p>Date: February 15, 2023</p>
                      <p>Price: $300</p>
                    </div>
                  </div>
          
                </div>
              </div>
              <div className="mybookudb">
                <h2 style={{ textAlign: 'center' }}>My Bookings</h2>
                <table className="booking-table">
                  <thead>
                    <tr>
                      <th>Event Name</th>
                      <th>Event ID</th>
                      <th>Location</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking, index) => (
                      <tr key={index}>
                        <td>{booking.eventName}</td>
                        <td>{booking.eventId}</td>
                        <td>{booking.location}</td>
                        <td>{booking.amount}</td>
                        <td>{booking.status}</td>
                        <td>{booking.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div><br></br>
       {/* <div>
        <h2 style={{ textAlign: 'center' }}>Step-by-Step Progress</h2>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div> */}
              <div className="paymentudb">
                <h2 style={{ textAlign: 'center',color:'#4e5db2' }}>Payment History</h2>
                <table className="payment-table">
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
                </table>
              </div>
              <FooterUser/>
            </>
          );
          }
          
          export default UserDashboard;
