import React, { useEffect, useState } from "react";

import Tilt from "react-parallax-tilt";
import NextImage from "next/image";

interface ITicketProps {
  name?: string;
  imgUrl?: string;
  email?: string;
}

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

const Ticket: React.FC<ITicketProps> = ({ name, imgUrl, email }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const organization = getOrganization(email || "gmail");

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
              src="/ticket.webp"
              fill
              alt="ticket"
              className="object-contain absolute"
            />
            {/* Content */}
            <div className="relative w-full h-full flex flex-col justify-between">
              {/* TICKET NUMBER */}
              <div className="top-0 bottom-0 absolute right-0">
                <div className="flex justify-center items-center h-full mr-3">
                  <div className="rotate-90 text-4xl">#00001</div>
                </div>
              </div>
              {/* Top Content*/}
              <div className="">
                <div className="SPACER h-10" />
                <div className="flex ml-10 mt-10 gap-x-6 items-center">
                  {/* Profile Picture */}
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
                  {/* Name and Email */}
                  <div className="">
                    <h3 className="text-2xl font-bold tracking-tight capitalize">
                      {name?.toLowerCase()}
                    </h3>
                    <p className="uppercase">{organization}</p>
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
