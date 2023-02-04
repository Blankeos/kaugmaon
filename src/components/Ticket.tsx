import React, { useEffect, useState } from "react";

import Tilt from "react-parallax-tilt";
import NextImage from "next/image";

interface ITicketProps {
  name?: string;
  imgUrl?: string;
  email?: string;
  ticketId?: string;
}

import { RandomReveal } from "react-random-reveal";
import useHasMounted from "@/hooks/useHasMounted";
import capitalize from "@/lib/capitalize";
import SkeletonLoader from "./SkeletonLoader";
import stringifyTicketId from "@/lib/stringifyTicketId";

const GUEST_ORGANIZATIONS = [
  "gmail",
  "yahoo",
  "outlook",
  "mail",
  "protonmail",
  "icloud",
];

function getOrganization(email: string): string {
  let organization = email?.match(/(?<=@)(.*?)(?=\.)/g);

  if (organization === null || GUEST_ORGANIZATIONS.includes(organization[0]))
    return "guest";

  return organization[0];
}

const Ticket: React.FC<ITicketProps> = ({ name, imgUrl, email, ticketId }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const organization = getOrganization(email || "gmail");
  const hasMounted = useHasMounted();

  return (
    <>
      {/* The Ticket */}
      <div
        className="relative p-8"
        id="ticket-node"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Tilt
          tiltReverse
          tiltAngleXManual={isHovered ? undefined : 0}
          tiltAngleYManual={isHovered ? undefined : 0}
          trackOnWindow={true}
          transitionSpeed={1000}
        >
          <div className="relative w-[40rem] h-[25rem]">
            <NextImage
              src="/ticket.png"
              fill
              alt="ticket"
              className="object-contain absolute"
            />
            {/* Content */}
            <div className="relative w-full h-full flex flex-col justify-between">
              {/* TICKET NUMBER */}
              <div className="top-0 bottom-0 absolute right-0">
                <div className="flex justify-center items-center h-full mr-3">
                  {hasMounted && ticketId ? (
                    <div className="rotate-90 text-4xl">
                      <RandomReveal
                        isPlaying
                        duration={1}
                        characters={ticketId}
                        characterSet={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                      />
                    </div>
                  ) : (
                    <div className="rotate-90 h-[50px] m-auto w-full flex items-center justify-center overflow-hidden">
                      <div className="m-auto w-[150px] h-full">
                        <SkeletonLoader />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Top Content*/}
              <div className="">
                <div className="SPACER h-10" />
                <div className="flex ml-10 mt-10 gap-x-6 items-center">
                  {/* Profile Picture */}
                  {imgUrl ? (
                    <div
                      className="w-20 h-20 rounded-full bg-green-200"
                      style={{
                        background: `url(${
                          imgUrl ||
                          "https://carlo.vercel.app/imgs/carlo_about.jpg"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-white" />
                  )}
                  {/* Name and Email */}
                  <div className="">
                    <div className="h-9">
                      {name ? (
                        <h3 className="text-2xl font-bold tracking-tight">
                          <RandomReveal
                            isPlaying
                            duration={1}
                            characters={capitalize(name)}
                          />
                        </h3>
                      ) : (
                        <SkeletonLoader />
                      )}
                    </div>
                    {email ? (
                      <p className="uppercase">
                        <RandomReveal
                          isPlaying
                          duration={1}
                          characters={organization}
                        />
                      </p>
                    ) : (
                      <div className="w-[70px] overflow-hidden">
                        <SkeletonLoader />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Content*/}
              <div className="">
                <div className="flex ml-10 mb-10 gap-x-6 items-center">
                  <div className="tracking-widest text-2xl font-azonix">
                    KAUGMAON
                  </div>
                  <div className="text-xs">
                    <p>10:00 AM, February 17, 2023</p>
                    <p>
                      Hosted by <b>LINK.EXE</b>
                    </p>
                  </div>
                </div>
                <div className="SPACER h-10" />
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default Ticket;
