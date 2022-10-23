import styles from "./Banner.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

interface BannerProps {
  name: string;
  imgUrl: string;
}

const Banner = (props: BannerProps) => {
  const { name, imgUrl } = props;

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <h3 className={styles.title}>{name}</h3>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl}`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
