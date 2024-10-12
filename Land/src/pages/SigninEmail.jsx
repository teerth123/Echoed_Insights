import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SigninWithEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center w-full px-4 py-4 bg-black">
        <div className="flex-shrink-0">
          <h1 className="font-signika text-[40px] text-white cursor-pointer" onClick={() => navigate('/')}>Echoed Insights</h1>
        </div>
        <div className="flex space-x-4">
          <div className="p-3 bg-[#27272A] font-inter font-bold text-white rounded cursor-pointer">
            Login
          </div>
          <div className="flex items-center p-3 bg-[#27272A] font-inter text-white rounded font-bold border border-[#575454] cursor-pointer" onClick={() => window.open('https://www.youtube.com/@WCEWaveCreativeEcho', '_blank')}>
            <p className="mr-2">YouTube</p>
            <i className="ri-youtube-fill text-[#FF0101] text-xl"></i>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-[54px] mb-14">Sign-in with Email</h1>
        
        <div className="bg-[#0A0A0A] rounded border border-[#353535] p-8 w-full max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="bg-[#535353] rounded-[12px] w-44 h-44 mb-8 md:mb-0 border border-[#818181]">
              {/* App logo goes here */}
            </div>
            <form className="font-Albert w-full md:w-auto" onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="text-[34px] font-light bg-[#C3C3C3] px-7 py-5 rounded-[14px] border-4 border-[#828FFF] w-full"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="text-[34px] font-light bg-[#C3C3C3] px-7 py-5 rounded-[14px] border-4 border-[#2C901C] w-full"
                  required
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex text-white border border-[#7B7676] font-bold font-inter p-5 text-2xl rounded-[12px] mt-8 justify-center">
            <h1 className="px-1">Let's Go!!!</h1>
            <i className="ri-arrow-right-line text-white px-1"></i>
        </div>

        <h1 className="font-Albert text-[#717171] mt-10 text-[24px] text-center">
          By signing in you agree to our <b className="text-white">Terms and conditions.</b>
        </h1>
        
        <div className="font-Albert text-[#717171] mt-7 text-[24px] flex items-center">
          <h1 className="mr-2">Already have an account?</h1>
          <div className="flex items-center text-white cursor-pointer">
            <h1 className="mr-1">Login here</h1>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
