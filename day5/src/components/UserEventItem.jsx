import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../assets/css/UserEventItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const UserEventItem = ({ event, onBook }) => {
  const [modal, setModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    eventName: '',
    eventDate: '',
    location: '',
    description: '',
    headcount: 0,
    amount: 0,
  });

  const toggle = () => setModal(!modal);

  const handleBook = () => {
    console.log('handle book', bookingData);
    toggle(); // Close the modal after booking
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBookingData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <div className="event-item">
      <div className="event-detail">
        <span className="detail-label">Event ID:</span>
        <span className="detail-value">{event.id}</span>
      </div>
      <div className="event-detail">
        <span className="detail-label">Event Type:</span>
        <span className="detail-value">{event.type}</span>
      </div>
      <div className="event-detail">
        <span className="detail-label">Description:</span>
        <span className="detail-value">{event.description}</span>
      </div>
      <div className="event-detail">
        <span className="detail-label">Total Package:</span>
        <span className="detail-value">{event.totalPackage}</span>
      </div>
      <div className="event-detail">
        <span className="detail-label">Participants Count:</span>
        <span className="detail-value">{event.participantsCount}</span>
      </div>
      <div className="event-detail">
        <span className="detail-label">Charges:</span>
        <span className="detail-value">{event.charges}</span>
      </div>
      <div className="book-button">
        <button onClick={toggle}>Book</button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <h1 style={{ textAlign: 'center' }}>Book Event</h1>
        <ModalBody>
          <form>
            <label htmlFor="eventName">Event Name:</label>
            <input type="text" id="eventName" />
            <label htmlFor="eventDate">Event Date:</label>
            <input type="date" id="eventDate" />
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" />
            <label htmlFor="description">Description:</label>
            <textarea id="description"></textarea>
            <label htmlFor="headcount">Headcount:</label>
            <input type="number" id="headcount" />
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" />
          </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={handleBook}>Book</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserEventItem;


