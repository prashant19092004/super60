import React, { useEffect, useState } from 'react'
import logo from '../../assets/s60logo.png';
import '../../style.css';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    useEffect(() => {
    gsap.to(".nav", {
        height : 90,
        backgroundColor : "#151414",
        // overflow : "hidden",
        scrollTrigger:{
            scroller:"body",
            trigger: ".nav",
            // markers : true,
            start : "top -10%",
            end : "top -60%",
            scrub : 0
        }
    })


    let mm = gsap.matchMedia();
    let breakPoint = 990;

    mm.add({
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    
    }, (context) => {
    
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let { isDesktop, isMobile, reduceMotion } = context.conditions;

    
      gsap.fromTo(".logo",{
        scale:isDesktop ? 3.3 : 1,
        y:isDesktop ? 170 : 0,
      }, {
        scale:1,
        y:0,
        scrollTrigger : {
            scroller: "body",
            trigger : ".nav",
            // markers : true,
            start : "top 0%",
            end : "top -70%",
            // start : "top 97%",
            // end : "top 10%",
            scrub : 1 
        }
    })
  //   gsap.to(".navbar1", {
  //     overflow : "hidden",
  //     scrollTrigger:{
  //         scroller:"body",
  //         trigger: ".nav",
  //         markers : true,
  //         start : "top 0%",
  //         end : "top -60%",
  //         scrub : 0
  //     }
  // })
    }); 

//     gsap.registerPlugin(ScrollTrigger);
    
//     console.log(mm);



// mm.add("(min-width: 990px)", () => {
//     gsap.from(".logo", {
//         scale:6.25,
//         y:190,
//         scrollTrigger : {
//             scroller: "body",
//             trigger : ".video-sec",
//             markers : true,
//             start : "top 97%",
//             end : "top 10%",
//             scrub : 0 
//         }
//     })

//     gsap.to(".nav", {
//         overflow : "hidden",
//         scrollTrigger:{
//             scroller:"body",
//             trigger: ".video-sec",
//             // markers : true,
//             start : "top 30%",
//             end : "top -30%",
//             scrub : 0
//         }
//     })
// });
    }, []);
    
    const menuButton = document.getElementsByClassName('.menu');
    console.log(menuButton);
    let clicked = false;
    
    let menuEffect =  () => {
        const menu = document.querySelector(".left-nav ul");
        const menuFirst = document.querySelector(".menu .first");
        const menuSecond = document.querySelector(".menu .sec");
    
        if(clicked === false){
            menu.style.transform = "translateY(0%)";
            menuFirst.style.transform = "rotate(45deg)";
            menuSecond.style.transform = "rotate(-45deg)";
            clicked = true;
        }
        else{
            menu.style.transform = "translateY(-100%)";
            menuFirst.style.transform = "rotate(0deg)"
            menuSecond.style.transform = "rotate(0deg)";
            clicked = false;
        }
    
    }

    

//responsive



  return (
    <div>
        <div className="navbar1 flex">
            <img src={logo} className="logo" alt=""/>
            <div className="menu" onClick={menuEffect}>
                <div className="first"></div>
                <div className="sec"></div>
            </div>
            <div className="left-nav flex">
                <ul className="flex nav-ul">
                    <a href="work.html"><li className='nav-list-item'>
                        <div className="ani1"></div>
                        <div className="ani2-elem2"><div className="ani2">work<br/><span className="ani2-elem">work</span></div></div>
                    </li></a>
                    <a href="academy.html"><li className='nav-list-item'>
                        <div className="ani1"></div>
                        <div className="ani2-elem2"><div className="ani2">academy<br/><span className="ani2-elem">academy</span></div></div>
                    </li></a>
                    <a href="about.html"><li className='nav-list-item'>
                        <div className="ani1"></div>
                        <div className="ani2-elem2"><div className="ani2">about<br/><span className="ani2-elem">about</span></div></div>
                    </li></a>
                    <a href="news.html"><li className='nav-list-item'>
                        <div className="ani1"></div>
                        <div className="ani2-elem2"><div className="ani2">news<br/><span className="ani2-elem">news</span></div></div>
                    </li></a>
                </ul>
            </div>
            <div className="right-nav flex">
                <ul className="flex nav-ul">
                    <a href="index.html"><li className='nav-list-item'>
                        <div className="ani1"></div>
                        <div className="ani2-elem2"><div className="ani2">ebusiness<br/><span className="ani2-elem">ebusiness</span></div></div>
                    </li></a>
                    <a href="index.html"><li className='nav-list-item'>
                        <div className="ani1"></div>
                        <div className="ani2-elem2"><div className="ani2">pt<br/><span className="ani2-elem">pt</span></div></div>
                    </li></a>
                </ul>
                <a href="contact.html" className="btn">
                    <div className="ani1"></div>
                    <div className="ani2-elem2" style={{height: 18+"px"}}><div className="ani2">contact us<br/><span className="ani2-elem">why delays?</span></div></div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
