"use client";
import Image from "next/image";
import Link from "next/link";

// CSS
import "./globals.css";
import "./index.css";

import ClientToaster from "@/components/ClientToaster";

import ParticleBackground from "@/components/ParticleBackground";
import ScrollLink from "@/components/ClientScrollLink";
import { usePathname } from "next/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <AuthContext>
        <nav className="fixed top-0 w-full z-20 backdrop-blur-sm">
          <div className="fluid-container">
            {/* Nav Content Start */}
            <div className="flex justify-between gap-x-10 h-20 items-center">
              {/* Left Side */}
              <Link
                href="/"
                className="hover:bg-white hover:bg-opacity-10 p-2 rounded-md"
              >
                <Image src="/MainLogo.png" alt="13" width={31} height={28} />
              </Link>
              <ul className="flex text-sm gap-x-8">
                <li>
                  <Link href="/program" className="hover:text-primary">
                    Programme
                  </Link>
                </li>
                <li>
                  {pathname && pathname === "/" ? (
                    <ScrollLink to="guest-speakers" offset={-50}>
                      <span className="hover:text-primary cursor-pointer">
                        Guest Speakers
                      </span>
                    </ScrollLink>
                  ) : (
                    <Link
                      className="hover:text-primary cursor-pointer"
                      href="/#guest-speakers"
                    >
                      Guest Speakers
                    </Link>
                  )}
                </li>
                <li>
                  <Link href="/guidelines" className="hover:text-primary">
                    Contest Guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="min-h-screen flex flex-col bg-dark">
            <main className="flex flex-grow flex-col">{children}</main>
            <footer className="fluid-container">Footer</footer>
          </div>
          <ClientToaster />
        </AuthContext>
      </body>
    </html>
  );
}
