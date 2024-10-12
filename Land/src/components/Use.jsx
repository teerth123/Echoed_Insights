import React from "react";

export default function Use({ heading, desc, iconClassName, color }) {
  return (
    <>
      <div className="border border-[#363636] w-[420px] p-2 rounded"> {/* Fixed width component */}
        <div className="flex items-center mb-2">
          {/* Applying iconClassName and color dynamically */}
          <div className={`text-4xl ${color} mr-2`}>
            <i className={iconClassName}></i>
          </div>
          <h1 className="text-white font-bold font-inter text-[20px]">{heading}</h1>
        </div>
        <h3 className="text-white mt-2 font-inter ml-0">
          {desc}
        </h3>
      </div>
    </>
  );
}
