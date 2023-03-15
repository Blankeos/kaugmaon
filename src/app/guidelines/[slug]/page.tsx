import React from "react";

import fs from "fs";
import parseMD from "parse-md";
import { marked } from "marked";
import Link from "next/link";
import { MdArrowForward as ForwardIcon } from "react-icons/md";

type MDMetaType = {
  title: string;
  description: string;
  date: string;
  registerLink: string;
};

type ParseMDReturnType = {
  metadata: MDMetaType;
  content: string;
};

export interface ParseMDReturnTypeWithSlug extends ParseMDReturnType {
  slug: string;
}
/**
 * Take note: slugs are the filenames.
 * @returns list of `ParseMDReturnType` from 'src/data/guidelines'
 */
export function getGuidelinesList(): ParseMDReturnTypeWithSlug[] {
  // 1. Read the directory (gets a list of all filenames);
  const slugs = fs.readdirSync("src/data/guidelines");

  // 2. Parse everything
  const parsedMDs: ParseMDReturnTypeWithSlug[] = slugs.map((s) => {
    const fileContents = fs.readFileSync(`src/data/guidelines/${s}`, "utf-8");
    const { metadata, content } = parseMD(fileContents);

    return {
      metadata: metadata as MDMetaType,
      content: content,
      slug: s.replace(".md", ""),
    };
  });

  // 3. Give me woop woop
  return parsedMDs;
}

/**
 * Take note: slugs are the filenames.
 * @returns the `ParseMDReturnType` of a single '<guidelines>.md' from 'src/data/guidelines' by using a slug.
 */
async function getGuidelines(
  slug: string
): Promise<ParseMDReturnType | undefined> {
  // 1. Read the directory (gets a list of all filenames);
  const slugs = fs.readdirSync("src/data/guidelines");

  // 2. Find the file that matches: slug.
  const guidelineFileIdx = slugs.findIndex((s) => {
    s = s.replace(".md", "");
    return s === slug;
  });

  // 3. Check if the guidelineFileIdx exists.
  if (guidelineFileIdx === -1) return;

  // 4. It exists, (Read the contents) > (Parse the file)
  const fileContents = fs.readFileSync(
    `src/data/guidelines/${slugs[guidelineFileIdx]}`,
    "utf-8"
  );
  const { metadata, content } = parseMD(fileContents);

  return {
    metadata: metadata as MDMetaType,
    content: content,
  };
}

export async function generateStaticParams() {
  // 1. Read the directory (gets a list of all filenames);
  const slugs = fs.readdirSync("src/data/guidelines");

  return slugs.map((s) => ({
    slug: s.replace(".md", ""),
  }));
}

// --- Component ---
export const dynamic = "error";

type GuidelinesSlugPageProps = {
  params: {
    slug: string;
  };
};

const GuidelinesSlugPage = async ({
  params: { slug },
}: GuidelinesSlugPageProps) => {
  const parsedMD = await getGuidelines(slug); // JSON

  const parsedMDContent = marked.parse(parsedMD?.content || "# Hello"); // String

  return (
    <div>
      <div className="relative fluid-container px-7 py-16">
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-start">
            <div className="rounded-full px-3 py-1 text-xs bg-primary text-dark mt-2 w-auto">
              Posted @ {new Date(parsedMD?.metadata.date || "").toDateString()}
            </div>
          </div>

          <h1 className="font-spacemono text-3xl font-black">
            {parsedMD?.metadata.title}
          </h1>
          <p className="text-gray-300 text-sm">
            {parsedMD?.metadata.description}
          </p>

          {parsedMD && (
            <div className="flex justify-start">
              <Link
                href={parsedMD?.metadata.registerLink}
                className="border px-3 py-2 text-sm hover:bg-white flex gap-x-4 items-center group hover:text-dark"
                target="_blank"
              >
                <span>Register here</span>
                <ForwardIcon className="group-hover:translate-x-1 transition" />
              </Link>
            </div>
          )}
        </div>

        <div className="h-0.5 w-52 bg-white mt-10 my-5" />
        <div
          className="mt-8 prose-invert prose prose-headings:font-spacemono prose-headings:text-gray-200 prosa-a:text-primary prose-img:rounded-xl
          "
          dangerouslySetInnerHTML={{
            __html: parsedMDContent,
          }}
        ></div>
      </div>
    </div>
  );
};

export default GuidelinesSlugPage;
