"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const ClientTypeAnimation = () => {
  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[
        "the augmented realITy",
        3000,
        "the game is commencing...",
        2000,
      ]}
      speed={50} // Custom Speed from 1-99 - Default Speed: 40
      wrapper="span" // Animation will be rendered as a <span>
      repeat={Infinity} // Repeat this Animation Sequence infinitely
    />
  );
};

export default ClientTypeAnimation;
