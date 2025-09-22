import React from "react";

const Loader = ({ size = 8 }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2  success-color`}
      ></div>
    </div>
  );
};

export default Loader;
