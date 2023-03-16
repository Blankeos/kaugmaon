"use client";

import Image from "next/image";

// CSS
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/nprogress.css";

import ClientToaster from "@/components/ClientToaster";

import AuthContext from "@/context/AuthContext";
import ParticleBackground from "@/components/ParticleBackground";
import { motion } from "framer-motion";

import { QueryClient, QueryClientProvider } from "react-query";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import { EntryAnimationContextProvider } from "@/context/EntryAnimationContext";
import Link from "@/components/ClientLink";

import NProgress from "nprogress";
import { useNavigation } from "@/hooks/useRouteChanged";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useNavigation({
    on: {
      routeChanged({ pathname, searchParams }) {
        console.log("NProgress Done");
        NProgress.done();
      },
    },
  });
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthContext>
          <EntryAnimationContextProvider>
            <QueryClientProvider client={queryClient}>
              <Nav />
              {/* Particle Background */}
              <div className="min-h-screen flex flex-col overflow-hidden">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <ParticleBackground />
                </motion.div>

                {/* BODY */}
                <main className="flex flex-grow flex-col">{children}</main>

                {/* FOOTER */}
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
                            Link.EXE Real
                            <span className="text-primary">IT</span>y
                          </p>
                          <p className="mt-4 text-xs text-gray-400">
                            Made with 💚
                            <br />
                            by{" "}
                            <Link
                              className="underline text-primary hover:no-underline"
                              href="https://carlo.vercel.app"
                            >
                              Carlo
                            </Link>
                            ,{" "}
                            <Link
                              className="underline text-primary hover:no-underline"
                              href="https://asther.vercel.app"
                            >
                              Asther
                            </Link>
                            , and{" "}
                            <Link
                              className="underline text-primary hover:no-underline"
                              href="https://jed.vercel.app"
                            >
                              Jed
                            </Link>
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
                              href="/guidelines/cict_pro_motion"
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
          </EntryAnimationContextProvider>
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
