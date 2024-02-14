// import React, { useState, useEffect } from 'react';
// import '../assets/css/userprofile.css';
// import avatar from '../assets/images/profileimg.png';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import SideBar from '../components/SideBar';
// import { selectUser, logout } from '../assets/others/userSlice';

// const UserProfilePage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); // Don't forget to initialize dispatch

//   const user = useSelector(selectUser);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editedUser, setEditedUser] = useState({
//     username: '',
//     email: '',
//     dateOfBirth: '22-11-2003',
//     gender: 'male',
//     location: 'Coimbatore',
//   });

//   const handleLogout = () => {  
//     dispatch(logout()); // Corrected dispatch and added parentheses
//     navigate('/');
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//   };

//   return (
//     <>
//       <SideBar />
//       <center>
//         <div className="profile-page">
//           <div className="profile-card" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
//             <h2 style={{ color: '#4e5db2' }}>PROFILE DETAILS</h2><br></br>
//             <img src={avatar} alt="Avatar" className="profile-card_avatar" />
//             <div className="profile-card_info">
//               <h2 className="profile-card_name">{isEditing ? <input type="text" value={user.username}/> : user.username}</h2>
//             </div>
//             <div className="profile-card_info">
//               <span className="profile-card_label" style={{ fontWeight: 'bold' }}>Email: </span>
//               <span className="profile-card_value">{isEditing ? <input type="text" value={user.email} /> : user.email}</span>
//             </div>
//             <div className="profile-card_info">
//               <span className="profile-card_label">Date of Birth: </span>
//               <span className="profile-card_value">{isEditing ? <input type="date" value={editedUser.dateOfBirth} onChange={(e) => setEditedUser({ ...editedUser, dateOfBirth: e.target.value })} /> : editedUser.dateOfBirth}</span>
//             </div>
//             <div className="profile-card_info">
//               <span className="profile-card_label">Gender: </span>
//               <span className="profile-card_value">{isEditing ? <input type="text" value={editedUser.gender} onChange={(e) => setEditedUser({ ...editedUser, gender: e.target.value })} /> : editedUser.gender}</span>
//             </div>
//             <div className="profile-card_info">
//               <span className="profile-card_label">Location: </span>
//               <span className="profile-card_value">{isEditing ? <input type="text" value={editedUser.location} onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })} /> : editedUser.location}</span>
//             </div>
//             {isEditing ? <button onClick={handleSave} className="profile-card_button">Save</button> : <button onClick={handleEdit} className="profile-card_button">Edit</button>}
//             <br></br><br></br><button onClick={handleLogout} className="profile-card_button">Logout</button>
//           </div>
//         </div>
//       </center>
//     </>
//   );
// };

// export default UserProfilePage;

// import React, { useState } from 'react';
// import '../assets/css/userprofile.css';
// import avatar from '../assets/images/profileimg.png';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import SideBar from '../components/SideBar';
// import { selectUser, logout } from '../assets/others/userSlice';

// const UserProfilePage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editedUser, setEditedUser] = useState({
//     username: user.username,
//     email: user.email,
//     dateOfBirth: '',
//     gender: '',
//     location: '',
//   });

