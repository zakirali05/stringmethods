import React from "react";

function Square({ text }) {
  return (
    <div className=" border-[2px] borderblack displaybox h-[15rem] w-[25rem] mb-8 ">
      <p className=" relative top-[50%]">
        {text ? (
          <strong>{text}</strong>
        ) : (
          <strong className="text-red-500">Please enter something!</strong>
        )}
      </p>
    </div>
  );
}

export default Square;
