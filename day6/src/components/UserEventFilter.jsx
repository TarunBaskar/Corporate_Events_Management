import React from 'react';
import "../assets/css/EventFilter.css";

const EventFilter = () => {
  return (
    <div>
      <label htmlFor="eventType">Filter by Event Type: </label>
      <select id="eventType">
        <option value="">All</option>
        <option value="Conference">Conference</option>
        <option value="Workshop">Workshop</option>
        <option value="Seminar">Seminar</option>
      </select>
    </div>
  );
};

export default EventFilter;
