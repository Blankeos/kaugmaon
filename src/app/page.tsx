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
import { RandomReveal } from "react-random-reveal";
import { motion } from "framer-motion";

import ScrollLink from "@/components/ClientScrollLink";

import Link from "next/link";
import { useState } from "react";
import Loader from "@/components/Loader";

// ReactResponsive
import { useMediaQuery } from "react-responsive";
import useHasMounted from "@/hooks/useHasMounted";

export default function Home() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  const hasMounted = useHasMounted();

  async function handleSignIn() {
    setLoading(true);
    await signIn("google", {
      callbackUrl: "/ticket",
    });

    setTimeout(() => {
      setLoading(false);
    }, 12000);
  }

  // responsiveness:
  const isSM = useMediaQuery({query: '(min-width: 768px)'});
  return (
    <>
      {/* Hero */}
      <div className="fluid-container flex-1 flex flex-col">
        <div className="flex flex-col items-center justify-center flex-1 flex-shrink-0 min-h-screen relative">
          <div className="flex flex-col items-center gap-y-5 text-center">
            <div className="relative">
              <motion.div
                initial={{
                  y: -50,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 2,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="thirteen"
              >
                <Image
                  src="/MainLogo.png"
                  alt="13"
                  width={40}
                  height={31}
                  priority
                />
              </motion.div>
            </div>
            <motion.h1
              initial={{
                scale: isSM ? 3.2 : 1.5,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              className="tracking-widest text-4xl md:text-5xl"
            >
              {
                hasMounted ? 
                <RandomReveal isPlaying duration={1.5} characters={"KAUGMAON"} />
                :
                "KAUGMAON"
              }
            </motion.h1>
          </div>
          <motion.p
            initial={{
              y: 50,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 2,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="text-xl text-center text-gray-300"
          >
            the augmented real<span className="text-primary">IT</span>y
          </motion.p>
          <motion.p
            initial={{
              y: 50,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 3,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="text-primary text-sm text-center mt-10"
          >
            February 17, 2023{" "}
            <span className="text-cyan-400">@ WVSU Cultural Center</span>
          </motion.p>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 3.5,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col items-center gap-y-2 mt-16"
          >
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
          </motion.div>

          <ScrollLink
            to="event-landing-start"
            className="bottom-10 absolute text-gray-500 text-sm cursor-pointer hover:text-primary transition"
            offset={-50}
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 4,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              className="animate-bounce flex gap-x-4 items-center "
            >
              <ForwardIcon className="rotate-90" />
              <span>Know more about the event below</span>
              <ForwardIcon className="rotate-90" />
            </motion.div>
          </ScrollLink>
        </div>
      </div>
      {/* Short About */}
      <div className="fluid-container py-10" id="event-landing-start">
        <motion.h2
          initial={{}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 2,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="text-xl font-bold mb-8"
        >
          Real<span className="text-primary">IT</span>y 2023
        </motion.h2>
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
      <div className="fluid-container">
        <div className="py-10 bg-dark/90 rounded-2xl shadow-2xl border-gray-700 border px-7">
          <h2 className="text-xl font-bold mb-8 text-center">
            What&apos;s in store for you
          </h2>
          <div className="flex flex-wrap justify-center gap-10 mb-5">
            {/* Card */}
            <div className="flex flex-col gap-y-4 items-center">
              <div className="rounded-lg border h-52 w-52 grid place-items-center">
                <Image
                  src="/guest_speakers.png"
                  alt="guest speakers"
                  className="object-contain"
                  width={200}
                  height={200}
                />
              </div>
              <p>Awesome Guest Speakers</p>
            </div>
            {/* Card */}
            <div className="flex flex-col gap-y-4 items-center">
              <div className="rounded-lg border h-52 w-52 grid place-items-center">
                <Image
                  src="/competitions.png"
                  alt="competitons"
                  className="object-contain"
                  width={200}
                  height={200}
                />
              </div>
              <p>Fun Competitions</p>
            </div>
            {/* Card */}
            <div className="flex flex-col gap-y-4 items-center">
              <div className="rounded-lg border h-52 w-52 grid place-items-center">
                <Image
                  src="/win_prizes.png"
                  alt="win_prizes"
                  className="object-contain"
                  width={200}
                  height={200}
                />
              </div>
              <p>Win Prizes!</p>
            </div>
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
      <div className="py-32 bg-primary bg-opacity-10 text-gray-300 mb-10">
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
    </>
  );
}
