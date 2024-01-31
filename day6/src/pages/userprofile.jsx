import React, { useState } from 'react';
import '../assets/css/userprofile.css';
import avatar from '../assets/images/profileimg.png';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    username: 'Tarun M B',
    email: 'tarunbaskar03@gmail.com',
    dateOfBirth: '2003-11-22',
    gender: 'Male',
    location: '79/11, Kumaran Street, Coimbatore',
  });

  const handleLogout = () => {
    
    navigate('/');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    
    setIsEditing(false);
  };

  return (
    <>
      <SideBar />
      <center>
        <div className="profile-page">
          <div className="profile-card" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
            <h2 style={{color:'#4e5db2'}}>PROFILE DETAILS</h2><br></br>
            <img src={avatar} alt="Avatar" className="profile-card_avatar" />
            <div className="profile-card_info">
              <h2 className="profile-card_name">{isEditing ? <input type="text" value={editedUser.username} onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })} /> : editedUser.username}</h2>
            </div>
            <div className="profile-card_info">
              <span className="profile-card_label" style={{ fontWeight: 'bold' }}>Email: </span>
              <span className="profile-card_value">{isEditing ? <input type="text" value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} /> : editedUser.email}</span>
            </div>
            <div className="profile-card_info">
              <span className="profile-card_label">Date of Birth: </span>
              <span className="profile-card_value">{isEditing ? <input type="date" value={editedUser.dateOfBirth} onChange={(e) => setEditedUser({ ...editedUser, dateOfBirth: e.target.value })} /> : editedUser.dateOfBirth}</span>
            </div>
            <div className="profile-card_info">
              <span className="profile-card_label">Gender: </span>
              <span className="profile-card_value">{isEditing ? <input type="text" value={editedUser.gender} onChange={(e) => setEditedUser({ ...editedUser, gender: e.target.value })} /> : editedUser.gender}</span>
            </div>
            <div className="profile-card_info">
              <span className="profile-card_label">Location: </span>
              <span className="profile-card_value">{isEditing ? <input type="text" value={editedUser.location} onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })} /> : editedUser.location}</span>
            </div>
            {isEditing ? <button onClick={handleSave} className="profile-card_button">Save</button> : <button onClick={handleEdit} className="profile-card_button">Edit</button>}
            <br></br><br></br><button onClick={handleLogout} className="profile-card_button">Logout</button>
          </div>
        </div>
      </center>
    </>
  );
};

export default UserProfilePage;
