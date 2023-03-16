"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function ScrollUp() {
  const pathName = usePathname();
  useScrollToTop();
  return null;
}
