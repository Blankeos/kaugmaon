"use client";

import React from "react";
import programFlow from "@/data/programFlow";
import ScrollUp from "@/components/ScrollUp";

type RomanMatrixType = [number, string][];

const romanMatrix: RomanMatrixType = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function convertToRoman(num: number): string {
  if (num === 0) {
    return "";
  }
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
    }
  }
  return "";
}

const ProgramPage = () => {
  return (
    <div className="mt-32">
      <ScrollUp />
      {programFlow.map((program, i) => {
        return (
          <div
            key={i}
            className="flex justify-between py-3 fluid-container gap-x-10"
          >
            <div>
              <h1 className="text-bold">
                {convertToRoman(i + 1)}. {program.header}
              </h1>
              {program.subheader.map((sub, i) => {
                return (
                  <p className="ml-14 hanging-indent" key={i}>
                    {sub}
                  </p>
                );
              })}
            </div>
            <p className="font-bold">{program.time}</p>
          </div>
        );
      })}
      {/* SPACER */}
      <div className="mb-32" />
    </div>
  );
};

export default ProgramPage;
