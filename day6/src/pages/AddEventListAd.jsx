

import React, { useState } from 'react';
import AdModalForm from '../components/addeventadmodal';
import EditEventModalForm from '../components/EditEventModalForm';
import AdminSideBar from '../components/AdminSide';
import '../assets/css/admodalform.css';

const AddEventList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [editedEvent, setEditedEvent] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openEditModal = (event) => {
    setEditedEvent(event);
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
    setEditedEvent(null);
  };

  const handleAddEvent = (event) => {
    setEvents([...events, event]);
    closeModal();
  };

  const handleEditEvent = (editedEvent) => {
    const updatedEvents = events.map((event) => (event.id === editedEvent.id ? editedEvent : event));
    setEvents(updatedEvents);
    closeEditModal();
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <AdminSideBar /><br></br>
      <h1 id='titad'style={{color:'#4e5db2'}}>Add New Events</h1>
      <br></br>
      <button onClick={openModal} id="buttonadmodal">
        Add Event
      </button>
      <AdModalForm isOpen={modalIsOpen} onRequestClose={closeModal} onAddEvent={handleAddEvent} />

      <div className="adeventlistedit">
        {events.map((event, index) => (
          <div key={index} className="event-card">
             <h2>Event ID: {event.id}</h2>
             <p>Event Type: {event.eventType}</p>
             <p>Description: {event.description}</p>
             <p>Total Participants: {event.totalParticipants}</p>
             <p>Total Package: {event.totalPackage}</p>
             <p>Charges: {event.charges}</p>
            <button onClick={() => openEditModal(event)}>Edit</button>
            <button onClick={() => handleDeleteEvent(index)}>Delete</button>
          </div>
        ))}
      </div>

      {editModalIsOpen && (
        <EditEventModalForm
          isOpen={editModalIsOpen}
          onRequestClose={closeEditModal}
          onEditEvent={handleEditEvent}
          editedEvent={editedEvent}
        />
      )}
    </div>
  );
};

export default AddEventList;

