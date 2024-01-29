// // import { Link } from "react-router-dom";
// // function Navbar() {
// //     return ( 
// //         <div>
// //             <Link to="/">Home</Link>
// //             <Link to="/about">About</Link>
// //         </div>
// //      );
// // }

// // export default Navbar;


// // Navbar.js

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import '../assets/css/navbar.css';

// // const Navbar = () => {
// //   return (
// //     <nav>
// //       <ul>
// //         <li>
// //           <Link to="/">Home</Link>
// //         </li>
// //         <li>
// //           <Link to="/events">Events</Link>
// //         </li>
// //         <li>
// //           <Link to="/about">About</Link>
// //         </li>
// //         <li>
// //           <Link to="/contact">Contact</Link>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// Navbar.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/navbar.css';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//             <Link to="/">C-Event</Link>
//         </li>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/events">Events</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//       {/* <div className="logo">
//         <img src="path_to_your_logo.png" alt="Logo" />
//       </div> */}
//       <div className="signin">
//         <Link to="/user_login">Sign up</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.js

// Navbar.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../assets/css/navbar.css';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <nav>
//       <div className="left-section">
//         <Link to="/">C-Event</Link>
//       </div>
//       <ul className={`nav-links ${dropdownOpen ? 'show' : ''}`}>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/events">Events</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//       <div className="logo" onClick={toggleDropdown}>
//         <i className="fas fa-user"></i>
//         {dropdownOpen && (
//           <div className="dropdown-content">
//             <Link to="/profile">Profile</Link>
//             <Link to="/settings">Settings</Link>
//             <Link to="/logout">Logout</Link>
//           </div>
//         )}
//       </div>
//       <div className="signin">
//         <Link to="/user_login">Sign up</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../assets/css/navbar.css';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className='toproot'>
//     <nav>
//       <div className="left-section">
//         <Link to="/">Corp-Event</Link>
//       </div>
//       <ul className={`nav-links ${dropdownOpen ? 'show' : ''}`}>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/events">Events</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li className="logo" onClick={toggleDropdown}>
//           <i className="fas fa-user"></i>
//           {dropdownOpen && (
//             <div className="dropdown-content">
//               <Link to="/profile">Profile</Link>
//               <Link to="/settings">Settings</Link>
//               <Link to="/logout">Logout</Link>
//             </div>
//           )}
//         </li>
//       </ul>
//       <div className="signin">
//         <Link to="/user_login">Sign up</Link>
//       </div>
//     </nav>
//     </div>
//   );
// };

// export default Navbar;








