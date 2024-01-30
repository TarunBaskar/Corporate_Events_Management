// import React, { useState } from 'react';
// import { Table } from 'reactstrap';
// import '../assets/css/bookevent.css';
// import SideBar from '../components/SideBar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

// const BookEvent = () => {
//   const [bookedEvents, setBookedEvents] = useState([
//     {
//       eventName: 'Event 1',
//       eventDate: '2022-01-01',
//       location: 'Location 1',
//       description: 'Description 1',
//       headcount: 10,
//       amount: 100
//     },
//     {
//       eventName: 'Event 4',
//       eventDate: '2022-01-01',
//       location: 'Location 1',
//       description: 'Description 1',
//       headcount: 10,
//       amount: 100
//     },
//     {
//       eventName: 'Event 6',
//       eventDate: '2022-01-01',
//       location: 'Location 1',
//       description: 'Description 1',
//       headcount: 10,
//       amount: 100
//     },
//     {
//       eventName: 'Event 5',
//       eventDate: '2022-01-01',
//       location: 'Location 1',
//       description: 'Description 1',
//       headcount: 10,
//       amount: 100
//     },
//     {
//       eventName: 'Event 2',
//       eventDate: '2022-02-02',
//       location: 'Location 2',
//       description: 'Description 2',
//       headcount: 20,
//       amount: 200
//     }
//   ]);

//   const handleBook = (bookingData) => {
//     setBookedEvents((prevEvents) => [...prevEvents, bookingData]);
//   };

//   return (
//     <>
//       <SideBar />
//       <div className="my-booking">
//         <h1>My Bookings</h1>
//         <Table>
//           <thead>
//             <tr>
//               <th>Event Name</th>
//               <th>Event Date</th>
//               <th>Location</th>
//               <th>Description</th>
//               <th>Headcount</th>
//               <th>Amount</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookedEvents.map((event, index) => (
//               <tr key={index}>
//                 <td>{event.eventName}</td>
//                 <td>{event.eventDate}</td>
//                 <td>{event.location}</td>
//                 <td>{event.description}</td>
//                 <td>{event.headcount}</td>
//                 <td>{event.amount}</td>
//                 <td>
//                   <FontAwesomeIcon icon={faMoneyBill} /> Pay  <p>        </p>
//                   <FontAwesomeIcon icon={faEdit} /> Edit
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </>
//   );
// };

// export default BookEvent;




// import React, { useState } from 'react';
// import { Table, Modal, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import '../assets/css/bookevent.css';
// import SideBar from '../components/SideBar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

// const BookEvent = () => {
//   const [bookedEvents, setBookedEvents] = useState([
//     // ... (your initial booked events)
//         {
//       eventName: 'Event 1',
//       eventDate: '2022-01-01',
//       location: 'Location 1',
//       description: 'Description 1',
//       headcount: 10,
//       amount: 100
//     },
//     {
//       eventName: 'Event 4',
//       eventDate: '2022-01-01',
//       location: 'Location 1',
//       description: 'Description 1',
//       headcount: 10,
//       amount: 100
//     },
//     {
//       eventName: 'Event 6',
//       eventDate: '2022-01-01',
//       location: 'Location 1',
//       description: 'Description 1',
//       headcount: 10,
//       amount: 100
//     },
//     {
//       eventName: 'Event 5',
//       eventDate: '2022-01-01',
//       location: 'Location 1',
//       description: 'Description 1',
//       headcount: 10,
//       amount: 100
//     },
//     {
//       eventName: 'Event 2',
//       eventDate: '2022-02-02',
//       location: 'Location 2',
//       description: 'Description 2',
//       headcount: 20,
//       amount: 200
//     }
//   ]);

//   const [paymentModalOpen, setPaymentModalOpen] = useState(false);
//   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

//   const handleBook = (bookingData) => {
//     setBookedEvents((prevEvents) => [...prevEvents, bookingData]);
//   };

//   const togglePaymentModal = () => {
//     setPaymentModalOpen(!paymentModalOpen);
//   };

//   const [paymentFormData, setPaymentFormData] = useState({
//     totalAmount: 0,
//     amountToPay: 0,
//     balanceAmount: 0,
//     paymentDate: new Date().toLocaleString(),
//     paymentMode: 'CARD', // Default payment mode
//     // Add other payment form fields here
//   });

//   const handlePay = () => {
//     // Handle payment logic here
//     // You can integrate with a payment gateway or simulate the payment process
//     // For now, let's just update the state to demonstrate
//     alert('Payment successful!');
//     setIsPaymentModalOpen(false);
//   };

//   const togglePaymentModal = () => {
//     setIsPaymentModalOpen(!isPaymentModalOpen);
//   };


