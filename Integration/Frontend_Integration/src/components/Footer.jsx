// import React from "react";
// import "../assets/css/landing.css";
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

// const FooterLan = () => {
//   return (
//     <div className="footer-wrapper">
//       <div className="footer-section-one">
//         <div className="footer-logo-container">
//           {/* <img src={Logo} alt="" /> */}
//         </div>
//         <div className="footer-icons">
//           <BsTwitter />
//           <SiLinkedin />
//           <BsYoutube />
//           <FaFacebookF />
//         </div>
//       </div>
//       <div className="footer-section-two">
//         <div className="footer-section-columns">
//           <span>Qualtiy</span>
//           <span>Help</span>
//           <span>Share</span>
//           <span>Carrers</span>
//           <span>Testimonials</span>
//           <span>Work</span>
//         </div>
//         <div className="footer-section-columns">
//           <span>244-5333-7783</span>
//           <span>corpEvent.com</span>
//           <span>Event_can_change.com</span>
//           <span>contact@event.com</span>
//         </div>
//         <div className="footer-section-columns">
//           <span>Terms & Conditions</span>
//           <span>Privacy Policy</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FooterLan;


import "../assets/css/userfooter.css";
function FooterUser() {
    return ( 
        <>
        <div className="app-container" style={{paddingTop:'30px'}}>
        <div className="contentuser" style={{textAlign:'center',backgroundColor:'#4e5db2',padding:'20px',color:'white'}}>
            <h2>Admin DashBoard</h2>
            <p>Simple to access the data of the User</p>
        </div>

        <footer className="footer">
            &copy; 2024 Your Website. All rights reserved.
        </footer>
        </div>

        </>
     );
}

export default FooterUser;