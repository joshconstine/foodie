import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Restaurant.module.css";
import clsx from "classnames";
import Navbar from "../../components/navbar";
import Banner from "../../components/navbar/Banner";

const dummyData = [
  {
    id: "1",
    name: "cotixan",
    type: "mexican",
    imgUrl: "/static/restaurant1.jpg",
  },
  {
    id: "2",
    name: "chic-fila",
    type: "american",
    imgUrl: "/static/restaurant2.jpg",
  },
  {
    id: "3",
    name: "subway",
    type: "subs",
    imgUrl: "/static/restaurant3.jpg",
  },
];

export async function getStaticProps(context: any) {
  //data to fetch from API

  const restaurantId = context.params.restaurantId;
  //   const restaurantArray = await getRestaurantById(restaurantId);
  const restaurantArray = dummyData.filter(
    (restaurant) => restaurant.id === restaurantId
  );
  return {
    props: {
      restaurant: restaurantArray.length > 0 ? restaurantArray[0] : {},
    },
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  //this is the list of videos that will be used in the banner, that is why they are being preloaded
  const listOfRestaurants = ["1", "2", "3"];
  const paths = listOfRestaurants.map((restaurantId) => ({
    params: { restaurantId },
  }));

  return { paths, fallback: "blocking" };
}

const Restaurant = ({ restaurant }: any) => {
  const { name, type, imgUrl } = restaurant;
  return (
    <div className={styles.container}>
      <Navbar />
      <Banner name={name} imgUrl={imgUrl} />
      {type}
    </div>
  );
};

export default Restaurant;
