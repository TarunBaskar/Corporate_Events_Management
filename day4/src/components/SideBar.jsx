// import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { SidebarData } from './Slidebar';
// import '../assets/css/userside.css';
// import { IconContext } from 'react-icons';
// // import { CgProfile } from "react-icons/cg";
// import profilepic from "../assets/images/profileimg.png"
// import { useNavigate } from 'react-router-dom';

// function SideBar() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);
//   const navigate = useNavigate();

//   const handleProfileClick = () => {
//     navigate('/userprofile');
//   };
//   return (
//     <>
    
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <div className='navbar'>
//           <Link to='#' className='menu-bars'>
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//           <h1 className='sidetitle'>Corp-Event</h1>
          
//         </div>
        
//         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//           <ul className='nav-menu-items' onClick={showSidebar}>
//             <li className='navbar-toggle'>
//               <Link to='#' className='menu-bars'>
//                 <AiIcons.AiOutlineClose />
//               </Link><br></br>
             
//             </li>
//             <div className='profileside' onClick={handleProfileClick}>
//             <img src={profilepic} alt='profile' />
//           </div>
//             {SidebarData.map((item, index) => {
//               return (
                
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default SideBar;




// // // SideBar.jsx

// // // import React, { useState } from 'react';
// // // import { SidebarData } from './Slidebar';
// // // import '../assets/css/userside.css';
// // // import { IconContext } from 'react-icons';
// // // import { Link } from 'react-router-dom';
// // // import { useNavigate } from 'react-router-dom';

// // function SideBar() {
// //   const [sidebar, setSidebar] = useState(false);
// //   const navigate = useNavigate();

// //   const showSidebar = () => setSidebar(!sidebar);

// //   const handleProfileClick = () => {
// //     navigate('/userprofile');
// //   };

// //   return (
// //     <IconContext.Provider value={{ color: '#fff' }}>
// //       <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
// //         <ul className='nav-menu-items' onClick={showSidebar}>
// //           <li className='navbar-toggle'>
// //             <Link to='#' className='menu-bars'>
// //                <FaIcons.FaBars onClick={showSidebar} />
// //             </Link>
// //             <br />
// //           </li>
// //           <div className='profileside' onClick={handleProfileClick}>
// //           <img src={profilepic} alt='profile' />
// //           </div>
// //           {SidebarData.map((item, index) => (
// //             <li key={index} className={item.cName}>
// //               <Link to={item.path}>
// //                 {sidebar ? item.icon : <span>{item.icon}</span>}
// //                 <span>{sidebar ? item.title : ''}</span>
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </IconContext.Provider>
// //   );
// // }

// // export default SideBar;


import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Slidebar';
import '../assets/css/userside.css';
import { IconContext } from 'react-icons';
import profilepic from "../assets/images/profileimg.png"
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const handleProfileClick = () => {
    navigate('/userprofile');
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={`navbar ${sidebar ? 'shifted' : ''}`}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 className='sidetitle'>Corp-Event</h1>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link><br></br>
            </li>
            <div className='profileside' onClick={handleProfileClick}>
              <img src={profilepic} alt='profile' />
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;

