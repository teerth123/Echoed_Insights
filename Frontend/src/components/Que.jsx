import React, { useState } from "react";

export default function Que({ que, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex justify-between items-center w-[900px] mx-auto cursor-pointer" onClick={handleToggle}>
                <h1 className="text-white font-inter">{que}</h1>
                <div className="text-4xl text-white mr-2">
                    <i className={`ri-arrow-${isOpen ? 'up' : 'down'}-wide-line`}></i>
                </div>
            </div>
            {isOpen && (
                <div className="text-white w-[900px] mx-auto p-2">
                    <p>{answer}</p>
                </div>
            )}
            <hr className="w-[900px] mx-auto border-gray-500" />
        </>
    );
}
