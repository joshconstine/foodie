import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Button from "../components/button";
import Card from "../components/card";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Foodie</title>
        <meta name="foodie" content="Find the best Food." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <h1>Great spots in San Diego</h1>
        <Button onClick={toggleDialog}>Filters</Button>
        <Card
          id="34"
          size="small"
          imgUrl="https://sparksgallery.com/wp-content/uploads/2021/11/best-restaurants-downtown-gaslamp-san-diego.jpg"
        />
        <Card
          id="34"
          size="small"
          imgUrl="https://i0.wp.com/sparksgallery.com/wp-content/uploads/2021/11/lionfish.jpg?resize=1024%2C576&ssl=1"
        />
        <Card
          id="34"
          size="large"
          imgUrl="https://i0.wp.com/sparksgallery.com/wp-content/uploads/2021/11/grant-grill.jpg?resize=1024%2C576&ssl=1"
        />
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
