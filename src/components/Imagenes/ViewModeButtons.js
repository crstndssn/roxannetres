"use client";

import React, { useState } from "react";

const ViewModeButtons = ({ setViewMode }) => {
  const [currentMode, setCurrentMode] = useState("list");

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
    setViewMode(mode);
  };

  return (
    <div className="absolute top-[-10px] md:top-[10px] lg:top-[-23px] right-[10px] z-10">
      <button
        onClick={() => handleModeChange("list")}
        className={`text-base px-4 py-1 md:py-2 rounded-full transition-all border border-amarillo ${
          currentMode === "list" ? "bg-amarillo text-black" : "bg-black text-amarillo"
        }`}
      >
        lista
      </button>
      <button
        onClick={() => handleModeChange("grid")}
        className={`text-base px-4 py-1 md:py-2 rounded-full ml-2 transition-all border border-amarillo ${
          currentMode === "grid" ? "bg-amarillo text-black" : "bg-black text-amarillo"
        }`}
      >
        slider
      </button>
    </div>
  );
};

export default ViewModeButtons;
