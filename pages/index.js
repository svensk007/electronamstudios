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
            <h1>Hi! 👋 Welcome to <span className="bg-gradient-to-r from-fuchsia-600 to-sky-600">El3ctroNam</span> Studios</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