//   return (
//     <>
//       <SideBar />
//       <div className="my-booking">
//         <h1>My Bookings</h1>
//         <Table>
//           <thead>
//             <tr>
//               <th>Event Name</th>
//               <th>Event Date</th>
//               <th>Location</th>
//               <th>Description</th>
//               <th>Headcount</th>
//               <th>Amount</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookedEvents.map((event, index) => (
//               <tr key={index}>
//                 <td>{event.eventName}</td>
//                 <td>{event.eventDate}</td>
//                 <td>{event.location}</td>
//                 <td>{event.description}</td>
//                 <td>{event.headcount}</td>
//                 <td>{event.amount}</td>
//                 <td>
//                   <FontAwesomeIcon icon={faMoneyBill} onClick={togglePaymentModal} /> Pay  <p>        </p>
//                   <FontAwesomeIcon icon={faEdit} /> Edit
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* Payment Modal */}
//       <Modal isOpen={isPaymentModalOpen} toggle={togglePaymentModal}>
//         <ModalBody>
//           <h5>Payment Details</h5>
//           <Form>
//             <FormGroup>
//               <Label>Total Amount</Label>
//               <Input type="text" value={paymentFormData.totalAmount} readOnly />
//             </FormGroup>
//             <FormGroup>
//               <Label>Amount to Pay</Label>
//               <Input type="text" value={paymentFormData.amountToPay} readOnly />
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
//               <Input type="select" value={paymentFormData.paymentMode} readOnly>
//                 <option value="CARD">Card</option>
//                 <option value="CASH">Cash</option>
//                 {/* Add other payment modes as needed */}
//               </Input>
//             </FormGroup>
//             {/* Add other payment form fields here */}
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={handlePay}>Pay 40% Amount</Button>
//           <Button color="secondary" onClick={togglePaymentModal}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     </>
//   );
// };

// export default BookEvent;


import React, { useState } from 'react';
import { Table, Modal, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/css/bookevent.css';
import SideBar from '../components/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom';

const BookEvent = () => {
  const [bookedEvents, setBookedEvents] = useState([
    // ... (your initial booked events)
    {
      eventName: 'Event 1',
      eventDate: '2022-01-01',
      location: 'Location 1',
      description: 'Description 1',
      headcount: 10,
      amount: 100
    },
    {
      eventName: 'Event 4',
      eventDate: '2022-01-01',
      location: 'Location 1',
      description: 'Description 1',
      headcount: 10,
      amount: 100
    },
    {
      eventName: 'Event 6',
      eventDate: '2022-01-01',
      location: 'Location 1',
      description: 'Description 1',
      headcount: 10,
      amount: 100
    },
    {
      eventName: 'Event 5',
      eventDate: '2022-01-01',
      location: 'Location 1',
      description: 'Description 1',
      headcount: 10,
      amount: 100
    },
    {
      eventName: 'Event 2',
      eventDate: '2022-02-02',
      location: 'Location 2',
      description: 'Description 2',
      headcount: 20,
      amount: 200
    }
  ]);

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  const [paymentFormData, setPaymentFormData] = useState({
    totalAmount: 100,
    amountToPay: 50,
    balanceAmount: 50,
    paymentDate: new Date().toLocaleString(),
    paymentMode: 'CARD', 
   
  });

  const handleBook = (bookingData) => {
    setBookedEvents((prevEvents) => [...prevEvents, bookingData]);
  };

  const handlePay = () => {

    alert('Payment successful!');
    setIsPaymentModalOpen(false);
    
  };

  const togglePaymentModal = () => {
    setIsPaymentModalOpen(!isPaymentModalOpen);
  };

  return (
    <>
      <SideBar />
      <div className="my-booking">
        <h1>My Bookings</h1>
        <Table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Location</th>
              <th>Description</th>
              <th>Headcount</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookedEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.eventName}</td>
                <td>{event.eventDate}</td>
                <td>{event.location}</td>
                <td>{event.description}</td>
                <td>{event.headcount}</td>
                <td>{event.amount}</td>
                <td>
                  <FontAwesomeIcon icon={faMoneyBill} onClick={togglePaymentModal} /> Pay  <p>        </p>
                  {/* <FontAwesomeIcon icon={faEdit} /> Edit */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Payment Modal */}
      <Modal isOpen={isPaymentModalOpen} toggle={togglePaymentModal}>
        <ModalBody>
          <h5>Payment Details</h5>
          <Form>
            <FormGroup>
              <Label>Total Amount</Label>
              <Input type="text" value={paymentFormData.totalAmount} readOnly />
            </FormGroup>
            <FormGroup>
              <Label>Amount to Pay</Label>
              <Input type="text" value={paymentFormData.amountToPay} readOnly />
            </FormGroup>
            <FormGroup>
              <Label>Balance Amount</Label>
              <Input type="text" value={paymentFormData.balanceAmount} readOnly />
            </FormGroup>
            <FormGroup>
              <Label>Payment Date</Label>
              <Input type="text" value={paymentFormData.paymentDate} readOnly />
            </FormGroup>
            <FormGroup>
              <Label>Mode of Payment</Label>
              <Input type="select" value={paymentFormData.paymentMode} readOnly>
                <option value="CARD">Card</option>
                <option value="CASH">Cash</option>
                {/* Add other payment modes as needed */}
              </Input>
            </FormGroup>
            {/* Add other payment form fields here */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlePay} >Pay Amount</Button>
          </ModalFooter>
          <ModalFooter> 
          <Button color="secondary" onClick={togglePaymentModal} >Cancel</Button>
          </ModalFooter>
      </Modal>
    </>
  );
};

export default BookEvent;

