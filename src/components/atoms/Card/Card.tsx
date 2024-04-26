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
          width={185}
          height={265}
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