//   const useremail = user.email;
//   const editdob = editedUser.dateOfBirth;
//   const gender = editedUser.gender;
//   const location = editedUser.location;

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/');
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`http://localhost:8081/auth/users/add `, {
//         useremail: useremail,
//         dateOfBirth: editdob,
//         gender: gender,
//         location: location,
//       });
//       if (response) {
//         console.log("Update Successful", response.data);
//         setIsEditing(false);
//       } else {
//         console.log('Update failed');
//       }
//     } catch (error) {
//       console.error('Update failed', error);
//     }
//   };

//   return (
//     <>
//       <SideBar />
//       <center>
//         <div className="profile-page">
//           <div className="profile-card" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
//             <h2 style={{ color: '#4e5db2' }}>PROFILE DETAILS</h2><br></br>
//             <img src={avatar} alt="Avatar" className="profile-card_avatar" />
//             <div className="profile-card_info">
//               <h2 className="profile-card_name">{isEditing ? <input type="text" value={editedUser.username} onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })} /> : user.username}</h2>
//             </div>
//             <div className="profile-card_info">
//               <span className="profile-card_label" style={{ fontWeight: 'bold' }}>Email: </span>
//               <span className="profile-card_value">{user.email}</span>
//             </div>
//             <div className="profile-card_info">
//               <span className="profile-card_label">Date of Birth: </span>
//               <span className="profile-card_value">{isEditing ? <input type="date" value={editedUser.dateOfBirth} onChange={(e) => setEditedUser({ ...editedUser, dateOfBirth: e.target.value })} /> : editedUser.dateOfBirth}</span>
//             </div>
//             <div className="profile-card_info">
//               <span className="profile-card_label">Gender: </span>
//               <span className="profile-card_value">{isEditing ? <input type="text" value={editedUser.gender} onChange={(e) => setEditedUser({ ...editedUser, gender: e.target.value })} /> : editedUser.gender}</span>
//             </div>
//             <div className="profile-card_info">
//               <span className="profile-card_label">Location: </span>
//               <span className="profile-card_value">{isEditing ? <input type="text" value={editedUser.location} onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })} /> : editedUser.location}</span>
//             </div>
//             {isEditing ? <button onClick={handleSave} className="profile-card_button">Save</button> : <button onClick={handleEdit} className="profile-card_button">Edit</button>}
//             <br></br><br></br><button onClick={handleLogout} className="profile-card_button">Logout</button>
//           </div>
//         </div>
//       </center>
//     </>
//   );
// };

// export default UserProfilePage;



import React, { useState, useEffect } from 'react';
import '../assets/css/userprofile.css';
import avatar from '../assets/images/profileimg.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import SideBar from '../components/SideBar';
import { selectUser, logout } from '../assets/others/userSlice';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    username: user.username,
    email: user.email,
    dateOfBirth: '',
    gender: '',
    location: '',
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/auth/users/email/${user.email}`);
        if (response.data) {
          const { dateOfBirth, gender, location } = response.data;
          setEditedUser({ ...editedUser, dateOfBirth, gender, location });
        }
      } catch (error) {
        console.error('Failed to fetch user details', error);
      }
    };

    fetchUserDetails();
  }, [user.email, editedUser]);

  const useremail = user.email;
  const editdob = editedUser.dateOfBirth;
  const gender = editedUser.gender;
  const location = editedUser.location;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8081/auth/users/add`, {
        useremail: useremail,
        dateOfBirth: editdob,
        gender: gender,
        location: location,
      });
      if (response) {
        console.log('Update Successful', response.data);
        setIsEditing(false);
      } else {
        console.log('Update failed');
      }
    } catch (error) {
      console.error('Update failed', error);
    }
  };

  return (
    <>
      <SideBar />
      <center>
        <div className="profile-page">
          <div className="profile-card" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
            <h2 style={{ color: '#4e5db2' }}>PROFILE DETAILS</h2>
            <br></br>
            <img src={avatar} alt="Avatar" className="profile-card_avatar" />
            <div className="profile-card_info">
              <h2 className="profile-card_name">
                {isEditing ? (
                  <input type="text" value={editedUser.username} onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })} />
                ) : (
                  user.username
                )}
              </h2>
            </div>
            <div className="profile-card_info">
              <span className="profile-card_label" style={{ fontWeight: 'bold' }}>
                Email:{' '}
              </span>
              <span className="profile-card_value">{user.email}</span>
            </div>
            <div className="profile-card_info">
              <span className="profile-card_label">Date of Birth: </span>
              <span className="profile-card_value">
                {isEditing ? (
                  <input type="date" value={editedUser.dateOfBirth} onChange={(e) => setEditedUser({ ...editedUser, dateOfBirth: e.target.value })} />
                ) : (
                  editedUser.dateOfBirth
                )}
              </span>
            </div>
            <div className="profile-card_info">
              <span className="profile-card_label">Gender: </span>
              <span className="profile-card_value">
                {isEditing ? (
                  <input type="text" value={editedUser.gender} onChange={(e) => setEditedUser({ ...editedUser, gender: e.target.value })} />
                ) : (
                  editedUser.gender
                )}
              </span>
            </div>
            <div className="profile-card_info">
              <span className="profile-card_label">Location: </span>
              <span className="profile-card_value">
                {isEditing ? (
                  <input type="text" value={editedUser.location} onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })} />
                ) : (
                  editedUser.location
                )}
              </span>
            </div>
            {isEditing ? (
              <button onClick={handleSave} className="profile-card_button">
                Save
              </button>
            ) : (
              <button onClick={handleEdit} className="profile-card_button">
                Edit
              </button>
            )}
            <br></br>
            <br></br>
            <button onClick={handleLogout} className="profile-card_button">
              Logout
            </button>
          </div>
        </div>
      </center>
    </>
  );
};

export default UserProfilePage;
