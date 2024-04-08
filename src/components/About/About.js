import React from 'react';
import './about.css';
import About_Left_Image from '../../assets/delivery_taxi_13-removebg-preview.png';
import About_Right_Image from '../../assets/delivery_taxi_13-removebg-preview.png';

const About = () => {
  return (
    <div>
        <div class="about" style={{paddingBlock: 100+"px"}}>
        <div class="about-content">
            <div class="about-upper-pic">
                {/* <img src={About_Left_Image} alt="" /> */}
            </div>
            <div>
                <h1>ABOUT US</h1>
                <p class="about-content-main"> A select group of 60 first-year CSE students undergo rigorous training in enriched modules covering reasoning, quantitative skills, communication, personality development, and cutting-edge software and manufacturing techniques. Designed to prepare them for challenges beyond their curriculum, Super60 ensures 100% placement in campus recruitment drives.</p>
            </div>
            <div class="about-upper-pic ">
                {/* <img style={{objectPosition: 83+'%'}} src={About_Right_Image} alt="" /> */}
            </div>
        </div>
        <div class="about-pic">
            <div class="about-pic1">
                <div class="overlay">
                    <h2>Customer Satisfaction</h2>
                </div>
            </div>
            <div class="about-pic2">
                <div class="overlay">
                    <h2>Positive Impact and Value Addition</h2>
                </div>
            </div>
            <div class="about-pic3">
                <div class="overlay">
                    <h2>Efficiency and Effectiveness</h2>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About