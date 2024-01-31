
import React, { useState, useEffect } from 'react';

const EditEventModalForm = ({ isOpen, onRequestClose, onEditEvent, editedEvent }) => {
  const [eventDetails, setEventDetails] = useState(editedEvent || {});

  useEffect(() => {
    setEventDetails(editedEvent || {});
  }, [editedEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSave = () => {
    onEditEvent(eventDetails);
  };

  return (
    <div className={`editeventmodal ${isOpen ? 'open' : ''}`}>
      <div className="modal-header">
        <h2>Edit Event</h2>
        <button className="close-button" onClick={onRequestClose}>
          Close
        </button>
      </div>
      <div className="modal-body">
        <label>
          Event ID:
          <input type="text" name="id" value={eventDetails.id || ''} readOnly />
        </label>
        <label>
          Event Type:
          <input type="text" name="eventType" value={eventDetails.eventType || ''} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={eventDetails.description || ''} onChange={handleChange} />
        </label>
        <label>
          Total Participants:
          <input
            type="number"
            name="totalParticipants"
            value={eventDetails.totalParticipants || 0}
            onChange={handleChange}
          />
        </label>
        <label>
          Total Package:
          <input type="number" name="totalPackage" value={eventDetails.totalPackage || 0} onChange={handleChange} />
        </label>
        <label>
          Charges:
          <input type="number" name="charges" value={eventDetails.charges || 0} onChange={handleChange} />
        </label>
      </div>
      <div className="modal-footer">
        <button className="add-button" onClick={handleSave}>
          Update Event
        </button>
      </div>
    </div>
  );
};

export default EditEventModalForm;
