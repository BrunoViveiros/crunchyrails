import { Image } from "@/lib/Components/Image/Image";
import { Link } from "@/lib/Components/Link/Link";
import styles from "./styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.imageContainer}>
        <Image
          alt="oshi no ko image"
          src="/animes/oshi_no_ko.png"
          fill
          objectFit="cover"
          className={styles.image}
        />
      </Link>

      <Link href="/" className={styles.title}>
        Oshi no Ko
      </Link>
    </div>
  );
};

export { Card };
