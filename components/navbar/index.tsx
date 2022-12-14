import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleOnClickHome = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/profile");
  };

  const handleShowDropdown = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleSignout = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("handle signout here");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink}>
          <div className={styles.logoWrapper}>Foodie</div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src="/static/expand_more.svg"
                alt="Expand more"
                width="24px"
                height="24px"
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
