// // App.js
// import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
// // import NavBar from './components/NavBar';
// import UserDashboard from './pages/User_Dashboard';

// import Login from './pages/User_Login';
// import Landing from './pages/Landing_Page';
// import HomeLan from './components/Home_Lan';
// import AboutLan from './components/About_Lan';
// import WorkLan from './components/Work_Lan';
// import TestimonialLan from './components/Testimonial_Lan';
// import UserProfilePage from './pages/userprofile';
// import EventContainer from './pages/EventLContainer';
// import BookEvent from './pages/BookUserEvent';
// import UserPayment from './pages/UserPayment';




// function App() {
//   return (
//     <Router>
      
//       <Routes>
//         <Route path='/userdb' element={<UserDashboard/>}></Route>
//         <Route path='/userbookevent' element={<BookEvent/>}></Route>
//         <Route path='/Mypayment' element={<UserPayment/>}></Route>
//         <Route path="/" element={<Landing/>} />
//         <Route path="/home" element={<HomeLan />} />
//         <Route path="/about" element={<AboutLan />} />
//         <Route path="/work" element={<WorkLan />} />
//         <Route path="/test" element={<TestimonialLan />} />
//         {/* <Route path="/userprofile" element={<UserProfilePage/>} /> */}
//         {/* <Route path="/EventList" element={<EventContainer/>} /> */}
        

        
//       </Routes>
//       <Switch>
//         <Route path="/EventList" component={<EventContainer/>} />
//         <Route path="/userbookevent" component={<BookEvent/>} />
//         <Route path="/userprofile" component={<UserProfilePage/>} />
        
//       </Switch>
//       <Routes>
//         <Route path="/user_login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './pages/User_Dashboard';
import Login from './pages/User_Login';
import Landing from './pages/Landing_Page';
import HomeLan from './components/Home_Lan';
import AboutLan from './components/About_Lan';
import WorkLan from './components/Work_Lan';
import TestimonialLan from './components/Testimonial_Lan';
import UserProfilePage from './pages/userprofile';
import EventContainer from './pages/EventLContainer';
import BookEvent from './pages/BookUserEvent';
// import UserPayment from './pages/UserPayment';
// import PaymentModal from './pages/UserPayment';
import PaymentList from './pages/UserPayment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/userdb" element={<UserDashboard />} />
        <Route path="/userbookevent" element={<BookEvent />} />
        <Route path="/Mypayment" element={<PaymentList/>} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomeLan />} />
        <Route path="/about" element={<AboutLan />} />
        <Route path="/work" element={<WorkLan />} />
        <Route path="/test" element={<TestimonialLan />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
        <Route path="/EventList" element={<EventContainer />} />
        <Route path="/user_login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
