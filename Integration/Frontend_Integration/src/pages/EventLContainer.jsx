// import React from 'react';
// import EventCard from '../components/Event Card';
// import SideBar from '../components/SideBar';
// import EventFilter from '../components/UserEventFilter';
// import '../assets/css/eventcontainer.css';
// import image1 from '../assets/images/image3.jpg';
// import FooterUser from '../components/FooterUser';

// const EventContainer = () => {
  
//   const events = [
//     {
//       id: 1,
//       type: 'Conference',
//       description: 'Conference on Event Management',
//       totalPackage: '$1000',
//       participantsCount: 150,
//       charges: '$10 per participant',
//       image: 'https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk=', 
//     },
//   ];

//   return (
//     <>
//     <SideBar />
//     <div className='eventcontainer1'>
//       <br></br>
//       <EventFilter/>
//       <br></br>
//       <h1 id='titlecon'style={{color:'#4e5db2'}} >Event List</h1>
//       <div className="event-card-container">
//         {events.map((event) => (
//           <EventCard key={event.id} event={event} />
//         ))}
//       </div>
//     </div>
//     <FooterUser/>
//     </>
//   );
// };

// export default EventContainer;



import React from 'react';
import EventCard from '../components/Event Card';
import SideBar from '../components/SideBar';
import EventFilter from '../components/UserEventFilter';
import '../assets/css/eventcontainer.css';
import FooterUser from '../components/FooterUser';

const EventContainer = () => {
  return (
    <>
      <SideBar />
      <div className='eventcontainer1'>
        <br></br>
        <EventFilter/>
        <br></br>
        <h1 id='titlecon' style={{ color: '#4e5db2' }}>Event List</h1>
        <div className="event-card-container">
          <EventCard />
        </div>
      </div>
      <FooterUser/>
    </>
  );
};

export default EventContainer;
