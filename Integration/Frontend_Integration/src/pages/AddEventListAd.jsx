
// // // AddEventList.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import AdModalForm from '../components/addeventadmodal';
// // import EditEventModalForm from '../components/EditEventModalForm';
// // import AdminSideBar from '../components/AdminSide';

// // const AddEventList = () => {
// //   const [modalIsOpen, setModalIsOpen] = useState(false);
// //   const [editModalIsOpen, setEditModalIsOpen] = useState(false);
// //   const [events, setEvents] = useState([]);
// //   const [editedEvent, setEditedEvent] = useState(null);

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   const fetchEvents = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:8081/api/v1/addevents/all');
// //       setEvents(response.data);
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error('Error fetching events:', error);
// //     }
// //   };

// //   const getEvents = async () => {
// //     const response = await axios.get('http://localhost:8081/api/v1/addevents/all');
// //     return response.data;
// //   };

// //   const addEvent = async (event) => {
// //     try {
// //       const response = await axios.post('http://localhost:8081/api/v1/addevents', {
// //         eventId: event.id,
// //         eventName: event.eventType,
// //         eventDescription: event.description,
// //         eventImageUrl: event.imgurl,
// //         eventCharges: event.charges,
// //       });

// //       if (response) {
// //         console.log('Event added successfully', response.data);
// //         fetchEvents();
// //         closeModal();
// //       } else {
// //         console.log('Event addition failed');
// //       }
// //     } catch (error) {
// //       console.error('Error adding event:', error);
// //     }
// //   };

// //   const deleteEvent = async (eventId) => {
// //     try {
// //       await axios.delete(`http://localhost:8081/api/v1/addevents/${eventId}`);
// //       fetchEvents();
// //     } catch (error) {
// //       console.error('Error deleting event:', error);
// //     }
// //   };

// //   const openModal = () => {
// //     setModalIsOpen(true);
// //   };

// //   const closeModal = () => {
// //     setModalIsOpen(false);
// //   };

// //   const openEditModal = (event) => {
// //     setEditedEvent(event);
// //     setEditModalIsOpen(true);
// //   };

// //   const closeEditModal = () => {
// //     setEditModalIsOpen(false);
// //     setEditedEvent(null);
// //   };

// //   return (
// //     <div>
// //       <AdminSideBar />
// //       <br></br>
// //       <h1 id='titad' style={{ color: '#4e5db2' }}>Add New Events</h1>
// //       <br></br>
// //       <button onClick={openModal} id="buttonadmodal">
// //         Add Event
// //       </button>
// //       <AdModalForm isOpen={modalIsOpen} onRequestClose={closeModal} onAddEvent={addEvent} />

// //       <div className="adeventlistedit">
// //         {events.map((event, index) => (
// //           <div key={index} className="event-card">
// //             <h2>Event ID: {event.eventId}</h2>
// //             <p>Event Name: {event.eventName}</p>
// //             <p>Description: {event.eventDescription}</p>
// //             <p>Charges: {event.eventCharges}</p>
// //             <button onClick={() => openEditModal(event)}>Edit</button>
// //             <button onClick={() => deleteEvent(event.id)}>Delete</button>
// //           </div>
// //         ))}
// //       </div>

// //       {editModalIsOpen && (
// //   <EditEventModalForm
// //     isOpen={editModalIsOpen}
// //     onRequestClose={closeEditModal}
// //     editedEvent={editedEvent}
// //     onEditEvent={handleEditEvent} 
// //   />
// // )}
// //     </div>
// //   );
// // };

// // export default AddEventList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdModalForm from '../components/addeventadmodal';
// import EditEventModalForm from '../components/EditEventModalForm';
// import AdminSideBar from '../components/AdminSide';

// const AddEventList = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [editModalIsOpen, setEditModalIsOpen] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [editedEvent, setEditedEvent] = useState(null);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/api/v1/addevents/all');
//       setEvents(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const addEvent = async (event) => {
//     try {
//       const response = await axios.post('http://localhost:8081/api/v1/addevents', {
//         eventId: event.id,
//         eventName: event.eventType,
//         eventDescription: event.description,
//         eventImageUrl: event.imgurl,
//         eventCharges: event.charges,
//       });

//       if (response) {
//         console.log('Event added successfully', response.data);
//         fetchEvents();
//         closeModal();
//       } else {
//         console.log('Event addition failed');
//       }
//     } catch (error) {
//       console.error('Error adding event:', error);
//     }
//   };

