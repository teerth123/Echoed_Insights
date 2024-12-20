"use client";
import React, { useState } from "react";
import { Label } from "../@/components/ui/ui/label";
import { Input } from "../@/components/ui/ui/input";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export default function BeforeStart() {
    const [walchandiate, setWalchandiate] = useState(null);
    const [role, setRole] = useState(null);
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (walchandiate === null) {
            alert("Please select an option before proceeding.");
            return;
        }
        console.log("Form submitted with options:", {
            walchandiate,
            role,
        });
        // Add your form submission logic here
    };

    return (
        <>
            <div className="flex justify-between items-center w-full px-0 py-4 bg-black">
                <div className="flex-shrink-0 ml-0">
                    <h1 className="font-signika text-[40px] text-white" onClick={() => nav('/')}>Echoed Insights</h1>
                </div>
                
                <div className="flex space-x-4 mr-0">
                    <div className="flex items-center p-3 bg-[#27272A] font-inter text-white rounded font-bold border border-[#575454]" onClick={() => window.open('https://www.youtube.com/@WCEWaveCreativeEcho', '_blank')}>
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
                    <BeforeQue
                        que={"Are you <b>Walchandiate?</b>"}
                        optionA={"Yes"}
                        optionB={"No"}
                        walchandiate={walchandiate}
                        setWalchandiate={setWalchandiate}
                    />
                    
                    {/* Conditional rendering of the second question */}
                    {walchandiate === 'yes' && (
                        <BeforeQue
                            que={"Are you?"}
                            optionA={"Undergrad"}
                            optionB={"Alumni"}
                            walchandiate={role}
                            setWalchandiate={setRole}
                        />
                    )}

                    {role === 'Undergrad'?  
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="password">PRN</Label>
                            <Input id="password" placeholder="••••••••" type="password" />
                        </LabelInputContainer> : console.log("alumni")
                    }

                    
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">OTP</Label>
                        <Input id="password" placeholder="••••••••" type="password" />
                    </LabelInputContainer>

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

function BeforeQue({ que, optionA, optionB, walchandiate, setWalchandiate }) {
    return (
        <div className="flex justify-around border border-[#363636] p-5 rounded mb-5">
            <h1 className="text-white font-inter text-2xl " dangerouslySetInnerHTML={{ __html: que }} />
            <div className="ml-5">
                <div className="flex m-2" onClick={() => setWalchandiate('yes')}>
                    <div className={`rounded-full w-6 h-6 cursor-pointer transition-all duration-300 ease-in-out ${walchandiate === 'yes' ? 'bg-[#4BD834] shadow-[0_0_10px_#4BD834]' : 'bg-[#D9D9D9] hover:shadow-[0_0_10px_#D9D9D9]'}`}></div>
                    <h1 className="text-white font-inter ml-3">{optionA}</h1>
                </div>
                <div className="flex m-2" onClick={() => setWalchandiate('no')}>
                    <div className={`rounded-full w-6 h-6 cursor-pointer transition-all duration-300 ease-in-out ${walchandiate === 'no' ? 'bg-[#4BD834] shadow-[0_0_10px_#4BD834]' : 'bg-[#D9D9D9] hover:shadow-[0_0_10px_#D9D9D9]'}`}></div>
                    <h1 className="text-white font-inter ml-3">{optionB}</h1>
                </div>
            </div>
        </div>
    );
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
