



// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import "../assets/css/admodalform.css";

// const customStyles = {
//   content: {
    
//   },
// };

// const EditEventModalForm = ({ isOpen, onRequestClose, onEditEvent, editedEvent }) => {
//   const [eventType, setEventType] = useState('');
//   const [description, setDescription] = useState('');
//   const [id, setId] = useState('');
//   const [imgurl, setImgurl] = useState('');
//   const [charges, setCharges] = useState('');

//   useEffect(() => {
//     if (editedEvent) {
//       setEventType(editedEvent.eventType);
//       setDescription(editedEvent.description);
//       setId(editedEvent.id);
//       setImgurl(editedEvent.imgurl);
//       setCharges(editedEvent.charges);
//     }
//   }, [editedEvent]);

//   const handleEditEvent = () => {
//     const updatedEvent = {
//       eventType,
//       description,
//       id,
//       imgurl,
//       charges,
//     };

//     onEditEvent(updatedEvent);

//     setEventType('');
//     setDescription('');
//     setId('');
//     setImgurl('');
//     setCharges('');
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={customStyles}
//       contentLabel="Edit Event Form"
//       className="attractive-modal"
//     >
//       <div className="modal-header">
//         <h2>Edit Event</h2>
//         <button onClick={onRequestClose} className="close-button">
//           &times;
//         </button>
//       </div>
//       <div className="modal-body">
//         <label>
//           ID:
//           <input type="text" value={id} onChange={(e) => setId(e.target.value)} disabled />
//         </label>
//         <label>
//           Event Type:
//           <input type="text" value={eventType} onChange={(e) => setEventType(e.target.value)} />
//         </label>
//         <label>
//           Description:
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//         </label>
//         <label>
//           URL:
//           <input type="text" value={imgurl} onChange={(e) => setImgurl(e.target.value)} />
//         </label>
//         <label>
//           Charges per Person:
//           <input
//             type="number"
//             value={charges}
//             onChange={(e) => setCharges(e.target.value)}
//           />
//         </label>
//       </div>
//       <div className="admodal-footer">
//         <button onClick={handleEditEvent} className="edit-button">
//           Save Changes
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default EditEventModalForm;



// EditEventModalForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "../assets/css/admodalform.css";

const customStyles = {
  content: {
    
  },
};

const EditEventModalForm = ({ isOpen, onRequestClose, onEditEvent, editedEvent }) => {
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  const [imgurl, setImgurl] = useState('');
  const [charges, setCharges] = useState('');

  useEffect(() => {
    if (editedEvent) {
      setEventType(editedEvent.eventName);
      setDescription(editedEvent.eventDescription);
      setId(editedEvent.eventId);
      setImgurl(editedEvent.eventImageUrl);
      setCharges(editedEvent.eventCharges);
    }
  }, [editedEvent]);

  const handleEditEvent = () => {
    const updatedEvent = {
      eventType,
      description,
      id,
      imgurl,
      charges,
    };

    onEditEvent(updatedEvent);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Edit Event Form"
      className="attractive-modal"
    >
      <div className="modal-header">
        <h2>Edit Event</h2>
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
      </div>
      <div className="modal-body">
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} disabled />
        </label>
        <label>
          Event Type:
          <input type="text" value={eventType} onChange={(e) => setEventType(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          URL:
          <input type="text" value={imgurl} onChange={(e) => setImgurl(e.target.value)} />
        </label>
        <label>
          Charges per Person:
          <input
            type="number"
            value={charges}
            onChange={(e) => setCharges(e.target.value)}
          />
        </label>
      </div>
      <div className="admodal-footer">
        <button onClick={handleEditEvent} className="edit-button">
          Save Changes
        </button>
      </div>
    </Modal>
  );
};

export default EditEventModalForm;
