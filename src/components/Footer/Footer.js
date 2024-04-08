import React from 'react'
import './Footer.css'
import logo from "../../assets/s60logo.png";

const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the Batch</span> A curated cohort of 60 CSE first-year students undergo intensive training in advanced modules covering reasoning, communication, and cutting-edge technologies, ensuring 100% placement in campus drives.
        </p>
        <div className="icons">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span> Street name and number</span> City, Country</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="#"> office@company.com</a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <p className="menu">
          <a href="#"> Home</a> |
          <a href="#"> About</a> |
          <a href="#"> Services</a> |
          <a href="#"> Portfolio</a> |
          <a href="#"> News</a> |
          <a href="#"> Contact</a>
        </p>
    
      </div>
    </footer>
    </div>
  )
}

export default Footer