
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Import the necessary Redux hook
import '../assets/css/EventCard.css';
import StarRating from './Rating';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { selectUser } from '../assets/others/userSlice';

const EventCard = () => {
  // const events = useSelector((state) => state.events); // Assuming you have events stored in Redux state
  const user = useSelector(selectUser); // Assuming you have user details stored in Redux state
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // Fetch events from your API
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/v1/addevents/all');
        // Dispatch an action to update Redux state with events
        // dispatch(updateEvents(response.data));
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const toggle = () => setModal(!modal);

  const handleBook = (event) => {
    setSelectedEvent(event);
    toggle();
  };

  const onHandleBook = async () => {
    const eventName = selectedEvent.eventName; // Get event name from the selected card
    const eventId = selectedEvent.eventId; // Get event name from the selected card
    const useremail = user.email; // Get user email from Redux state
    const username = user.username; // Get username from Redux state
    const eventDate = document.getElementById('eventDate').value;
    const bookingDate = document.getElementById('bookingDate').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const headcount = document.getElementById('headcount').value;
    const charges = selectedEvent.eventCharges;
    
    // Calculate total based on headcount and charges
    const total = parseFloat(headcount) * parseFloat(charges);

    try {
      const response = await axios.post('http://localhost:8081/api/bookings', {
        beventName: eventName,
        bEventId:eventId,
        bemail: useremail,
        buserName: username,
        beventDate: eventDate,
        bbookingdate: bookingDate,
        blocation: location,
        bdescription: description,
        bheadCount: parseInt(headcount),
        btotal: total,
      });

      console.log('Booking response:', response.data);
      toggle();
    } catch (error) {
      console.error('Error booking event:', error);
    }
  };

  return (
    <div className="card-container">
      {events.map((event) => (
        <div key={event.id} className="card">
          <div className="card-inner">
            <div className="card-front">
              <center>
                <br />
                <img src={event.eventImageUrl} alt="Event" id="cardimg" />
              </center>
              <div className='rate'>
                <StarRating rating={event.rating} />
              </div>
              <div>
                <center><h3 style={{padding:'10px',fontSize:'20px',color:'#4e5db2'}}>{event.eventDescription}</h3></center>
              </div>

            </div>
            <div className="card-back">
              <>
                <p style={{padding:'10px',fontSize:'30px',color:'#4e5db2'}}>Event ID: {event.eventId}</p>
                <p style={{padding:'10px',fontSize:'20px'}}>Type: {event.eventName}</p>
                <p style={{padding:'10px',fontSize:'20px'}}>Description: {event.eventDescription}</p>
                <p style={{padding:'10px',fontSize:'20px'}}>Charges: {event.eventCharges}</p><br></br>
              </>
              <button style={{padding:'10px',color:'white',backgroundColor:'green'}} className='bbutton' onClick={() => handleBook(event)}>Book</button>
            </div>
          </div>
        </div>
      ))}
      {selectedEvent && (
        <Modal isOpen={modal} toggle={toggle}>
          <h1 style={{ textAlign: 'center' }}>Book Event</h1>
          <ModalBody className='modalbody'>
            <form>
              {/* <label htmlFor="eventName">Event Name:</label>
              <input type="text" id="eventName"/>
              <label htmlFor="useremail">Email:</label>
              <input type="email" id="useremail" />
              <label htmlFor="username">UserName:</label>
              <input type="text" id="username" /> */}
              <label htmlFor="eventDate">Event Date:</label>
              <input type="date" id="eventDate" />
              <label htmlFor="bookingDate">Booking Date:</label>
              <input type="date" id="bookingDate" />
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" />
              <label htmlFor="description">Description:</label>
              <textarea id="description"></textarea>
              <label htmlFor="headcount">Headcount:</label>
              <input type="number" id="headcount" />
              {/* <label htmlFor="amount">Amount:</label>
              <input type="number" id="amount" /> */}
            </form>
          </ModalBody>
          <ModalFooter>
            <button onClick={onHandleBook}>Book</button><br></br><br></br><br></br>
            <button onClick={toggle}>Cancel</button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export default EventCard;