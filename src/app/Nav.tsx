import Image from "next/image";
import Link from "@/components/ClientLink";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ScrollLink from "@/components/ClientScrollLink";
import {
  MdClose as CloseIcon,
  MdOutlineMenu as MenuIcon,
} from "react-icons/md";

import { useMediaQuery } from "react-responsive";
import { useEntryAnimationContext } from "@/context/EntryAnimationContext";
import useOutsideAlerter from "@/hooks/useOutsideAlterter";

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sideBarRef = useRef<HTMLDivElement | null>(null);
  const sideBarButtonRef = useRef<HTMLDivElement | null>(null);
  useOutsideAlerter([sideBarRef, sideBarButtonRef], {
    onClickOutside: closeNavBar,
  });

  function closeNavBar() {
    setIsOpen(false);
  }
  function openNavBar() {
    setIsOpen(true);
  }

  // Declares the bool for the logic in the entry animation, to prevent the transition delay
  // when animating using a button click later on.
  const { hasLoaded: entryAnimationHasLoaded } = useEntryAnimationContext();
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
            {/* Open/Close Button */}
            <motion.button
              ref={sideBarButtonRef as unknown as React.Ref<HTMLButtonElement>}
              onClick={isOpen ? closeNavBar : openNavBar}
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
              ref={sideBarRef as unknown as React.Ref<HTMLUListElement>}
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
                duration: entryAnimationHasLoaded ? 0.4 : inHome ? 1 : 0.4,
                delay: entryAnimationHasLoaded ? 0 : inHome ? 2 : 0,
              }}
              animate={{
                x: isSM ? 0 : isOpen ? 0 : 300,
                opacity: 1,
              }}
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
              {inHome && (
                <ScrollLink to="guest-speakers" offset={-50}>
                  <span className="hover:text-primary cursor-pointer">
                    Guest Speakers
                  </span>
                </ScrollLink>
              )}
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
