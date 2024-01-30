import React from "react";
import BannerBackground from "../assets/images/back1.png";
import BannerImage from "../assets/images/loginpage1.png";
import "../assets/css/landing.css";
import { FiArrowRight } from "react-icons/fi";
import NavbarLan from "./Nav_Lan";
import { Link } from "react-router-dom";

const HomeLan = () => {
  return (
    <div className="home-container">
      <NavbarLan/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Why Choose Us for Your Corporate Events
          </h1>
          <p className="primary-text">
          At Corp-Event, we specialize in delivering exceptional corporate event management services. Our team is dedicated to creating memorable and successful events that meet the unique needs of your business. 
          </p>
          <button className="secondary-button"><Link to='/user_login' style={{color:'white',textDecoration:'none'}}>Get Started </Link><FiArrowRight />{" "}
            
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeLan;