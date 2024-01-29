// import React from 'react';
// import { RiSearchLine, RiUserLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
// import {Link} from 'react-router-dom';
// // import './Navbar.css'; // Import the CSS file
// import "../assets/css/landing.css";

// const LandingPage = () => {
//   const toggleNav = () => {
//     const navMenu = document.getElementById('nav-menu');
//     navMenu.classList.toggle('show-menu');
//   };

 
//   return (
//     <>
//     <header className="header" id="header">
//       <nav className="nav lancontainer">
//         <a href="#" className="nav__logo">
//           Corp-Event
//         </a>

//         <div className="nav__menu" id="nav-menu">
//           <ul className="nav__list">
//             <li className="nav__item">
//               <a href="#" className="nav__link">
//                 Home
//               </a>
//             </li>

//             <li className="nav__item">
//               <a href="#" className="nav__link">
//                 About Us
//               </a>
//             </li>

//             <li className="nav__item">
//               <a href="#" className="nav__link">
//                 Services
//               </a>
//             </li>

//             <li className="nav__item">
//               <a href="#" className="nav__link">
//                 Featured
//               </a>
//             </li>

//             <li className="nav__item">
//               <a href="#" className="nav__link">
//                 Contact Me
//               </a>
//             </li>
//             <li className="nav__item signin">
//               <Link to='/user_login'>Sign up</Link>
//             </li>
//           </ul>

     
//           <div className="nav__close" id="nav-close" onClick={toggleNav}>
//             <RiCloseLine />
//           </div>
//         </div>

//         <div className="nav__actions">
         
//           <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
//             <RiMenuLine />
//           </div>
//         </div>
//       </nav>
//     </header>
//     {/* <section className='homelan'>
//       <div className='headlan'>
//           hello
//       </div>

//     </section> */}
//     </>
//   );
// };

// export default LandingPage;


import AboutLan from "../components/About_Lan";
import ContactLan from "../components/Contact";
import FooterLan from "../components/Footer";
import HomeLan from "../components/Home_Lan";
import TestimonialLan from "../components/Testimonial_Lan";
import WorkLan from "../components/Work_Lan";
// import "../assets/css/landing.css";


function Landing() {
  return (
    <div className="App">
      
      <HomeLan/>
      <AboutLan/>
      <WorkLan/>
      <TestimonialLan/>
      <ContactLan/>
      <FooterLan/>
    </div>
  );
}

export default Landing;
