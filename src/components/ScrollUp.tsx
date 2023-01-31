"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function ScrollUp() {
  const pathName = usePathname();

  useEffect(() => {
    console.log("wah", pathName);
    window.document.scrollingElement?.scrollTo(0, 0);
  }, []);

  return null;
}
