import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { getGuidelinesList } from "./[slug]/page";
import Nav from "./Nav";

let guideslinesData = getGuidelinesList();

interface GuidelinesLayoutProps {
  children: React.ReactNode;
}
const GuidelinesLayout = ({ children }: GuidelinesLayoutProps) => {
  return (
    <div>
      <div className="SPACER h-20" />
      <div className="fluid-container px-7">
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-5">Contests</h2>
          <div className="flex flex-wrap gap-2">
            <Nav guidelinesData={guideslinesData} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default GuidelinesLayout;
