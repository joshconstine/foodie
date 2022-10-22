import Head from "next/head";
import styles from "../styles/Profile.module.css";
import Link from "next/link";
import Image from "next/image";

const Profile = () => {
  const isLoading = false;
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <a>
              <div className={styles.logoWrapper}>
                <Image
                  src="/static/netflix.svg"
                  alt="Netflix logo"
                  width="128px"
                  height="34px"
                />
              </div>
            </a>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
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
