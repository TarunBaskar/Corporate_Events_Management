
import React from 'react';
import UserEventItem from './UserEventItem';
import "../assets/css/EventList.css"
const UserEventList = ({ events }) => {
  return (
    <div className="event-list-container">
      {/* <h2>Available Events</h2> */}
      <div className="event-list">
        {events.map((event) => (
          <UserEventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UserEventList;