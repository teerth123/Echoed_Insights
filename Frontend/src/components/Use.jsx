import React from "react";
import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from "../@/components/ui/glowing-stars";


export default function Use({ heading, desc, iconClassName, color }) {
  return (
    <GlowingStarsBackgroundCard className="border border-[#363636] w-[420px] p-2 rounded"> {/* Fixed width component */}
      <div className="flex items-center mb-2">
        <div className={`text-4xl ${color} mr-2`}>
          <i className={iconClassName}></i>
        </div>
        <GlowingStarsTitle>{heading}</GlowingStarsTitle> {/* Use the new title component */}
      </div>
      <GlowingStarsDescription>{desc}</GlowingStarsDescription> {/* Use the new description component */}
    </GlowingStarsBackgroundCard>
  );
}
