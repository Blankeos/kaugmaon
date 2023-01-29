"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const ClientTypeAnimation = () => {
  const [itIsReached, setITIsReached] = useState<boolean>(false);
  const [itIsFinished, setITIsFinished] = useState<boolean>(false);

  function reachedIT() {
    setITIsReached(true);
  }

  return (
    <div>
      <TypeAnimation
        // Same String at the start will only be typed once, initially
        sequence={[
          "the augmented real",
          () => {
            reachedIT();
          },
          3000,
          "the game is commencing...",
          2000,
        ]}
        speed={50} // Custom Speed from 1-99 - Default Speed: 40
        wrapper="span" // Animation will be rendered as a <span>
        repeat={Infinity} // Repeat this Animation Sequence infinitely
        cursor={false}
        className="typewriter"
      />
      {itIsReached && (
        <TypeAnimation
          sequence={[
            "IT",
            () => {
              // finishedIT();
            },
            5000,
          ]}
          speed={50}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
          className="text-primary"
        />
      )}
    </div>
  );
};

export default ClientTypeAnimation;
