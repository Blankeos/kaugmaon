import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";
import ClientToaster from "@/components/ClientToaster";

import AuthContext from "@/context/AuthContext";

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <AuthContext> */}
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
                  <Link href="/speakers" className="hover:text-primary">
                    Guest Speakers
                  </Link>
                </li>
                <li>
                  <Link href="/guidelines" className="hover:text-primary">
                    Contest Guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="min-h-screen flex flex-col bg-dark">
          <main className="flex flex-grow flex-col">{children}</main>
          <footer className="fluid-container">Footer</footer>
        </div>
        <ClientToaster />
        {/* </AuthContext> */}
      </body>
    </html>
  );
}
