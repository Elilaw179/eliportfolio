import React, { useState } from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  const[year, setYear] =useState(new Date().getFullYear());
 function copyRightYear (){
  setYear(new Date().getFullYear)
 }
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>SirLaw@</h1>
         
          <p>
            I am a frontend developer from Akwa-Ibom, Nigeria with many years of
            experience in multiple companies like Shepherd Porch, Midland Tech
            and Flourishers
          </p>  
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left"> &copy;{year} Elisha Sunday.All rights</p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
