import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ScrollLink from "@/components/ClientScrollLink";
import {
  MdClose as CloseIcon,
  MdOutlineMenu as MenuIcon,
} from "react-icons/md";

import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Helper handlers
  function toggleNavBar() {
    setIsOpen(!isOpen);
  }
  function closeNavBar() {
    setIsOpen(false);
  }

  // Declares the bool for the logic in the entry animation, to prevent the transition delay
  // when animating using a button click later on.
  const [entryAnimationHasEnded, setEntryAnimationHasEnded] =
    useState<boolean>(false);
  function handleEntryAnimationEnd() {
    if (entryAnimationHasEnded) return;
    setEntryAnimationHasEnded(true);
  }

  // Responsive
  const isSM = useMediaQuery({ query: "(min-width: 640px)" });
  const inHome = pathname === "/";

  return (
    <nav className="fixed top-0 w-full z-20 backdrop-blur-sm">
      <div className="fluid-container">
        {/* Nav Content Start */}
        <div className="flex justify-between gap-x-10 h-20 items-center">
          {/* Left Side */}
          <Link
            href="/"
            className="hover:bg-white hover:bg-opacity-20 h-12 w-12 rounded-md grid place-items-center"
          >
            {/* Logo */}
            <motion.div
              initial={
                inHome && {
                  x: -100,
                  opacity: 0,
                }
              }
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
            >
              <Image src="/MainLogo.png" alt="13" width={31} height={28} />
            </motion.div>
          </Link>

          {/* Right Side */}
          <div className="">
            <motion.button
              onClick={toggleNavBar}
              initial={inHome && { x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 2,
              }}
              className="hover:bg-white hover:bg-opacity-20 h-12 w-12 rounded-md grid place-items-center z-20 relative sm:hidden"
            >
              {isOpen ? <CloseIcon size="2rem" /> : <MenuIcon size="2rem" />}
            </motion.button>
            <motion.ul
              className={`self-start flex text-sm gap-x-8 items-end
                    flex-col gap-y-10 bg-dark absolute top-0 right-0 min-h-screen pt-20 px-10 
                    
                    sm:flex-row sm:gap-y-0 sm:self-center
                    sm:relative sm:top-auto sm:right-auto sm:min-h-0 sm:pt-0 sm:px-10 sm:items-center sm:bg-transparent
                    `}
              initial={
                inHome && {
                  x: 100,
                  opacity: 0,
                }
              }
              transition={{
                ease: "easeOut",
                duration: entryAnimationHasEnded ? 0.4 : 1,
                delay: entryAnimationHasEnded ? 0 : 2,
              }}
              animate={{
                x: isSM ? 0 : isOpen ? 0 : 300,
                opacity: 1,
              }}
              onAnimationComplete={handleEntryAnimationEnd}
            >
              <li>
                <Link
                  href="/program"
                  className="hover:text-primary"
                  onClick={closeNavBar}
                >
                  Programme
                </Link>
              </li>
              <li>
                {pathname && pathname !== "/" ? (
                  <Link
                    scroll={false}
                    className="hover:text-primary cursor-pointer"
                    href="/#guest-speakers"
                    onClick={closeNavBar}
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
                  href="/guidelines/cict_pro_motion"
                  className="hover:text-primary"
                  onClick={closeNavBar}
                >
                  Contest Guidelines
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
