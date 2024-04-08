import React from "react";
import { gsap } from "gsap";
import './test.css';

const Test = () => {

 gsap.to( ".square", { 
    rotate: 360 ,
    scale : 2
})

  return (
    <>
      <div className="square">Hello World</div>
    </>
  )
}
export default Test