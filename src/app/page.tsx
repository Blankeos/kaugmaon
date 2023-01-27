import Image from "next/image";
import styles from "./page.module.css";

// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

// Icons
import {
  MdArrowForward as ForwardIcon,
  MdOutlineEmail as EmailIcon,
  MdOutlineFacebook as FacebookIcon,
} from "react-icons/md";

import { TypeAnimation } from "react-type-animation";
import ClientTypeAnimation from "@/components/ClientTypeAnimation";

import ScrollLink from "@/components/ClientScrollLink";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="fluid-container flex-1 flex flex-col">
        <div className="flex flex-col items-center gap-y-4 justify-center flex-1 flex-shrink-0 min-h-screen relative">
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
          <p className="text-lg text-center">
            the augmented real<span className="text-primary">IT</span>y
          </p>
          <p className="text-primary text-sm text-center">February 17, 2023</p>
          <div className="border rounded-full flex gap-x-5 items-center px-3 py-2 w-96 mt-20">
            <EmailIcon className="w-5 h-5 grid place-items-center" />
            <input
              className="font-thin w-full transparent bg-transparent focus:outline-none"
              type="email"
              placeholder="Enter email for a cool ticket"
            />
            <ForwardIcon className="w-5 h-5 grid place-items-center" />
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
      <div className="fluid-container py-10">
        <h2 className="text-xl font-bold mb-8 font-azonix text-center tracking-widest">
          Guest Speakers
        </h2>
        <div className="flex flex-col">
          <div className="flex border border-primary rounded-xl p-5 gap-5">
            {/* Image */}
            <div className="bg-primary h-52 w-52 shrink-0"></div>
            {/* Body */}
            <div>
              <h3 className="text-2xl">Mr. Carlo Antonio Taleon</h3>
              <p className="text-gray-400 mb-5">@taleoncarlo</p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam soluta deserunt in esse officia, perferendis
                molestias consequuntur, minus dolore itaque tenetur blanditiis
                omnis, vitae saepe cum earum ad quo eius.
              </p>
            </div>
          </div>
        </div>
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
