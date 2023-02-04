"use client";

import { toPng } from "html-to-image";
import download from "downloadjs";
import { toast } from "react-hot-toast";

// START: Icons
import {
  MdOutlineImage as ImageIcon,
  MdOutlineShare as ShareIcon,
} from "react-icons/md";
import Link from "next/link";
import Ticket from "@/components/Ticket";
// END: Icons

import { useSession } from "next-auth/react";

// increment ticket number
interface TickNum {
  tickToString: string;
}

const TicketPage = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  async function downloadImage() {
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

  return (
    <>
      {/* <ScrollUp /> */}
      <div className="SPACER h-20" />
      <div className="flex-1 grid place-items-center">
        {
          <Ticket
            imgUrl={session?.user?.image as string | undefined}
            name={session?.user?.name as string | undefined}
            email={session?.user?.email as string | undefined}
          />
        }
        <div className="flex gap-x-5">
          <button
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
