"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        onClick();
        NProgress.start();
        console.log("NProgress Start");

        if (pathname === href) {
          NProgress.done();
        }
      }}
      scroll={scroll}
    >
      {children}
    </Link>
  );
};

export default ClientLink;
