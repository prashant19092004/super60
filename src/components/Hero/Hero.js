import React from 'react'
import '../../style.css';

const Hero = () => {
  return (
    <div>
        <div className="hero flex">
            <p>A specialized group of 60 CSE students undergo comprehensive training in advanced modules to ensure 100% placement in campus drives.</p>
            <div className="hero-buttons flex">
                <a href="#" className="btn">
                    <div className="ani1"></div>
                    <div className="ani2-elem2" style={{height : 18+"px"}}><div className="ani2">view trainings<br/><span className="ani2-elem">see programs</span></div></div>
                </a>
                <a href="#" className="btn">
                    <div className="ani1"></div>
                    <div className="ani2-elem2" style={{height : 18+"px"}}><div className="ani2">view services<br/><span className="ani2-elem">our solutions</span></div></div>
                </a>
            </div>
            <a href="#" className="mouse flex">
                <div className="mouse-dot"></div>
            </a>
        </div>
    </div>
  )
}

export default Hero