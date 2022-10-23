import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Button from "../components/button";
import Card from "../components/card";
import Navbar from "../components/navbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const filterOptions = ["mexican", "american", "sushi", "subs", "coffee"];
const Home: NextPage = () => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const [filters, setFilters] = useState<string[]>([]);
  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };
  const handleClose = () => {
    setShowDialog(!showDialog);
  };
  const handleListItemClick = (value: string) => {
    if (filters.includes(value))
      setFilters(filters.filter((filter) => filter !== value));
    else {
      setFilters([...filters, value]);
    }
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
        {filters.map((filter, i) => (
          <div key={i}>{filter}</div>
        ))}
        <div onClick={() => router.push("/restaurant/1")}>
          <Card id="34" size="small" imgUrl="/static/restaurant1.jpg" />
        </div>
        <div onClick={() => router.push("/restaurant/2")}>
          <Card id="34" size="small" imgUrl="/static/restaurant2.jpg" />
        </div>
        <div onClick={() => router.push("/restaurant/3")}>
          <Card id="34" size="large" imgUrl="/static/restaurant3.jpg" />
        </div>
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
      <Dialog onClose={handleClose} open={showDialog}>
        <List sx={{ pt: 0 }}>
          {filterOptions.map((filter) => (
            <ListItem
              button
              onClick={() => handleListItemClick(filter)}
              key={filter}
            >
              <ListItemText primary={filter} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
};

export default Home;
