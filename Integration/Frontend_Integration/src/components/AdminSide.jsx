import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ASidebarData } from './AdminSlide';
import '../assets/css/userside.css';
import { IconContext } from 'react-icons';
import profilepic from "../assets/images/profileimg.png"
import { useNavigate } from 'react-router-dom';

function AdminSideBar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const handleProfileClick = () => {
    navigate('/Adminprofile');
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={`navbar ${sidebar ? 'shifted' : ''}`}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 className='sidetitle'>Corp-Event - Administrator</h1>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link><br></br>
            </li>
            <div className='profileside' onClick={handleProfileClick}>
              <h2 style={{color:'white'}}>Administrator</h2><br></br>
              <img src={profilepic} alt='profile' />
            </div>
            {ASidebarData.map((item, index) => {
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

export default AdminSideBar;
