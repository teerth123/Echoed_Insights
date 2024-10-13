"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export default function BeforeStart() {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const nav = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedOption === null) {
            alert("Please select an option before proceeding.");
            return;
        }
        console.log("Form submitted with option:", selectedOption);
        // Add your form submission logic here
    };

    return (
        <>
            <div className="flex justify-between items-center w-full px-0 py-4 bg-black">
                <div className="flex-shrink-0 ml-0">
                    <h1 className="font-signika text-[40px] text-white" onClick={()=>{nav('/')}}>Echoed Insights</h1>
                </div>
                
                <div className="flex space-x-4 mr-0">
                    <div className="flex items-center p-3 bg-[#27272A] font-inter text-white rounded font-bold border border-[#575454]" onClick={() =>window.open('https://www.youtube.com/@WCEWaveCreativeEcho', '_blank')}>
                        <p className="mr-2">YouTube</p>
                        <i className="ri-youtube-fill text-[#FF0101] text-xl"></i>
                    </div>
                </div>
            </div>
            <div className="max-w-md w-full mt-5 mx-auto rounded border border-[#575454] md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
                    Before we start
                </h2>
                
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                <form className="my-8 mt-14" onSubmit={handleSubmit}>
            
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                        <h1 className="text-white font-inter text-2xl">Are you <b>Walchandiate?</b></h1>
                        <div className=" sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <div className="flex items-center cursor-pointer" onClick={() => handleOptionClick('yes')}>
                                <div className={`rounded-full w-6 h-6 cursor-pointer transition-all duration-300 ease-in-out
                                    ${selectedOption === 'yes' 
                                    ? 'bg-[#4BD834] shadow-[0_0_10px_#4BD834]' 
                                    : 'bg-[#D9D9D9] hover:shadow-[0_0_10px_#D9D9D9]'
                                    }`}>
                                </div>
                                <h1 className="text-white ml-2">Yes</h1>
                            </div>
                            <div className="flex items-center cursor-pointer" onClick={() => handleOptionClick('no')}>
                                <div className={`rounded-full w-6 h-6 cursor-pointer transition-all duration-300 ease-in-out
                                    ${selectedOption === 'no' 
                                    ? 'bg-[#4BD834] shadow-[0_0_10px_#4BD834]' 
                                    : 'bg-[#D9D9D9] hover:shadow-[0_0_10px_#D9D9D9]'
                                    }`}>
                                </div>
                                <h1 className="text-white ml-2">No</h1>
                            </div>
                        </div>
                    </div>
            
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                    <div className="flex flex-col space-y-4">
                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit">
                            Let's Go!!!&rarr;
                            <BottomGradient />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

const BeforeQues=()=>{
    return(
        <>
        
        </>
    )
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};