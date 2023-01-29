import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";
import ClientToaster from "@/components/ClientToaster";
import ParticleBackground from "@/components/ParticleBackground";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className="fixed top-0 w-full z-20 backdrop-blur-sm">
          <div className="fluid-container">
            {/* Nav Content Start */}
            <div className="flex justify-between gap-x-10 h-20 items-center">
              {/* Left Side */}
              <Link
                href="/"
                className="hover:bg-white hover:bg-opacity-10 p-2 rounded-md"
              >
                <Image src="/MainLogo.png" alt="13" width={31} height={28} />
              </Link>
              <ul className="flex text-sm gap-x-8">
                <li>
                  <Link href="/program" className="hover:text-primary">
                    Programme
                  </Link>
                </li>
                <li>
                  <Link href="/speakers" className="hover:text-primary">
                    Guest Speakers
                  </Link>
                </li>
                <li>
                  <Link href="/guidelines" className="hover:text-primary">
                    Contest Guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="min-h-screen flex flex-col">
          {/* <nav className={styles.description}>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>app/page.tsx</code>
            </p>
            <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{" "}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </nav> */}

          <ParticleBackground />
          <main className="flex flex-grow flex-col z-10">{children}</main>
          <footer className="fluid-container z-10">Footer</footer>
        </div>
        <ClientToaster />
      </body>
    </html>
  );
}
