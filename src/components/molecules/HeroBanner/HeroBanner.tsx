import styles from "./styles/HeroBanner.module.css";
import { Image } from "@/lib/Components/Image/Image";

const HeroBanner = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/animes/mashle.png"
        alt="hero banner image"
        fill
        objectFit="cover"
      />
    </div>
  );
};

export default HeroBanner;
