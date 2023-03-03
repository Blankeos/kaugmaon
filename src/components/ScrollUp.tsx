"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function ScrollUp() {
  const pathName = usePathname();

  useEffect(() => {
    window.document.scrollingElement?.scrollTo(0, 0);
  }, []);

  return null;
}
