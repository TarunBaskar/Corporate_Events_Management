import React from "react";
import PickMeals from "../assets/images/works1.jpg";
import ChooseMeals from "../assets/images/works2.jpeg";
import DeliveryMeals from "../assets/images/image3.jpg";
import "../assets/css/landing.css";
import NavLan from "./Nav_Lan";

const WorkLan = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Strategic Event Planning",
      text: "Our expert team specializes in strategic event planning, ensuring that every corporate gathering aligns with your company's goals and objectives. ",
    },
    {
      image: ChooseMeals,
      title: "Tailored Corporate Retreats",
      text: "Boost team morale and foster collaboration through our tailored corporate retreat services. Whether it's a leadership offsite, team-building workshop, or employee appreciation day, we design and execute retreats that combine business objectives with engaging activities. ",
    },
    {
      image: DeliveryMeals,
      title: "Technology-Driven Conferences",
      text: "Stay ahead of the curve with our technology-driven conference solutions. We integrate cutting-edge event technology to enhance attendee engagement, streamline registration processes, and provide interactive sessions.",
    },
  ];
  return (
    <>
      {/* <NavLan/> */}
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Crafting memorable corporate events that leave a lasting impression, from meticulous planning and seamless execution to creative design and strategic marketing
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default WorkLan;