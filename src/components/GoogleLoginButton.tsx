import { signIn, signOut, useSession } from "next-auth/react";
import Link from "@/components/ClientLink";
import React, { useState } from "react";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { MdReceipt as TicketIcon } from "react-icons/md";
import Loader from "./Loader";

interface GoogleLoginButtonProps {
  scheme?: "onLight" | "onDark";
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  scheme = "onDark",
}) => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  async function handleSignIn() {
    setLoading(true);
    await signIn("google", {
      callbackUrl: "/ticket",
    });

    setTimeout(() => {
      setLoading(false);
    }, 12000);
  }

  const isOnLight = scheme === "onLight";

  return (
    <div className="flex flex-col items-center gap-y-2">
      {status !== "loading" ? (
        session ? (
          <div className="text-center">
            <Link
              href="/ticket"
              className={`rounded-full flex gap-x-5 items-center px-3 py-2 w-64 sm:w-[25rem] justify-center cursor-pointer transition ${
                isOnLight
                  ? "bg-dark hover:bg-gray-800 hover:shadow-md"
                  : "hover:bg-white hover:text-dark border"
              }`}
            >
              <TicketIcon className="w-5 h-5 grid place-items-center" />
              <span>View my Ticket</span>
            </Link>
            <button
              className={`text-xs ${
                isOnLight
                  ? "text-gray-700 hover:text-red-500"
                  : "text-white/70 hover:text-red-400"
              }`}
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
              className={`group lds-ellipsis-button rounded-full flex gap-x-5 items-center px-3 py-2 w-[25rem] justify-center cursor-pointer transition h-12 ${
                isOnLight
                  ? "bg-dark hover:bg-gray-800 hover:shadow-md"
                  : "hover:bg-white hover:text-dark border "
              }`}
            >
              {loading ? (
                <div className="group-hover:text-dark text-white">
                  <Loader isOnLight={isOnLight} color="#dbff00" />
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
          <Loader isOnLight={!isOnLight} color="#dbff00" />
        </div>
      )}
    </div>
  );
};

export default GoogleLoginButton;
