import React from "react";
import Link from "next/link";

interface ClientRouteProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}
const ClientRoute: React.FC<ClientRouteProps> = ({
  children,
  href,
  className = "",
}) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default ClientRoute;
