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

import { QueryClient, QueryClientProvider } from "react-query";
import GoogleLoginButton from "@/components/GoogleLoginButton";

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
                      <Link
                        href="/guidelines/mini_film"
                        className="hover:text-primary"
                      >
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
              {!useRoutesAreShownOn(["/ticket"]) && (
                <footer className="relative flex flex-col gap-y-8">
                  <div className="fluid-container">
                    <div className="bg-primary py-16 rounded-2xl flex flex-col items-center gap-y-2 transition hover:ring-2 hover:ring-green-500">
                      <h3 className="text-center text-dark font-extrabold text-2xl">
                        Ready for RealITy?
                      </h3>
                      <p className="text-gray-600 mb-5">
                        Get your event ticket
                      </p>
                      <GoogleLoginButton scheme="onLight" />
                    </div>
                  </div>
                  <div className="bg-black border-t">
                    <div className="fluid-container px-7 py-20 grid grid-cols-2">
                      <div>
                        <Image
                          src={"/WhiteLogo.png"}
                          width={40}
                          height={40}
                          alt="main logo"
                        />
                        <p className="mt-5 tracking-widest font-azonix">
                          KAUGMAON
                        </p>
                        <p className="text-sm text-gray-400">
                          Link.EXE Real<span className="text-primary">IT</span>y
                        </p>
                        <p className="mt-4 text-xs text-gray-400">
                          Made with 💚
                          <br />
                          by Carlo, Asther, and Jed
                        </p>
                      </div>
                      <ul className="text-sm text-gray-200 flex flex-col gap-y-4">
                        <li>
                          <Link
                            href="/program"
                            className="hover:text-primary transition"
                          >
                            Programme
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/guidelines/mini_film"
                            className="hover:text-primary transition"
                          >
                            Contest Guidelines
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/privacy-policy"
                            className="hover:text-primary transition"
                          >
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </footer>
              )}
            </div>
            <ClientToaster />
          </QueryClientProvider>
        </AuthContext>
      </body>
    </html>
  );
}

function useRoutesAreShownOn(paths: string[]): boolean {
  const currentPathname = usePathname();

  if (currentPathname == null) return false;
  return paths.includes(currentPathname);
}
