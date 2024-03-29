"use client";

import { toPng } from "html-to-image";
import download from "downloadjs";
import { toast } from "react-hot-toast";

// START: Icons
import {
  MdOutlineImage as ImageIcon,
  MdOutlineShare as ShareIcon,
} from "react-icons/md";
import Link from "@/components/ClientLink";
import Ticket from "@/components/Ticket";
// END: Icons

import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import stringifyTicketId from "@/lib/stringifyTicketId";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import useScrollToTop from "@/hooks/useScrollToTop";

const TicketPage = () => {
  useScrollToTop();
  // Auth Data
  const { data: session, status } = useSession();

  // Ticket Data
  const {
    isLoading: ticketDataLoading,
    error,
    data: ticketData,
  } = useQuery("ticketData", () =>
    fetch("/api/ticket").then((res) => res.json())
  );
  const isLoading = status === "loading" || ticketDataLoading;

  async function downloadImage() {
    const node = document.getElementById("ticket-node");

    if (!node) {
      console.log("Failed to get ticket node");
      return;
    }

    // Solution to my Issue #2 Bug: https://github.com/bubkoo/html-to-image/issues/361
    // Just execute the function 2 or 3 times.
    await toPng(node, {
      backgroundColor: "#181818",
    });
    await toPng(node, {
      backgroundColor: "#181818",
    });
    await toPng(node, {
      backgroundColor: "#181818",
    });

    const dataUrl = await toPng(node, {
      backgroundColor: "#181818",
    });

    var img = new Image();
    img.src = dataUrl;
    download(dataUrl, "my-ticket.png");
  }

  function handleDownloadClick() {
    toast.promise(downloadImage(), {
      loading: "Creating my-ticket.png",
      success: "Created my-ticket.png",
      error: "Error when creating image",
    });
  }

  useEffect(() => {
    switch (status) {
      case "unauthenticated":
        toast.error("Please login first");
        redirect("/");
        break;
      case "authenticated":
        toast.success("Login success");
        break;
      default:
        break;
    }
  }, [status]);
  return (
    <>
      {/* <ScrollUp /> */}
      <div className="SPACER h-20" />
      <div className="relative flex-1 flex flex-col items-center gap-y-0 sm:grid sm:place-items-center sm:pb-10">
        {
          <Ticket
            imgUrl={session?.user?.image as string | undefined}
            name={session?.user?.name as string | undefined}
            email={session?.user?.email as string | undefined}
            ticketId={
              ticketData && stringifyTicketId(ticketData?.ticket.id - 1 || 0)
            }
          />
        }
        <div className="flex flex-col gap-x-5">
          <button
            onClick={handleDownloadClick}
            className="border px-6 py-3 rounded-xl hover:bg-white hover:text-dark flex gap-x-2 items-center"
          >
            <ImageIcon size="1.2rem" />
            <span>Download</span>
          </button>
        </div>
        <div className="text-xs opacity-50 mt-5 text-center max-w-sm">
          This ticket is for vanity only. You can still enter the event without
          one.
        </div>
        <div className="h-10" />
      </div>

      {/* The thing below is used for downloading a picture */}
      <div className="absolute -left-[50000px]">
        <Ticket
          imgUrl={session?.user?.image as string | undefined}
          name={session?.user?.name as string | undefined}
          email={session?.user?.email as string | undefined}
          ticketId={
            ticketData && stringifyTicketId(ticketData?.ticket.id - 1 || 0)
          }
          isInteractive={false}
        />
      </div>
    </>
  );
};

export default TicketPage;
