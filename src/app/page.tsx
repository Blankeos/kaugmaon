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
import { animateScroll } from "react-scroll";

import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

// ReactResponsive
import { useMediaQuery } from "react-responsive";
import useHasMounted from "@/hooks/useHasMounted";
import { useEntryAnimationContext } from "@/context/EntryAnimationContext";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import eventData from "@/data/eventData";

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
  const isSM = useMediaQuery({ query: "(min-width: 768px)" });

  // Prevent animation using EntryAnimationContext:
  const { handleEntryAnimationComplete, hasLoaded: entryAnimHasLoaded } =
    useEntryAnimationContext();

  useEffect(() => {
    console.log(window.location.hash);
    if (window.location.hash === "#guest-speakers") {
      setTimeout(() => {
        const yOffset = -50;
        const elem = document.getElementById("guest-speakers");

        if (elem == null) return;
        const y =
          elem.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ behavior: "smooth", top: y });
      }, 100);
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="fluid-container flex-1 flex flex-col">
        <div className="flex flex-col items-center justify-center flex-1 flex-shrink-0 min-h-screen relative">
          <div className="flex flex-col items-center gap-y-5 text-center">
            <div className="relative">
              <motion.div
                initial={
                  !entryAnimHasLoaded && {
                    y: -50,
                    opacity: 0,
                  }
                }
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
              initial={
                !entryAnimHasLoaded && {
                  scale: isSM ? 3.2 : 1.5,
                }
              }
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
              onAnimationComplete={handleEntryAnimationComplete}
            >
              {!entryAnimHasLoaded && hasMounted ? (
                <RandomReveal
                  isPlaying
                  duration={1.5}
                  characters={"KAUGMAON"}
                />
              ) : (
                "KAUGMAON"
              )}
            </motion.h1>
          </div>
          <motion.p
            initial={
              !entryAnimHasLoaded && {
                y: 50,
                opacity: 0,
              }
            }
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
            initial={
              !entryAnimHasLoaded && {
                y: 50,
                opacity: 0,
              }
            }
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
            {eventData.time} | {eventData.date}{" "}
            <span className="text-cyan-400">@ {eventData.location}</span>
          </motion.p>
          <motion.div
            initial={
              !entryAnimHasLoaded && {
                y: 50,
                opacity: 0,
              }
            }
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
            className="mt-16"
          >
            <GoogleLoginButton />
          </motion.div>

          <ScrollLink
            to="event-landing-start"
            className="bottom-10 absolute text-gray-500 text-sm cursor-pointer hover:text-primary transition"
            offset={-50}
          >
            <motion.div
              initial={
                !entryAnimHasLoaded && {
                  opacity: 0,
                }
              }
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
        <p className="text-gray-200 text-center">To be announced</p>
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

// Put this under the <h2>Guest Speakers</h2>, once done.
// {guestSpeakers.map((speaker, i) => {
//   return (
//     <div key={i} className="flex flex-col my-10">
//       <div
//         className="flex border border-primary space-x-5 rounded-xl p-5
//       flex-col gap-y-6
//       sm:flex-row sm:gap-y-0"
//       >
//         {/* Image */}
//         <div className="relative shrink-0 h-56 w-full sm:h-[200px] sm:w-[200px]">
//           <Image
//             src={speaker.img}
//             fill
//             alt=""
//             className="object-cover"
//           />
//         </div>
//         {/* Body */}
//         <div>
//           <h3 className="text-2xl">{speaker.name}</h3>
//           <p className="text-gray-400 mb-5">{speaker.username}</p>
//           <p className="text-gray-300">{speaker.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// })}
