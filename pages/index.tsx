import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foodie</title>
        <meta name="foodie" content="Find the best Food." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Great spots in San Diego
        <Card id="34" size="small" />
        <Card id="34" size="small" />
        <Card id="34" size="large" />
      </main>

      <footer className={styles.footer}>
        <a
          href="http://joshuaconstine.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with passion
        </a>
      </footer>
    </div>
  );
};

export default Home;
