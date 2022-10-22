import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Button from "../components/button";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.css";

const filters = ["mexican", "american", "sushi", "subs", "coffee"];
const Home: NextPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };
  const handleClose = () => {
    console.log("handleClose");
    setShowDialog(!showDialog);
  };
  const handleListItemClick = (value: string) => {
    console.log("handleClose", value);
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
        <Card id="34" size="small" imgUrl="/static/restaurant1.jpg" />
        <Card id="34" size="small" imgUrl="/static/restaurant2.jpg" />
        <Card id="34" size="large" imgUrl="/static/restaurant3.jpg" />
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
          {filters.map((filter) => (
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