//   const deleteEvent = async (eventId) => {
//     try {
//       await axios.delete(`http://localhost:8081/api/v1/addevents/${eventId}`);
//       fetchEvents();
//     } catch (error) {
//       console.error('Error deleting event:', error);
//     }
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const openEditModal = (event) => {
//     setEditedEvent(event);
//     setEditModalIsOpen(true);
//   };

//   const closeEditModal = () => {
//     setEditModalIsOpen(false);
//     setEditedEvent(null);
//   };

//   const handleEditEvent = async (event) => {
//     // Implement your edit event logic here
//     console.log('Edit event:', event);
//     // Make API call or update state as needed
//     // For example: await axios.put(`http://localhost:8081/api/v1/addevents/${event.id}`, updatedEventData);
//     // Then fetch updated events
//     fetchEvents();
//     closeEditModal();
//   };

//   return (
//     <div>
//       <AdminSideBar />
//       <br></br>
//       <h1 id='titad' style={{ color: '#4e5db2' }}>Add New Events</h1>
//       <br></br>
//       <button onClick={openModal} id="buttonadmodal">
//         Add Event
//       </button>
//       <AdModalForm isOpen={modalIsOpen} onRequestClose={closeModal} onAddEvent={addEvent} />

//       <div className="adeventlistedit">
//         {events.map((event, index) => (
//           <div key={index} className="event-card">
//             <h2>Event ID: {event.eventId}</h2>
//             <p>Event Name: {event.eventName}</p>
//             <p>Description: {event.eventDescription}</p>
//             <p>Charges: {event.eventCharges}</p>
//             <button onClick={() => openEditModal(event)}>Edit</button>
//             <button onClick={() => deleteEvent(event.id)}>Delete</button>
//           </div>
//         ))}
//       </div>

//       {editModalIsOpen && (
//         <EditEventModalForm
//           isOpen={editModalIsOpen}
//           onRequestClose={closeEditModal}
//           editedEvent={editedEvent}
//           onEditEvent={handleEditEvent}
//         />
//       )}
//     </div>
//   );
// };

// export default AddEventList;



// AddEventList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdModalForm from '../components/addeventadmodal';
import EditEventModalForm from '../components/EditEventModalForm';
import AdminSideBar from '../components/AdminSide';
import FooterUser from '../components/Footer';

const AddEventList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [editedEvent, setEditedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/addevents/all');
      setEvents(response.data);
      console.log("successfully information is displayed");
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const addEvent = async (event) => {
    try {
      const response = await axios.post('http://localhost:8081/api/v1/addevents', {
        eventId: event.id,
        eventName: event.eventType,
        eventDescription: event.description,
        eventImageUrl: event.imgurl,
        eventCharges: event.charges,
      });

      if (response) {
        console.log('Event added successfully');
        fetchEvents();
        closeModal();
      } else {
        console.log('Event addition failed');
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  // const deleteEvent = async (eventId) => {
  //   try {
  //     await axios.delete(`http://localhost:8081/api/v1/addevents/${eventId}`);
  //     fetchEvents();
  //   } catch (error) {
  //     console.error('Error deleting event:', error);
  //   }
  // };

  const deleteEvent = async (eventId) => {
    try {
      console.log('Deleting event with ID:', eventId);
      await axios.delete(`http://localhost:8081/api/v1/addevents/${eventId}`);
      console.log('Event deleted successfully');
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

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

  const handleEditEvent = async (event) => {
    try {
      const response = await axios.put(`http://localhost:8081/api/v1/addevents/${event.id}`, {
        eventName: event.eventType,
        eventDescription: event.description,
        eventImageUrl: event.imgurl,
        eventCharges: event.charges,
      });

      if (response) {
        console.log('Event updated successfully', response.data);
        fetchEvents();
        closeEditModal();
      } else {
        console.log('Event update failed');
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div>
      <AdminSideBar />
      <br></br>
      <h1 id='titad' style={{ color: '#4e5db2' }}>Add New Events</h1>
      <br></br>
      <button onClick={openModal} id="buttonadmodal">
        Add Event
      </button>
      <AdModalForm isOpen={modalIsOpen} onRequestClose={closeModal} onAddEvent={addEvent} />

      <div className="adeventlistedit">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h2>Event ID: {event.eventId}</h2>
            <p>Event Name: {event.eventName}</p>
            <p>Description: {event.eventDescription}</p>
            <p>Charges: {event.eventCharges}</p>
            <button onClick={() => openEditModal(event)}>Edit</button>
            <button onClick={() => deleteEvent(event.eventId)}>Delete</button>
          </div>
        ))}
      </div>

      {editModalIsOpen && (
        <EditEventModalForm
          isOpen={editModalIsOpen}
          onRequestClose={closeEditModal}
          editedEvent={editedEvent}
          onEditEvent={handleEditEvent}
        />
      )}
      <FooterUser/>
    </div>
  );
};

export default AddEventList;
