
// // Inside your BookEvent component
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { Table, Modal, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
// import FooterUser from '../components/FooterUser';
// import SideBar from '../components/SideBar';
// import { selectUser } from '../assets/others/userSlice';
// import '../assets/css/bookevent.css';



// const BookEvent = () => {
//   const user = useSelector(selectUser);
//   const [bookedEvents, setBookedEvents] = useState([]);
//   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
//   const [paymentFormData, setPaymentFormData] = useState({
//     totalAmount: 100,
//     amountToPay: 50,
//     balanceAmount: 50,
//     paymentDate: new Date().toLocaleString(),
//     paymentMode: 'CARD',
//   });

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8081/api/bookings/byEmail/${user.email}`);
//         setBookedEvents(response.data);
//         // console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     if (user.email) {
//       fetchBookings();
//     }
//   }, [user.email]);

//   const handlePay = () => {
//     alert('Payment successful!');
//     setIsPaymentModalOpen(false);
//   };

//   const togglePaymentModal = () => {
//     setIsPaymentModalOpen(!isPaymentModalOpen);
//   };

//   return (
//     <>
//     <SideBar />
//     <br></br>
//       <div className="my-booking">
//         <h1 style={{ color: '#4e5db2' }}>My Bookings</h1>
//         <Table>
//           <thead>
//             <tr>
//               <th>Event Name</th>
//               <th>Event Date</th>
//               <th>Location</th>
//               <th>Company</th>
//               <th>Description</th>
//               <th>Headcount</th>
//               <th>Amount</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookedEvents.map((event, index) => (
//               <tr key={index}>
//                 <td>{event.beventName}</td>
//                 <td>{event.beventDate}</td>
//                 <td>{event.blocation}</td>
//                 <td>{event.buserName}</td>
//                 <td>{event.bdescription}</td>
//                 <td>{event.bheadCount}</td>
//                 <td>{event.btotal}</td>
//                 <td>
//                   <FontAwesomeIcon icon={faMoneyBill} onClick={togglePaymentModal} /> Pay <p> </p>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <Modal isOpen={isPaymentModalOpen} toggle={togglePaymentModal}>
//         <ModalBody>
//           <h3>Payment Details</h3>
//           <Form>
//             <FormGroup>
//               <Label>Total Amount</Label>
//               <Input type="text" value={paymentFormData.totalAmount} readOnly />
//             </FormGroup>
//             <FormGroup>
//               <Label>Amount to Pay</Label>
//               <Input type="text" value={paymentFormData.amountToPay} />
//             </FormGroup>
//             <FormGroup>
//               <Label>Balance Amount</Label>
//               <Input type="text" value={paymentFormData.balanceAmount} />
//             </FormGroup>
//             <FormGroup>
//               <Label>Payment Date</Label>
//               <Input type="text" value={paymentFormData.paymentDate} readOnly />
//             </FormGroup>
//             <FormGroup>
//               <Label>Mode of Payment</Label>
//               <Input type="select" value={paymentFormData.paymentMode} readOnly>
//                 <option value="CARD">Card</option>
//                 <option value="CASH">Cash</option>
//               </Input>
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={handlePay}>
//             Pay Amount
//           </Button>
//         </ModalFooter>
//         <ModalFooter>
//           <Button color="secondary" onClick={togglePaymentModal}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//       <FooterUser/>
//     </>
//   );
// };

// export default BookEvent;


// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { Table, Modal, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
// import FooterUser from '../components/FooterUser';
// import SideBar from '../components/SideBar';
// import { selectUser } from '../assets/others/userSlice';
// import '../assets/css/bookevent.css';

// const BookEvent = () => {
//   const user = useSelector(selectUser);
//   const [bookedEvents, setBookedEvents] = useState([]);
//   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [paymentFormData, setPaymentFormData] = useState({
//     totalAmount: 0,
//     amountToPay: 0,
//     balanceAmount: 0,
//     paymentDate: new Date().toLocaleString(),
//     paymentMode: 'CARD',
//   });

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8081/api/bookings/byEmail/${user.email}`);
//         setBookedEvents(response.data);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     if (user.email) {
//       fetchBookings();
//     }
//   }, [user.email]);

