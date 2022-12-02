import React from "react";

function Square({ text, method }) {
  let result = method ? text + method : text;
  console.log(result);

  const convert = () => {
    result = eval(result);
    console.log(result);
  };
  return (
    <>
      <div className=" border-[2px] borderblack displaybox h-[15rem] w-[25rem] mb-8 ">
        <p className=" max-w-[100%] relative top-[50%]">
          {text ? (
            <strong className="text-green-600">{result}</strong>
          ) : (
            <strong className="text-red-500 ">Please enter something!</strong>
          )}
        </p>
      </div>
      <button
        onClick={convert}
        className="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        click
      </button>
    </>
  );
}

export default Square;
