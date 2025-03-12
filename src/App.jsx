import React, { useRef } from "react";
import Animation1 from "./Components/Animation1";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Animation2 from "./Components/Animation2";

const App = () => {
  const boxRef = useRef(null);
  const circleRef = useRef(null);
  const containerRef1 = useRef(null);
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.from(boxRef.current, {
        rotate: 360,
        duration:1,
        delay:1
      });
    },
    { scope: containerRef1.current }
  );
  return (
    <div className="w-screen h-screen bg-black text-teal-100 flex items-center justify-center">
      {/* <Animation1 boxRef={boxRef}/> */}
      <Animation2
        containerRef1={containerRef1}
        boxRef={boxRef}
        circleRef={circleRef}
      />
    </div>
  );
};

export default App;
