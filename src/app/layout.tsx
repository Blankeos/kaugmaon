"use client";
import Image from "next/image";
import Link from "next/link";

// CSS
import "./globals.css";
import "./index.css";

import ClientToaster from "@/components/ClientToaster";

import AuthContext from "@/context/AuthContext";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollLink from "@/components/ClientScrollLink";
import { usePathname } from "next/navigation";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthContext>
          <QueryClientProvider client={queryClient}>
            <nav className="fixed top-0 w-full z-20 backdrop-blur-sm">
              <div className="fluid-container">
                {/* Nav Content Start */}
                <div className="flex justify-between gap-x-10 h-20 items-center">
                  {/* Left Side */}
                  <Link
                    href="/"
                    className="hover:bg-white hover:bg-opacity-10 p-2 rounded-md"
                  >
                    <Image
                      src="/MainLogo.png"
                      alt="13"
                      width={31}
                      height={28}
                    />
                  </Link>
                  <ul className="flex text-sm gap-x-8">
                    <li>
                      <Link href="/program" className="hover:text-primary">
                        Programme
                      </Link>
                    </li>
                    <li>
                      {pathname && pathname !== "/" ? (
                        <Link
                          scroll={false}
                          className="hover:text-primary cursor-pointer"
                          href="/#guest-speakers"
                        >
                          Guest Speakers
                        </Link>
                      ) : (
                        <ScrollLink to="guest-speakers" offset={-50}>
                          <span className="hover:text-primary cursor-pointer">
                            Guest Speakers
                          </span>
                        </ScrollLink>
                      )}
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
            <div className="min-h-screen flex flex-col overflow-hidden">
              <ParticleBackground />
              <main className="flex flex-grow flex-col">{children}</main>
              <footer className="fluid-container">Footer</footer>
            </div>
            <ClientToaster />
          </QueryClientProvider>
        </AuthContext>
      </body>
    </html>
  );
}
