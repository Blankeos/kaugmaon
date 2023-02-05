"use client";

import Link from "next/link";
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
          className={`border px-3.5 py-2 ${
            matchesPatchname("/guidelines/" + g.slug)
              ? "border-primary bg-primary text-dark"
              : "text-gray-200 hover:bg-primary hover:text-dark hover:border-primary"
          }`}
        >
          {g.metadata.title}
        </Link>
      ))}
    </>
  );
};

export default Nav;
