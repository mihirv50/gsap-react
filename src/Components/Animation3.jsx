import React from "react";

const Animation3 = ({boxRef , xMove , setXMove}) => {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <button onClick={()=>setXMove(xMove+50)} className="button px-3 py-2 rounded-md bg-linear-to-bl from-violet-500 to-fuchsia-500">
        Animate Box
      </button>
      <div ref={boxRef} className="box w-[300px] h-[300px] rounded-md bg-linear-to-r from-cyan-500 to-blue-500"></div>
    </div>
  );
};

export default Animation3;
