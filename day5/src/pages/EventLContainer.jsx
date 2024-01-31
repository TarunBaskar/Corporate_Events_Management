import React from 'react';
import EventCard from '../components/Event Card';
import SideBar from '../components/SideBar';
import EventFilter from '../components/UserEventFilter';
import '../assets/css/eventcontainer.css';
import image1 from '../assets/images/image3.jpg';

const EventContainer = () => {
  // Assuming you have a list of events fetched from an API or elsewhere
  const events = [
    {
      id: 1,
      type: 'Conference',
      description: 'Conference on Event Management',
      totalPackage: '$1000',
      participantsCount: 150,
      charges: '$10 per participant',
      image: 'https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk=', 
    },
    {
      id: 2,
      type: 'Conference',
      description: 'Conference on Event Management',
      totalPackage: '$1000',
      participantsCount: 150,
      charges: '$10 per participant',
      image: 'https://images.pexels.com/photos/2337777/pexels-photo-2337777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    {
      id: 3,
      type: 'Conference',
      description: 'Conference on Event Management',
      totalPackage: '$1000',
      participantsCount: 150,
      charges: '$10 per participant',
      image: 'https://images.squarespace-cdn.com/content/v1/55c37beae4b0336075603f86/1443039469134-E9SLQBQ2OW1Y69KPKFDO/image-asset.jpeg?format=2500w', // Add your image URL
    },
    {
      id: 4,
      type: 'Conference',
      description: 'Conference on Event Management',
      totalPackage: '$1000',
      participantsCount: 150,
      charges: '$10 per participant',
      image: 'https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=', // Add your image URL
    },
    {
      id: 5,
      type: 'Conference',
      description: 'Conference on Event Management',
      totalPackage: '$1000',
      participantsCount: 150,
      charges: '$10 per participant',
      image: 'https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=', // Add your image URL
    },
    {
      id: 6,
      type: 'Conference',
      description: 'Conference on Event Management',
      totalPackage: '$1000',
      participantsCount: 150,
      charges: '$10 per participant',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', // Add your image URL
    },
    // Add more events as needed
  ];

  return (
    <>
    <SideBar />
    <div className='eventcontainer1'>
      <br></br>
      <EventFilter/>
      <br></br>
      <h1 id='titlecon' >Event List</h1>
      <div className="event-card-container">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
    </>
  );
};

export default EventContainer;


