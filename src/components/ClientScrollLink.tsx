"use client";

import { Link as ScrollLink } from "react-scroll";
import React from "react";

type ClientScrollLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
};
const ClientScrollLink = ({
  children,
  to,
  className = "",
  offset = 0,
}: ClientScrollLinkProps) => {
  return (
    <ScrollLink
      to={to}
      className={className}
      smooth={true}
      offset={offset}
      duration={400}
    >
      {children}
    </ScrollLink>
  );
};

export default ClientScrollLink;