//   const togglePaymentModal = (event) => {
//     setSelectedEvent(event);
//     setPaymentFormData({
//       ...paymentFormData,
//       totalAmount: event ? event.btotal : 0,
//       amountToPay: event ? event.btotal : 0,
//       balanceAmount: 0,
//     });
//     setIsPaymentModalOpen(!isPaymentModalOpen);
//   };

//   const handlePay = async () => {
//     try {
//       const response = await axios.post('http://localhost:8081/api/v1/paymentdetails', {
//         pemail: user.email,
//         ppayDate: new Date().toLocaleString(),
//         peventName: selectedEvent ? selectedEvent.beventName : '',
//         ptotal: paymentFormData.totalAmount,
//         pmode: paymentFormData.paymentMode,
//         pstatus: true,
//       });

//       console.log(response.data);
//       alert('Payment successful!');
//       setIsPaymentModalOpen(false);
//     } catch (error) {
//       console.error('Error making payment:', error);
//       alert('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <>
//       <SideBar />
//       <br />
//       <div className="my-booking">
//         <h1 style={{ color: '#4e5db2' }}>My Bookings</h1>
//         <Table>
//           <thead>
//             <tr>
//               <th>Event Name</th>
//               <th>Event Date</th>
//               <th>Location</th>
//               <th>Company</th>
//               <th>Description</th>
//               <th>Headcount</th>
//               <th>Amount</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookedEvents.map((event, index) => (
//               <tr key={index}>
//                 <td>{event.beventName}</td>
//                 <td>{event.beventDate}</td>
//                 <td>{event.blocation}</td>
//                 <td>{event.buserName}</td>
//                 <td>{event.bdescription}</td>
//                 <td>{event.bheadCount}</td>
//                 <td>{event.btotal}</td>
//                 <td>
//                   <FontAwesomeIcon icon={faMoneyBill} onClick={() => togglePaymentModal(event)} /> Pay
//                   <p> </p>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <Modal isOpen={isPaymentModalOpen} toggle={() => togglePaymentModal(null)}>
//         <ModalBody>
//           <h3>Payment Details</h3>
//           <Form>
//             <FormGroup>
//               <Label>Total Amount</Label>
//               <Input type="text" value={paymentFormData.totalAmount} readOnly />
//             </FormGroup>
//             <FormGroup>
//               <Label>Amount to Pay</Label>
//               <Input
//                 type="text"
//                 value={paymentFormData.amountToPay}
//                 onChange={(e) =>
//                   setPaymentFormData({
//                     ...paymentFormData,
//                     amountToPay: e.target.value,
//                     balanceAmount: paymentFormData.totalAmount - e.target.value,
//                   })
//                 }
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label>Balance Amount</Label>
//               <Input type="text" value={paymentFormData.balanceAmount} readOnly />
//             </FormGroup>
//             <FormGroup>
//               <Label>Payment Date</Label>
//               <Input type="text" value={paymentFormData.paymentDate} readOnly />
//             </FormGroup>
//             <FormGroup>
//               <Label>Mode of Payment</Label>
//               <Input
//                 type="select"
//                 value={paymentFormData.paymentMode}
//                 onChange={(e) => setPaymentFormData({ ...paymentFormData, paymentMode: e.target.value })}
//               >
//                 <option value="CARD">Card</option>
//                 <option value="CASH">Cash</option>
//               </Input>
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={handlePay}>
//             Pay Amount
//           </Button>
//         </ModalFooter>
//         <ModalFooter>
//           <Button color="secondary" onClick={() => togglePaymentModal(null)}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//       <FooterUser />
//     </>
//   );
// };

// export default BookEvent;



// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { Table, Modal, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoneyBill, faTrash } from '@fortawesome/free-solid-svg-icons';
// import FooterUser from '../components/FooterUser';
// import SideBar from '../components/SideBar';
// import { selectUser } from '../assets/others/userSlice';
// import '../assets/css/bookevent.css';

