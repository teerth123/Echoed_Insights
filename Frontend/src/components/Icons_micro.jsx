import React, { useState } from "react";

const IconGroup = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const icons = [
    { icon: "ri-eye-2-fill", color: "#4386fa" },
    { icon: "ri-shake-hands-fill", color: "#e44343" },
    { icon: "ri-bar-chart-fill", color: "#00fa9a" },
    { icon: "ri-hand-heart-fill", color: "#ffdb58" },
  ];

  return (
    <div className="flex justify-around -mt-8">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="transition-transform duration-200"
          style={{
            transform: hoveredIndex === index ? "scale(1.1)" : "scale(0.9)",
            color: icon.color,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <i className={`text-4xl ${icon.icon}`}></i>
        </div>
      ))}
    </div>
  );
};

export default IconGroup;
