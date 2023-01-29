"use client";

import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

import NextImage from "next/image";
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import download from "downloadjs";
import { toast } from "react-hot-toast";
import ScrollUp from "@/components/ScrollUp";

// Icons
import {
  MdOutlineImage as ImageIcon,
  MdOutlineShare as ShareIcon,
} from "react-icons/md";
import Link from "next/link";

const TicketPage = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  async function downloadImage() {
    setIsHovered(false);
    const node = document.getElementById("ticket-node");

    if (!node) {
      console.log("Failed to get ticket node");
      return;
    }

    await toPng(node).then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      download(dataUrl, "my-ticket.png");
    });
  }

  function handleDownloadClick() {
    toast.promise(downloadImage(), {
      loading: "Creating my-ticket.png",
      success: "Created my-ticket.png",
      error: "Error when creating image",
    });
  }

  useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);
  return (
    <>
      <ScrollUp />
      <div className="SPACER h-20" />
      <div className="flex-1 grid place-items-center">
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
                        background: `url(https://carlo.vercel.app/imgs/carlo_about.jpg)`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    {/* Name and Email */}
                    <div className="">
                      <h3 className="text-2xl font-bold tracking-tight">
                        Carlo Taleon
                      </h3>
                      <p className="">WVSU</p>
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
        <div className="flex gap-x-5">
          <button
            type="button"
            onClick={handleDownloadClick}
            className="border px-6 py-3 rounded-xl hover:bg-white hover:text-dark flex gap-x-2 items-center"
          >
            <ImageIcon size="1.2rem" />
            <span>Download</span>
          </button>
          <div
            className="fb-share-button"
            data-href="https://carlo.vercel.app/"
            data-layout="button_count"
            data-size="small"
          >
            <Link
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
              className="fb-xfbml-parse-ignore border px-6 py-3 rounded-xl hover:bg-white hover:text-dark flex gap-x-2 items-center"
            >
              <ShareIcon size="1.2rem" />
              <span>Share on Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPage;