// const BookEvent = () => {
//   const user = useSelector(selectUser);
//   const [bookedEvents, setBookedEvents] = useState([]);
//   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [paymentFormData, setPaymentFormData] = useState({
//     totalAmount: 0,
//     amountToPay: 0,
//     balanceAmount: 0,
//     paymentDate: new Date().toLocaleString(),
//     paymentMode: 'CARD',
//   });

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8081/api/bookings/byEmail/${user.email}`);
//         setBookedEvents(response.data);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     if (user.email) {
//       fetchBookings();
//     }
//   }, [user.email]);

//   const togglePaymentModal = (event) => {
//     setSelectedEvent(event);
//     setPaymentFormData({
//       ...paymentFormData,
//       totalAmount: event ? event.btotal : 0,
//       amountToPay: event ? event.btotal : 0,
//       balanceAmount: 0,
//     });
//     setIsPaymentModalOpen(!isPaymentModalOpen);
//   };

//   const handlePay = async () => {
//     try {
//       const response = await axios.post('http://localhost:8081/api/v1/paymentdetails', {
//         pemail: user.email,
//         ppayDate: new Date().toLocaleString(),
//         peventName: selectedEvent ? selectedEvent.beventName : '',
//         ptotal: paymentFormData.totalAmount,
//         pmode: paymentFormData.paymentMode,
//         pstatus: true,
//       });

//       console.log(response.data);
//       alert('Payment successful!');
//       setIsPaymentModalOpen(false);
//       // Refresh booked events after payment
//       fetchBookings();
//     } catch (error) {
//       console.error('Error making payment:', error);
//       alert('Payment failed. Please try again.');
//     }
//   };

//   const handleDelete = async (e, eventId) => {
//     e.preventDefault();
//     try {
//       const response = await axios.delete(`http://localhost:8081/api/bookings/${eventId}`);
//       console.log(response.data);
//       alert('Booking deleted successfully!');
//       // Refresh booked events after deletion
//       fetchBookings();
//     } catch (error) {
//       console.error('Error deleting booking:', error);
//       alert('Failed to delete booking. Please try again.');
//     } 
//   };

//   return (
//     <>
//       <SideBar />
//       <br />
//       <div className="my-booking">
//         <h1 style={{ color: '#4e5db2' }}>My Bookings</h1>
//         <Table>
//           <thead>
//             <tr>
//               <th>Event Name</th>
//               <th>Event Date</th>
//               <th>Location</th>
//               <th>User Name</th>
//               <th>Description</th>
//               <th>Headcount</th>
//               <th>Amount</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookedEvents.map((event, index) => (
//               <tr key={index}>
//                 <td>{event.beventName}</td>
//                 <td>{event.beventDate}</td>
//                 <td>{event.blocation}</td>
//                 <td>{event.buserName}</td>
//                 <td>{event.bdescription}</td>
//                 <td>{event.bheadCount}</td>
//                 <td>{event.btotal}</td>
//                 <td>
//                   <FontAwesomeIcon icon={faMoneyBill} onClick={() => togglePaymentModal(event)} /> Pay
//                   <p> </p>
//                   <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(event.bookId)} /> Delete
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <Modal isOpen={isPaymentModalOpen} toggle={() => togglePaymentModal(null)}>
//         <ModalBody>
//           <h3>Payment Details</h3>
//           <Form>
//             <FormGroup>
//               <Label>Total Amount</Label>
//               <Input type="text" value={paymentFormData.totalAmount} readOnly />
//             </FormGroup>
//             <FormGroup>
//               <Label>Amount to Pay</Label>
//               <Input
//                 type="text"
//                 value={paymentFormData.amountToPay}
//                 onChange={(e) =>
//                   setPaymentFormData({
//                     ...paymentFormData,
//                     amountToPay: e.target.value,
//                     balanceAmount: paymentFormData.totalAmount - e.target.value,
//                   })
//                 }
//               />
//             </FormGroup>
//             {/* <FormGroup>
//               <Label>Balance Amount</Label>
//               <Input type="text" value={paymentFormData.balanceAmount} readOnly />
//             </FormGroup> */}
//             <FormGroup>
//               <Label>Payment Date</Label>
//               <Input type="text" value={paymentFormData.paymentDate} readOnly />
//             </FormGroup>
//             <FormGroup>
//               <Label>Mode of Payment</Label>
//               <Input
//                 type="select"
//                 value={paymentFormData.paymentMode}
//                 onChange={(e) => setPaymentFormData({ ...paymentFormData, paymentMode: e.target.value })}
//               >
//                 <option value="CARD">Card</option>
//                 <option value="CASH">Cash</option>
//               </Input>
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={handlePay}>
//             Pay Amount
//           </Button>
//         </ModalFooter>
//         <ModalFooter>
//           <Button color="secondary" onClick={() => togglePaymentModal(null)}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//       <FooterUser />
//     </>
//   );
// };

