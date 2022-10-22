import Head from "next/head";
import styles from "../styles/Profile.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/card/navbar";

const Profile = () => {
  const isLoading = false;
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Joshua Constine</h1>
          <p className={styles.signinHeader}>San Diego, CA</p>

          <div>List here</div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
