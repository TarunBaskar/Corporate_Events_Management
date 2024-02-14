import React from "react";
import ProfilePic1 from "../assets/images/testdance.jpg";
import ProfilePic2 from "../assets/images/testmusic.jpg";
import ProfilePic3 from "../assets/images/testmagic.jpg";
import ProfilePic4 from "../assets/images/testdinnerarrange.jpg";
import { AiFillStar } from "react-icons/ai";
import "../assets/css/landing.css";
import NavLan from "./Nav_Lan";

const TestimonialLan = () => {
  return (
    <>
      {/* <NavLan/> */}
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Our Special Event for Corporate</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic1} alt="" />
        <p>
        Unleash the power of movement and rhythm with our captivating dance shows, where every performance tells a unique story through choreography, music, and sheer artistic expression.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Dance Show</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic2} alt="" />
        <p>
        "Elevate your corporate event with mesmerizing melodies and beats, as our exceptional musicians deliver a soul-stirring music show that resonates with your audience's senses."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Music Show</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic3} alt="" />
        <p>
        "Add a touch of enchantment to your corporate event with a spellbinding magic show, captivating your audience with illusions and wonder that leave a lasting impression."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Magic Show</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic4} alt="" />
        <p>
        "Craft an unforgettable corporate event experience with exquisite dining arrangements, offering a delectable fusion of flavors and a sophisticated ambiance to enhance networking and enjoyment."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Dinning Arrangement</h2>
      </div>
    </div>
    </>
  );
};

export default TestimonialLan;