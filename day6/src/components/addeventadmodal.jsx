// ModalForm.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
const customStyles = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};

const AdModalForm = ({ isOpen, onRequestClose, onAddEvent }) => {
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  const [imgurl, setImgurl] = useState('');
  const [totalPackage, setTotalPackage] = useState('');
  const [participantCount, setParticipantCount] = useState('');

  const handleAddEvent = () => {
    // Validate input fields here if needed
    const event = {
      eventType,
      description,
      id,
      imgurl,
      totalPackage,
      participantCount,
      charges: totalPackage * participantCount,
    };

    onAddEvent(event);

    // Clear form fields
    setEventType('');
    setDescription('');
    setId('');
    setImgurl('');
    setTotalPackage('');
    setParticipantCount('');
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
          Total Package:
          <input
            type="number"
            value={totalPackage}
            onChange={(e) => setTotalPackage(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Participant Count:
          <input
            type="number"
            value={participantCount}
            onChange={(e) => setParticipantCount(parseInt(e.target.value, 10))}
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
