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
      <main className="font-Inter bg-black">
        <section>
          <nav>
            <h1>Title</h1>
          </nav>
          <div>
            <h1 className="text-2xl">
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
