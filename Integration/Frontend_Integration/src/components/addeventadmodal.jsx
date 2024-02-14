// // ModalForm.jsx
// import React, { useState } from 'react';
// import Modal from 'react-modal';
// const customStyles = {
//   content: {
//     // top: '50%',
//     // left: '50%',
//     // right: 'auto',
//     // bottom: 'auto',
//     // marginRight: '-50%',
//     // transform: 'translate(-50%, -50%)',
//   },
// };

// const AdModalForm = ({ isOpen, onRequestClose, onAddEvent }) => {
//   const [eventType, setEventType] = useState('');
//   const [description, setDescription] = useState('');
//   const [id, setId] = useState('');
//   const [imgurl, setImgurl] = useState('');
//   // const [totalPackage, setTotalPackage] = useState('');
//   const [charges, setCharges] = useState('');

//   const handleAddEvent = () => {
//     // Validate input fields here if needed
//     const event = {
//       eventType,
//       description,
//       id,
//       imgurl,
//       // totalPackage,
//       // participantCount,
//       charges,
//     };

//     onAddEvent(event);

//     // Clear form fields
//     setEventType('');
//     setDescription('');
//     setId('');
//     setImgurl('');
//     // setTotalPackage('');
//     setCharges('');
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={customStyles}
//       contentLabel="Event Form"
//       className="attractive-modal"
//     >
//       <div className="modal-header">
//         <h2>Add Event</h2>
//         <button onClick={onRequestClose} className="close-button">
//           &times;
//         </button>
//       </div>
//       <div className="modal-body">
//       <label>
//           ID:
//           <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
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
//         {/* <label>
//           Total Package:
//           <input
//             type="number"
//             value={totalPackage}
//             onChange={(e) => setTotalPackage(parseFloat(e.target.value))}
//           />
//         </label> */}
//         <label>
//           Charges per Person:
//           <input
//             type="number"
//             value={charges}
//             onChange={(e) => setParticipantCount(e.target.value)}
//           />
//         </label>
//       </div>
//       <div className="admodal-footer">
//         <button onClick={handleAddEvent} className="add-button">
//           Add Event
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default AdModalForm;


// ModalForm.jsx
// import React, { useState } from 'react';
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     // top: '50%',
//     // left: '50%',
//     // right: 'auto',
//     // bottom: 'auto',
//     // marginRight: '-50%',
//     // transform: 'translate(-50%, -50%)',
//   },
// };

// const AdModalForm = ({ isOpen, onRequestClose, onAddEvent }) => {
//   const [eventType, setEventType] = useState('');
//   const [description, setDescription] = useState('');
//   const [id, setId] = useState('');
//   const [imgurl, setImgurl] = useState('');
//   // const [totalPackage, setTotalPackage] = useState('');
//   const [charges, setCharges] = useState('');

//   const handleAddEvent = () => {
//     // Validate input fields here if needed
//     const event = {
//       eventType,
//       description,
//       id,
//       imgurl,
//       // totalPackage,
//       charges,
//     };

//     onAddEvent(event);

//     // Clear form fields
//     setEventType('');
//     setDescription('');
//     setId('');
//     setImgurl('');
//     // setTotalPackage('');
//     setCharges('');
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={customStyles}
//       contentLabel="Event Form"
//       className="attractive-modal"
//     >
//       <div className="modal-header">
//         <h2>Add Event</h2>
//         <button onClick={onRequestClose} className="close-button">
//           &times;
//         </button>
//       </div>
//       <div className="modal-body">
//         <label>
//           ID:
//           <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
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
//         {/* <label>
//           Total Package:
//           <input
//             type="number"
//             value={totalPackage}
//             onChange={(e) => setTotalPackage(parseFloat(e.target.value))}
//           />
//         </label> */}
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
//         <button onClick={handleAddEvent} className="add-button">
//           Add Event
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default AdModalForm;

// addeventadmodal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    // Add your custom styles here if needed
  },
};

const AdModalForm = ({ isOpen, onRequestClose, onAddEvent }) => {
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  const [imgurl, setImgurl] = useState('');
  const [charges, setCharges] = useState('');

  const handleAddEvent = () => {
    const event = {
      eventType,
      description,
      id,
      imgurl,
      charges,
    };

    onAddEvent(event);

    setEventType('');
    setDescription('');
    setId('');
    setImgurl('');
    setCharges('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Event Form"
      className="attractive-modal"
    >
      <div className="modal-header">
        <h2>Add Event</h2>
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
      </div>
      <div className="modal-body">
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
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
        <button onClick={handleAddEvent} className="add-button">
          Add Event
        </button>
      </div>
    </Modal>
  );
};

export default AdModalForm;
