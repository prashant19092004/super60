import React, { useEffect } from 'react'
import Pic1 from '../../assets/pic1.jpeg';
import Pic2 from '../../assets/pic2.jpeg';
import Pic3 from '../../assets/pic3.jpeg';
import Pic4 from '../../assets/pic4.jpeg';
import Pic5 from '../../assets/pic5.jpeg';
import Pic6 from '../../assets/pic6.jpeg';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Slider = () => {
    

    useEffect(() => {

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
        scale:isDesktop ? 5 : 1,
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


    gsap.fromTo(".sixth-first-slider",{
        x:isDesktop ? 200 : 0,
      }, {
        x:-700,
        scrollTrigger:{
            scroller : "body",
            trigger : ".sixth-first-slider",
            // markers : true,
            start : "top 100%",
            end : "top -100%",
            scrub : 1
        }
    })
    gsap.fromTo(".sixth-second-slider", {
        x:isDesktop ? -600 : 0,
      },{
        x:280,
        scrollTrigger:{
            scroller : "body",
            trigger : ".sixth-second-slider",
            // markers : true,
            start : "top 100%",
            end : "top -100%",
            scrub : 1
        }
    })
});
    }, []);



    
  return (
    <div>
        <div className="sixth-section">
            <div className="sixth-first slider sixth-first-slider">
                <div className="first-img img-div check">
                    <img className="sixth-img" src={Pic1} alt="" />
                    <div className="scroller">
                        <div className="scroller-in">
                            <h4>Stand design</h4>
                            <h4>Stand design</h4>
                            <h4>Stand design</h4>
                        </div>
                    </div>
                </div>
                <div className="sec-img img-div">
                    <img className="sixth-img" src={Pic2} alt="" />
                    <div className="scroller">
                        <div className="scroller-in">
                            <h4>branding design</h4>
                            <h4>branding design</h4>
                            <h4>branding design</h4>
                        </div>
                    </div>
                </div>
                <div className="first-img img-div">
                    <img className="sixth-img" src={Pic3} alt="" />
                    <div className="scroller">
                        <div className="scroller-in">
                            <h4>digital marketing</h4>
                            <h4>digital marketing</h4>
                            <h4>digital marketing</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sixth-second slider sixth-second-slider">
                <div className="first-img img-div">
                    <img className="sixth-img" src={Pic4} alt="" />
                    <div className="scroller">
                        <div className="scroller-in">
                            <h4>design business card</h4>
                            <h4>design business card</h4>
                            <h4>design business card</h4>
                        </div>
                    </div>
                </div>
                <div className="sec-img img-div">
                    <img className="sixth-img" src={Pic5} alt="" /> 
                    <div className="scroller">
                        <div className="scroller-in">
                            <h4>web design & ux/ui</h4>
                            <h4>web design & ux/ui</h4>
                            <h4>web design & ux/ui</h4>
                        </div>
                    </div>
                </div>
                <div className="first-img img-div">
                    <img className="sixth-img" src={Pic6} alt="" />
                    <div className="scroller">
                        <div className="scroller-in">
                            <h4>strategy business</h4>
                            <h4>strategy business</h4>
                            <h4>strategy business</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider