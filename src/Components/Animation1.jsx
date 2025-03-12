import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Animation1 = ({ boxRef }) => {
  return <div ref={boxRef} className="box w-[300px] h-[300px] rounded-md bg-red-300"></div>;
};

export default Animation1;
