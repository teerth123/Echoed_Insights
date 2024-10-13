import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const nav = useNavigate()
  return (
    <div className="flex justify-between items-center w-full px-0 py-4 bg-black">
      <div className="flex-shrink-0 ml-0">
        <h1 className="font-signika text-[40px] text-white">Echoed Insights</h1>
      </div>
      
      <div className="flex space-x-4 mr-0">
        <div className="p-3 bg-[#27272A] font-inter font-bold text-white rounded" onClick={() => nav('/signin')}>
          Sign-in
        </div>
        <div className="flex items-center p-3 bg-[#27272A] font-inter text-white rounded font-bold border border-[#575454]" onClick={() =>window.open('https://www.youtube.com/@WCEWaveCreativeEcho', '_blank')}>
          <p className="mr-2">YouTube</p>
          <i className="ri-youtube-fill text-[#FF0101] text-xl"></i>
        </div>
      </div>
    </div>
  );
}