"use client";

import Image from "next/image";
import styles from "./page.module.css";
import guestSpeakers from "@/data/guestSpeakers";

import { signIn, signOut, useSession } from "next-auth/react";

// START: Icons
import {
  MdArrowForward as ForwardIcon,
  MdOutlineEmail as EmailIcon,
  MdOutlineFacebook as FacebookIcon,
  MdReceipt as TicketIcon,
} from "react-icons/md";

import { FcGoogle as GoogleIcon } from "react-icons/fc";

// END: Icons

import { TypeAnimation } from "react-type-animation";
import ClientTypeAnimation from "@/components/ClientTypeAnimation";

import ScrollLink from "@/components/ClientScrollLink";

import Link from "next/link";
import { useState } from "react";
import Loader from "@/components/Loader";

export default function Home() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSignIn() {
    setLoading(true);
    await signIn("google", {
      callbackUrl: "/ticket",
    });

    setTimeout(() => {
      setLoading(false);
    }, 12000);
  }
  return (
    <>
      {/* Hero */}
      <div className="fluid-container flex-1 flex flex-col">
        <div className="flex flex-col items-center justify-center flex-1 flex-shrink-0 min-h-screen relative">
          <div className="flex flex-col items-center gap-y-5 text-center">
            <div className="relative">
              <div className={styles.thirteen}>
                <Image
                  src="/MainLogo.png"
                  alt="13"
                  width={40}
                  height={31}
                  priority
                />
              </div>
            </div>
            <h1 className="tracking-widest text-4xl md:text-5xl">KAUGMAON</h1>
          </div>
          <p className="text-xl text-center text-gray-300">
            the augmented real<span className="text-primary">IT</span>y
          </p>
          <p className="text-primary text-sm text-center mt-10">
            February 17, 2023{" "}
            <span className="text-cyan-400">@ WVSU Cultural Center</span>
          </p>
          <div className="flex flex-col items-center gap-y-2 mt-16">
            {status !== "loading" ? (
              session ? (
                <div className="text-center">
                  <Link
                    href="/ticket"
                    className="border rounded-full flex gap-x-5 items-center px-3 py-2 w-[25rem] justify-center hover:bg-white hover:text-dark cursor-pointer transition"
                  >
                    <TicketIcon className="w-5 h-5 grid place-items-center" />
                    <span>View my Ticket</span>
                  </Link>
                  <button
                    className="text-xs text-white/70 hover:text-red-400"
                    onClick={() => signOut()}
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => {
                      handleSignIn();
                    }}
                    className="group lds-ellipsis-button border rounded-full flex gap-x-5 items-center px-3 py-2 w-[25rem] justify-center hover:bg-white hover:text-dark cursor-pointer transition h-12"
                  >
                    {loading ? (
                      <div className="group-hover:text-dark text-white">
                        <Loader />
                      </div>
                    ) : (
                      <>
                        <GoogleIcon className="w-5 h-5 grid place-items-center" />
                        <span>Login with Google</span>
                      </>
                    )}
                  </button>
                </div>
              )
            ) : (
              <div className="text-white">
                <Loader />
              </div>
            )}
          </div>

          <ScrollLink
            to="event-landing-start"
            className="bottom-10 absolute animate-bounce flex gap-x-4 items-center text-gray-500 text-sm cursor-pointer"
            offset={-50}
          >
            <ForwardIcon className="rotate-90" />
            <span>Know more about the event below</span>
            <ForwardIcon className="rotate-90" />
          </ScrollLink>
        </div>
      </div>
      {/* Short About */}
      <div className="fluid-container py-10" id="event-landing-start">
        <h2 className="text-xl font-bold mb-8">
          Real<span className="text-primary">IT</span>y 2023
        </h2>
        <p className="text-gray-400 mb-2">
          We are back with a bang for we proudly present to you, RealITy XII:
          Kaugmaon “The Augmented Reality.”
        </p>
        <p className="text-gray-400">
          Brought to you by Link.exe, RealITy has been a venue for students to
          show their talents in the field of emerging technologies, and we are
          bringing it back this year 2023!
        </p>
      </div>
      {/* What's in Store for you */}
      <div className="fluid-container py-10 bg-dark bg-opacity-80">
        <h2 className="text-xl font-bold mb-8">What&apos;s in store for you</h2>
        <div className="flex flex-wrap justify-center gap-10 mb-5">
          {/* Card */}
          <div className="flex flex-col gap-y-4 items-center">
            <div className="rounded-lg border h-52 w-52"></div>
            <p>Awesome Guest Speakers</p>
          </div>
          {/* Card */}
          <div className="flex flex-col gap-y-4 items-center">
            <div className="rounded-lg border h-52 w-52"></div>
            <p>Fun Competitions</p>
          </div>
          {/* Card */}
          <div className="flex flex-col gap-y-4 items-center">
            <div className="rounded-lg border h-52 w-52"></div>
            <p>Win Prizes!</p>
          </div>
        </div>
      </div>
      {/* List of Speakers */}
      <div className="fluid-container py-10" id="guest-speakers">
        <h2 className="text-xl font-bold mb-8 font-azonix text-center tracking-widest">
          Guest Speakers
        </h2>
        {guestSpeakers.map((speaker, i) => {
          return (
            <div key={i} className="flex flex-col my-10">
              <div className="flex border border-primary space-x-5 rounded-xl p-5 ">
                {/* Image */}
                <div className="shrink-0">
                  <Image src={speaker.img} width={200} height={200} alt="" />
                </div>
                {/* Body */}
                <div>
                  <h3 className="text-2xl">{speaker.name}</h3>
                  <p className="text-gray-400 mb-5">{speaker.username}</p>
                  <p className="text-gray-300">{speaker.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Call out */}
      <div className="py-32 bg-primary bg-opacity-10 text-gray-300">
        <div className="fluid-container text-center text-xl font-extralight">
          <p>
            <span className="font-bold">LINK.EXE</span> has a lot more in store
            for you this year, so keep checking back and follow us on our social
            media platforms for updates about new events!
          </p>

          <div className="flex justify-center mt-5">
            <Link href="https://www.facebook.com/linkexeofficial">
              <FacebookIcon size="2rem" />
            </Link>
          </div>
        </div>
      </div>
      <ClientTypeAnimation />
      {session?.user ? "No user" : "No user"}

      {/* Bottom */}
      {/* <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </>
  );
}
