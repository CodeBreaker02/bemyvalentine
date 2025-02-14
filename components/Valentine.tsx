"use client";

import React, { useState } from "react";
import BearToggle from "@/components/BearToogle";

const Valentine = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [scale, setScale] = useState(1);

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  const handleNoHover = () => {
    setScale((prev) => prev + 0.1);
  };

  return (
    <div className="valentine-container">
      {!showSuccess ? (
        <>
          <h1 className="valentine-text">Will you be my Valentine?</h1>
          <div className="buttons-container">
            <button onClick={handleYesClick} className="yes-button">
              Yes 💝
            </button>
            <div
              className="no-button-container"
              style={{ transform: `scale(${scale})` }}
              onMouseEnter={handleNoHover}
            >
              <BearToggle />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h1 className="valentine-text">Yay! I love you! 💖</h1>
          <p className="text-xl text-center text-rose-600">
            Thank you for making me the happiest person! 🥰
          </p>
        </div>
      )}
    </div>
  );
};

export default Valentine;
