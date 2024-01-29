// EventItem.jsx
// import React from 'react';
import "../assets/css/UserEventItemList.css";

const UserEventItem = ({ event }) => {
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
        <button>Book</button>
      </div>
    </div>
  );
};

export default UserEventItem;
