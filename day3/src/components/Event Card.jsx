import React from 'react';
import UserEventList from './UserEventList';
import '../assets/css/EventCard.css';
import StarRating from './Rating';

const EventCard = ({ event }) => {
  return (
    <div className="card">
      <div className="card-inner">
        {/* <div className='card'> */}
        <div className="card-front">
          <center><br></br><img src={event.image} alt="Event"  id='cardimg'/></center>
        
        <div className='rate'>
        <StarRating rating={event.rating} />
          </div>
          <div>
            <center><h3>{event.description}</h3></center>
          </div>
          </div>
          {/* </div> */}
        <div className="card-back">
          <UserEventList events={[event]} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;


