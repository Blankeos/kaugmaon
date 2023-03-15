"use client";

import Link from "next/link";
import React from "react";

interface IClientLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => any;
  scroll?: boolean;
}

const ClientLink: React.FC<IClientLinkProps> = ({
  href,
  className = "",
  children,
  onClick = () => {},
  scroll,
}) => {
  return (
    <Link href={href} className={className} onClick={onClick} scroll={scroll}>
      {children}
    </Link>
  );
};

export default ClientLink;
