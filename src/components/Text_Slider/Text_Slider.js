import React from 'react'
import './text_slider.css';
import '../../style.css';

const Text_Slider = () => {

    const scroller = document.querySelectorAll(".scroller-in h4");

scroller.forEach((item) => {
    item.addEventListener("mouseover", (idx)=> {
        console.log("hii");
        item.style.color="#123558";
        item.style.webkitTextStroke="#123558";
    })
    item.addEventListener("mouseout", (idx)=> {
        console.log("hii");
        item.style.color="transparent";
        item.style.webkitTextStroke="2px #123558";
    })
})
  return (
    <div>
        <div className="scroller" style={{marginBlock: 50+"px"}}>
            <div className="scroller-in">
                <h4>Super 60</h4>
                <h4>Super 60</h4>
                <h4>Super 60</h4>
                <h4>Super 60</h4>
                <h4>Super 60</h4>
                <h4>Super 60</h4>
                <h4>Super 60</h4>
                <h4>Super 60</h4>
                <h4>Super 60</h4>
                <h4>Super 60</h4>
            </div>
        </div>
    </div>
  )
}

export default Text_Slider