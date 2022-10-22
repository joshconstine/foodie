import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Restaurant.module.css";
import clsx from "classnames";
import Navbar from "../../components/navbar";

const dummyData = [
  {
    id: "1",
    name: "cotixan",
    type: "mexican",
  },
  {
    id: "2",
    name: "chic-fila",
    type: "american",
  },
  {
    id: "3",
    name: "subway",
    type: "subs",
  },
];

export async function getStaticProps(context: any) {
  //data to fetch from API

  const restaurantId = context.params.restaurantId;
  //   const restaurantArray = await getRestaurantById(restaurantId);
  const restaurantArray = dummyData.filter(
    (restaurant) => restaurant.id === restaurantId
  );
  console.log(restaurantArray);
  console.log(dummyData);
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
  const router = useRouter();
  const { name, type } = restaurant;

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.modal}>
        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{name}</p>
              <p className={styles.title}>{type}</p>
            </div>
            <div className={styles.col2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
