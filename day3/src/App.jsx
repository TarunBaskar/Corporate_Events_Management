// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
import UserDashboard from './pages/User_Dashboard';

import Login from './pages/User_Login';
import Landing from './pages/Landing_Page';
import HomeLan from './components/Home_Lan';
import AboutLan from './components/About_Lan';
import WorkLan from './components/Work_Lan';
import TestimonialLan from './components/Testimonial_Lan';
import UserProfilePage from './pages/userprofile';
import EventContainer from './pages/EventLContainer';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/userdb' element={<UserDashboard/>}></Route>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<HomeLan />} />
        <Route path="/about" element={<AboutLan />} />
        <Route path="/work" element={<WorkLan />} />
        <Route path="/test" element={<TestimonialLan />} />
        <Route path="/userprofile" element={<UserProfilePage/>} />
        <Route path="/EventList" element={<EventContainer/>} />
        

        
      </Routes>
      <Routes>
        <Route path="/user_login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;


// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About_Us';
// import NavBar from './components/NavBar';
// import Login from './pages/User_Login';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Add the condition to show/hide NavBar based on route */}
//         <Route
//           path="/*"
//           element={<NavBar />}
//         />
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
        
//         {/* Use the wrapper to conditionally render the login page without NavBar */}
//         <Route
//           path="/user_login/*"
//           element={<Login />}
//         />
//         {/* Alternatively, use Navigate to redirect to home if trying to access login page while authenticated */}
//         {/* <Route
//           path="/user_login"
//           element={<Navigate to="/" replace />}
//         /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
