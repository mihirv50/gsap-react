import React, { useRef } from "react";
import Animation1 from "./Components/Animation1";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const boxRef = useRef(null);

  useGSAP(()=>{
    gsap.from(boxRef.current,{
      x:600,
      delay:1,
      duration:2
    })
  })
  return (
    <div className="w-screen h-screen bg-black text-teal-100 ">
      <Animation1 boxRef={boxRef}/>
    </div>
  );
};

export default App;
