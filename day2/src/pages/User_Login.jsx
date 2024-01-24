import React, { useState } from 'react';
import '../assets/css/Loginuser.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const User_Login = () => {
//   const [isSignUpMode, setSignUpMode] = useState(false);const SignUpForm = () => {
  const [isSignUpMode, setSignUpMode] = useState(true);
  const [selectedRole, setSelectedRole] = useState('');
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

  

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className={`sign-in-form ${isSignUpMode ? '' : 'active-form'}`}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
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

          
          <form className={`sign-up-form ${isSignUpMode ? 'active-form' : ''}`}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user">   </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="confirmPassword" />
            </div>
            <div className="input-field">
              <i className="fas fa-mobile"></i>
              <input type="number" placeholder="phoneno" />
            </div>
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
          {/* <img src="../assets/images/loginpage.png" className="image" alt="" /> */}
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
          {/* <img src="../assets/images/registeration.png" className="image" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default User_Login;
