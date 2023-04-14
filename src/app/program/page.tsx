"use client";

import React from "react";
import programFlow from "@/data/programFlow";
import useScrollToTop from "@/hooks/useScrollToTop";
import Image from "next/image";

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
  useScrollToTop();
  return (
    <div className="relative mt-32">
      <div className="max-w-xl mx-auto w-full px-8">
        <div className="flex items-center justify-center gap-x-5 mb-10">
          <Image alt="" src="/MainLogo.png" width={40} height={40} />
          <h1 className="font-base">
            <span className="text-primary">Reality XII</span> | PROGRAM FLOW
          </h1>
        </div>
        <div className="flex flex-col gap-y-0 font-thin">
          <h2 className="font-semibold">Registration</h2>

          <div className="h-5" />

          <h2 className="font-semibold">Opening Program</h2>
          <p className="ml-5">• Invocation</p>
          <p className="ml-5">• Philippine National Anthem</p>
          <p className="ml-5">• Opening Remarks</p>
          <p className="ml-16 font-semibold">Cedrick Angelo Rico</p>
          <p className="ml-16">President</p>
          <p className="ml-5">• Message</p>
          <p className="ml-16 font-semibold">Dr. Ma. Beth S. Concepcion</p>
          <p className="ml-16">Dean, CICT</p>

          <div className="h-5" />
          <p className="ml-5 font-semibold">- Intermission number -</p>
          <div className="h-5" />

          <h2 className="font-semibold">TECH TALK</h2>
          <p className="ml-5">• Talk 1: Augmented Reality</p>
          <p className="ml-16 font-semibold">Gabriel Luis Jesus Brioso</p>
          <p className="ml-16">• Forum</p>

          <div className="h-5" />
          <p className="ml-5 font-semibold">- Intermission number -</p>
          <div className="h-5" />

          <p className="ml-5">• Talk 2: Augmented Reality</p>
          <p className="ml-16 font-semibold">Arvin John Gestoso</p>
          <p className="ml-16">• Forum</p>

          <div className="h-5" />

          <div className="flex items-center gap-x-5">
            <div className="h-1 flex-1 bg-white" />
            <p className="font-semibold">LUNCH</p>
            <div className="h-1 flex-1 bg-white" />
          </div>

          <div className="h-5" />
          <h2 className="font-semibold">Pitching of Clash of Coders</h2>

          <div className="h-5" />
          <p className="ml-5 font-semibold">- Intermission number -</p>

          <div className="h-5" />
          <h2 className="font-semibold">CICT Pro.Motion</h2>

          <div className="h-5" />
          <h2 className="font-semibold">SineStorya - Film Showing</h2>

          <div className="h-5" />
          <h2 className="font-semibold">Awarding and Closing Program</h2>

          <div className="h-5" />
          <h2 className="font-semibold">Closing Remarks</h2>
          <p className="ml-5 font-semibold">Emmanuel John Francisco</p>
          <p className="ml-5">VP for Programs, Link.exe</p>
        </div>
      </div>
      {/* {programFlow.map((program, i) => {
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
                  <p className="ml-7 hanging-indent text-sm" key={i}>
                    {"> "}
                    {sub}
                  </p>
                );
              })}
            </div>
            <p className="font-light text-xs shrink-0">{program.time}</p>
          </div>
        );
      })} */}
      {/* SPACER */}
      <div className="mb-32" />
    </div>
  );
};

export default ProgramPage;
