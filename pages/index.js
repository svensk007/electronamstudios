import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>El3ctroNam Studios</title>
        <meta name="Portfolio for El3troNam Studios" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <nav className="py-6 pt-1 font-Inter bg-gray-800">
            <div>
              <a>Hello!</a>
            </div>
          </nav>
          <div>
            <h1 className="text-2xl bg-black">
              Hi! 👋 Welcome to{" "}
              <span
                className="text-9xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-fuchsia-600 via-sky-500 to-fuchsia-600
            animate-text"
              >
                El3ctroNam
              </span>{" "}
              Studios
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
