import React from "react";

const Animation2 = ({ boxRef, circleRef, containerRef1 }) => {
  return (
    <div className="flex items-center justify-center gap-20">
      <div ref={containerRef1} className="container1 border-3 p-4">
        <div
          ref={boxRef}
          className="box w-[300px] h-[300px] mb-5 rounded-md bg-linear-to-bl from-violet-500 to-fuchsia-500"
        ></div>
        <div
          ref={circleRef}
          className="circle w-[300px] h-[300px] rounded-full bg-linear-to-t from-sky-500 to-indigo-500"
        ></div>
      </div>
      <div className="container2 border-3 p-4">
        <div
          
          className="box w-[300px] h-[300px] mb-5 rounded-md bg-linear-to-bl from-violet-500 to-fuchsia-500"
        ></div>
        <div
         
          className="circle w-[300px] h-[300px] rounded-full bg-linear-to-t from-sky-500 to-indigo-500"
        ></div>
      </div>
    </div>
  );
};

export default Animation2;
