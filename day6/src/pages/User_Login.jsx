import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Loginuser.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import login from "../assets/images/loginpage1.png"
import regis from "../assets/images/registeration1.png"

const User_Login = () => {
  const navigate = useNavigate();
  const [isSignUpMode, setSignUpMode] = useState(true);
  const [selectedRole, setSelectedRole] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [errors, setErrors] = useState({});

  const roles = ['user', 'admin'];

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  const validateInputs = (isSignUp) => {
    let newErrors = {};

    if (isSignUp) {
      if (!username.trim()) {
        newErrors.username = 'Username is required';
      }
      if (!confirmPassword.trim()) {
        newErrors.confirmPassword = 'Confirm Password is required';
      } else if (confirmPassword !== password) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!phoneNo.trim()) {
        newErrors.phoneNo = 'Phone Number is required';
      }
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    if (validateInputs(false)) {
      console.log('Sign-in successful');
      if(email.includes('@admin.com')){
        navigate('/admindb');
      }else{
        navigate('/userdb');
      }
      
    } else {
      console.log('Sign-in failed. Please fix errors.');
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (validateInputs(true)) {
      
      console.log('Signup successful');
      
      navigate('/userdb');
      
    } else {
      console.log('Signup failed. Please fix errors.');
    }
  };



  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className={`sign-in-form ${isSignUpMode ? '' : 'active-form'}`} onSubmit={handleSignInSubmit}>

            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {errors.email && <div className="error-message" style={{color:'red'}}>{errors.email}</div>}
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {errors.password && <div className="error-message" style={{color:'red'}}>{errors.password}</div>}

            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="www.facebook.com" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="www.twitter.com" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="www.google.com" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="www.linkedin.com" className="social-icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form className={`sign-up-form ${isSignUpMode ? 'active-form' : ''}`} onSubmit={handleSignUpSubmit}>

            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            {errors.username && <div className="error-message" style={{color:'red'}}>{errors.username}</div>}
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {errors.email && <div className="error-message" style={{color:'red'}}>{errors.email}</div>}
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {errors.password && <div className="error-message" style={{color:'red'}}>{errors.password}</div>}
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {errors.confirmPassword && <div className="error-message" style={{color:'red'}}>{errors.confirmPassword}</div>}
            <div className="input-field">
              <i className="fas fa-mobile"></i>
              <input type="number" placeholder="phoneno" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
            </div>
            {errors.phoneNo && <div className="error-message" style={{color:'red'}}>{errors.phoneNo}</div>}
            <div className="input-field">
              <i className="fas fa-user"></i>
              <select value={selectedRole} onChange={handleRoleChange}>
                <option value="">Select a Role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            

            <input type="submit" className="btn" value="Sign up" />

            <p className="social-text">Or Sign up with social platforms</p>
             <div className="social-media">
              <a href="www.facebook.com" className="social-icon">
                <i className="fab fa-facebook-f"></i>
               </a>
               <a href="www.twitter.com" className="social-icon">
                 <i className="fab fa-twitter"></i>
               </a>
               <a href="www.google.com" className="social-icon">
                 <i className="fab fa-google"></i>
               </a>
               <a href="www.linkedin.com" className="social-icon">
                 <i className="fab fa-linkedin-in"></i>
               </a>
             </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
      <div className="panel left-panel">
          <div className="content">
             <h3>Event Management Hub: Where Every Detail Matters</h3>
             <p>"Unlock Seamless Experiences, Sign in to Your Event Journey. Where Every Detail Finds its Place, Every Moment Echoes Perfection. Let's Make Your Events Unforgettable Together."
              
            </p><br/><br/>
             <button className="btn transparent" onClick={handleSignUpClick}>
               Sign up
             </button>
          </div>
           <img src={login} className="image" alt="img1" width='20px' />     
               </div>

        
         <div className="panel right-panel">
           <div className="content">
            <h3>Join the Celebration: Sign Up for Seamless Event Management</h3>
             <p>Embark on a Journey of Extraordinary Events. Sign up and Let's Create Moments that Last a Lifetime. Your Vision, Our Expertise - Together, Unleash Unforgettable Experiences.
              
             </p><br/><br/>
             <button className="btn transparent" onClick={handleSignInClick}>
             Sign in
            </button>
         </div>
          <img src={regis} className="image" alt="" />
       </div>
      </div>
      </div>
    // </div>
  );
};

export default User_Login;

