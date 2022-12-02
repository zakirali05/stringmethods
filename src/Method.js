import React from "react";

function Method({ method, setMethod }) {
  return (
    <div className="border-black-600 border-[3px] mb-8  w-[50%] sm:w-[50%] md:w-[25%]">
      <input
        type="text"
        className="w-[100%]"
        placeholder="enter method here"
        value={method}
        onChange={(e) => {
          setMethod(e.target.value);
        }}
      />
    </div>
  );
}

export default Method;
