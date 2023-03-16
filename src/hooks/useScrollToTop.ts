"use client";

import { useEffect } from "react";

export default function useScrollToTop() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ behavior: "smooth", top: 0 });
          }, 50);
    }, [])
}