// export default BookEvent;



import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Table, Modal, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faTrash } from '@fortawesome/free-solid-svg-icons';
import FooterUser from '../components/FooterUser';
import SideBar from '../components/SideBar';
import { selectUser } from '../assets/others/userSlice';
import '../assets/css/bookevent.css';

const BookEvent = () => {
  const user = useSelector(selectUser);
  const [bookedEvents, setBookedEvents] = useState([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [paymentFormData, setPaymentFormData] = useState({
    totalAmount: 0,
    amountToPay: 0,
    balanceAmount: 0,
    paymentDate: new Date().toLocaleString(),
    paymentMode: 'CARD',
  });
  const [paymentStatus, setPaymentStatus] = useState(false);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/bookings/byEmail/${user.email}`);
      setBookedEvents(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    if (user.email) {
      fetchBookings();
    }
  }, [user.email]);

  const togglePaymentModal = (event) => {
    setSelectedEvent(event);
    setPaymentFormData({
      ...paymentFormData,
      totalAmount: event ? event.btotal : 0,
      amountToPay: event ? event.btotal : 0,
      balanceAmount: 0,
    });
    setIsPaymentModalOpen(!isPaymentModalOpen);
  };

  const handlePay = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/v1/paymentdetails', {
        pemail: user.email,
        ppayDate: new Date().toLocaleString(),
        peventName: selectedEvent ? selectedEvent.beventName : '',
        ptotal: paymentFormData.totalAmount,
        pmode: paymentFormData.paymentMode,
        pstatus: true,
      });

      console.log(response.data);
      alert('Payment successful!');
      setIsPaymentModalOpen(false);
      setPaymentStatus(true);
      // Refresh booked events after payment
      fetchBookings();
    } catch (error) {
      console.error('Error making payment:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const handleDelete = async (e, eventId) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8081/api/bookings/${eventId}`);
      console.log(response.data);
      alert('Booking deleted successfully!');
      // Refresh booked events after deletion
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Failed to delete booking. Please try again.');
    } 
  };

  return (
    <>
      <SideBar />
      <br />
      <div className="my-booking">
        <h1 style={{ color: '#4e5db2' }}>My Bookings</h1>
        <Table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Location</th>
              <th>User Name</th>
              <th>Description</th>
              <th>Headcount</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookedEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.beventName}</td>
                <td>{event.beventDate}</td>
                <td>{event.blocation}</td>
                <td>{event.buserName}</td>
                <td>{event.bdescription}</td>
                <td>{event.bheadCount}</td>
                <td>{event.btotal}</td>
                <td>
                  {paymentStatus ? (
                    'Paid'
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faMoneyBill} onClick={() => togglePaymentModal(event)} /> Pay
                      <p> </p>
                      <FontAwesomeIcon icon={faTrash} onClick={(e) => handleDelete(e, event.bookId)} /> Delete
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal isOpen={isPaymentModalOpen} toggle={() => togglePaymentModal(null)}>
        <ModalBody>
          <h3>Payment Details</h3>
          <Form>
            <FormGroup>
              <Label>Total Amount</Label>
              <Input type="text" value={paymentFormData.totalAmount} readOnly />
            </FormGroup>
            <FormGroup>
              <Label>Amount to Pay</Label>
              <Input
                type="text"
                value={paymentFormData.amountToPay}
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    amountToPay: e.target.value,
                    balanceAmount: paymentFormData.totalAmount - e.target.value,
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label>Payment Date</Label>
              <Input type="text" value={paymentFormData.paymentDate} readOnly />
            </FormGroup>
            <FormGroup>
              <Label>Mode of Payment</Label>
              <Input
                type="select"
                value={paymentFormData.paymentMode}
                onChange={(e) => setPaymentFormData({ ...paymentFormData, paymentMode: e.target.value })}
              >
                <option value="CARD">Card</option>
                <option value="CASH">Cash</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlePay}>
            Pay Amount
          </Button>
        </ModalFooter>
        <ModalFooter>
          <Button color="secondary" onClick={() => togglePaymentModal(null)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <FooterUser />
    </>
  );
};

export default BookEvent;
