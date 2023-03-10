"use client";

import Link from "@/components/ClientLink";
import { usePathname } from "next/navigation";
import { ParseMDReturnTypeWithSlug } from "./[slug]/page";

interface NavProps {
  guidelinesData: ParseMDReturnTypeWithSlug[];
}

const Nav = ({ guidelinesData }: NavProps) => {
  const pathname = usePathname();

  function matchesPatchname(slug: string) {
    if (!pathname) return false;

    return pathname === slug;
  }

  return (
    <>
      {guidelinesData.map((g, i) => (
        <Link
          key={i}
          href={"/guidelines/" + g.slug}
          className={`border px-3.5 py-2 transition duration-75 ${
            matchesPatchname("/guidelines/" + g.slug)
              ? "border-primary bg-primary text-dark"
              : "text-gray-200 hover:bg-primary hover:text-white hover:border-primary hover:bg-opacity-50"
          }`}
        >
          {g.metadata.title}
        </Link>
      ))}
    </>
  );
};

export default Nav;
