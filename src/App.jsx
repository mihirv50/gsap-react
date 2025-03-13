import React, { useRef, useState } from "react";
import Animation1 from "./Components/Animation1";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Animation2 from "./Components/Animation2";
import Animation3 from "./Components/Animation3";

const App = () => {
  const [xMove, setXMove] = useState(0);
  const boxRef = useRef(null);
  const circleRef = useRef(null);
  const containerRef1 = useRef(null);
  const tl = gsap.timeline();

 const random =  gsap.utils.random(-500,500,100)
  useGSAP(()=>{
    gsap.to(boxRef.current,{
      x:xMove,
      duration:1
    })
  },[xMove])
  // useGSAP(
  //   () => {
  //     tl.from(boxRef.current, {
  //       rotate: 360,
  //       duration:1,
  //       delay:1
  //     });
  //   },
  //   { scope: containerRef1.current }
  // );  // For Animation 2
  return (
    <div className="w-screen h-screen bg-black text-teal-100 flex justify-center">
      {/* <Animation1 boxRef={boxRef}/> */}
      {/* <Animation2
        containerRef1={containerRef1}
        boxRef={boxRef}
        circleRef={circleRef}
      /> */}
      <Animation3 random={random} xMove={xMove} setXMove={setXMove} boxRef={boxRef}/>
    </div>
  );
};

export default App;
